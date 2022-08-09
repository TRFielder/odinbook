type UserType = {
  _id: string;
  username: string;
  firstname: string;
  surname: string;
  friends?: Array<UserType>;
  avatar_URL: string;
  about_text?: string;
};

export default UserType;
