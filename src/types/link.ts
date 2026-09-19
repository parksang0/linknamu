export interface ProfileData {
  name: string;
  bio: string;
  avatarUrl?: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  clickCount: number;
}
