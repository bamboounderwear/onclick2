const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const GITHUB_REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI;

export function initiateGitHubAuth() {
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: GITHUB_REDIRECT_URI,
    scope: 'repo',
  });

  window.location.href = `https://github.com/login/oauth/authorize?${params}`;
}

export function getStoredToken(): string | null {
  return localStorage.getItem('github_token');
}

export function setStoredToken(token: string): void {
  localStorage.setItem('github_token', token);
}

export function clearStoredToken(): void {
  localStorage.removeItem('github_token');
}