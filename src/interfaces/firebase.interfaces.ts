export interface IMember {
  name: string;
  confirmation: boolean;
  isChildren: boolean;
}

export enum SocialTag {
  FAMILY = 'FAMILIA',
  FRIENDS = 'AMIGOS',
  // Add more tags as needed
  HOST_1 = import.meta.env.VITE_APP_HOST_1,
  HOST_2 = import.meta.env.VITE_APP_HOST_2,
}

export interface IFamily {
  id: string;
  slug: string;
  name: string;
  members: IMember[];
  tags?: SocialTag[];
}
