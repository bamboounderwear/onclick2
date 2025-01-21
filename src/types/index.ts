export interface SiteConfig {
  title: string;
  description: string;
  navigation: NavigationItem[];
}

export interface NavigationItem {
  label: string;
  path: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      base: string;
      heading: string;
    };
  };
}

export interface ContentBlock {
  id: string;
  type: string;
  content: Record<string, any>;
}

export interface Page {
  slug: string;
  title: string;
  description: string;
  blocks: ContentBlock[];
}