import { Octokit } from '@octokit/rest';

export class GitHubClient {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor(token: string, owner: string, repo: string) {
    this.octokit = new Octokit({ auth: token });
    this.owner = owner;
    this.repo = repo;
  }

  async getFile(path: string): Promise<string> {
    try {
      const response = await this.octokit.repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path,
      });

      if ('content' in response.data) {
        return Buffer.from(response.data.content, 'base64').toString();
      }
      throw new Error('Not a file');
    } catch (error) {
      console.error('Error fetching file:', error);
      throw error;
    }
  }

  async updateFile(path: string, content: string, message: string): Promise<void> {
    try {
      const currentFile = await this.octokit.repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path,
      });

      if (!('sha' in currentFile.data)) {
        throw new Error('File not found');
      }

      await this.octokit.repos.createOrUpdateFileContents({
        owner: this.owner,
        repo: this.repo,
        path,
        message,
        content: Buffer.from(content).toString('base64'),
        sha: currentFile.data.sha,
      });
    } catch (error) {
      console.error('Error updating file:', error);
      throw error;
    }
  }
}