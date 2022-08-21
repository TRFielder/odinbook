import React, { FC, ReactElement, useEffect, useContext, useState } from 'react';
import { UserContext } from '../../utilities/UserContext';
import { useParams } from 'react-router-dom';
import PostType from '../../utilities/PostType';

const Feed: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);
  const params = useParams();
  const [posts, setPosts] = useState<Array<PostType>>([]);

  useEffect(() => {
    getProfileData();
  }, [params]);

  const getProfileData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/${params.id}/posts`, {
      credentials: 'include',
      mode: 'cors',
    });
    const result = await response.json();
    setPosts(result);
  };

  return (
    <section className="bg-white items-center border-none rounded-lg mt-10 mx-0 mb-0 pt-5 px-0 pb-7 w-4/5 shadow-sm text-center">
      {posts.length === 0 ? <p>This is where my posts would go... if I had any</p> : posts.map((post) => <p key={post._id}>{post.text}</p>)}
    </section>
  );
};

export default Feed;
