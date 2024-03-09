export interface IUser {
  username: string;
  image?: string;
  bio?: string;
  website?: string;
  posts?: IPost[];
}

export interface IComment {
  id: string;
  content: string;
  createdAt: string;
  user: IUser;
}

export interface IPost {
  id: string;
  createdAt: string;
  description: string;
  user: IUser;
  nofComments: number;
  nofLikes: number;
  comments: IComment[];
  image?: string;
  images?: string[];
  video?: string;
}
