export interface IMember {
  name: string;
  confirmation: boolean;
}

export interface IFamily {
  id: string;
  slug: string;
  name: string;
  members: IMember[];
}
