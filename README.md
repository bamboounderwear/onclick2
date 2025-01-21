# Git-based Headless CMS

A modern, Git-based headless CMS that uses GitHub as a backend and deploys to Netlify.

## One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/git-based-cms)

After clicking the deploy button:

1. Netlify will create a copy of this repository in your GitHub account
2. Create a new site connected to your repository
3. Deploy the site automatically

## Post-Installation Setup

1. Go to your GitHub account settings: https://github.com/settings/developers
2. Create a new OAuth App:
   - Application name: Your site name
   - Homepage URL: Your Netlify site URL
   - Authorization callback URL: Your Netlify site URL + `/admin/callback`
3. Copy the Client ID
4. Go to your Netlify site settings > Build & deploy > Environment variables
5. Update `VITE_GITHUB_CLIENT_ID` with your Client ID
6. Update `VITE_GITHUB_REDIRECT_URI` with your Netlify site URL + `/admin/callback`

## Usage

- Public website: `https://your-site.netlify.app`
- Admin interface: `https://your-site.netlify.app/admin`

## Features

- Visual drag-and-drop content editor
- GitHub-based content storage
- Automatic deployments
- Responsive design
- PWA support