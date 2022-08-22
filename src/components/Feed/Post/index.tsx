import React, { FC, ReactElement, useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostType from '../../../utilities/PostType';

const Post: FC<PostType> = (props: PostType): ReactElement => {
  console.log(props.date);
  return (
    <section className="bg-white items-center border-none rounded-lg my-2 mx-0 pt-5 px-0 pb-7 w-full shadow-sm text-center">
      <h1>{props.author.firstname + ' ' + props.author.surname}</h1>
      <small>{props.date.toLocaleString()}</small>
      <p>{props.text}</p>
    </section>
  );
};

export default Post;
