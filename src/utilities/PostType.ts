import UserType from './UserType';

type PostType = {
  _id: string;
  author: UserType;
  text: string;
  date: Date;
  likes: Array<UserType>;
  comments: Array<UserType>;
};

export default PostType;
