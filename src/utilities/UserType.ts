type UserType = {
  _id: string;
  username: string;
  firstname: string;
  surname: string;
  friends?: Array<UserType>;
  avatar_URL: string;
};

export default UserType;
