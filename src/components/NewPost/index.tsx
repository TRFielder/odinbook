import React, { FC, ReactElement, useContext } from 'react';
import { UserContext } from '../../utilities/UserContext';
import { useForm } from 'react-hook-form';

type FormValues = {
  postContent: string;
};

const NewPost: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => console.log(data.postContent);

  return (
    <section className="bg-white items-center border-none rounded-lg mt-10 mx-0 mb-0 pt-5 px-0 pb-7 w-4/5 shadow-sm text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Inspiring message" {...register('postContent')} id="postContent" />
        <button className="border-2 rounded-lg p-1">Post</button>
      </form>
    </section>
  );
};

export default NewPost;
