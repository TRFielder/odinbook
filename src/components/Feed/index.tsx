import React, { FC, ReactElement, useEffect, useContext, useState } from 'react';
import { UserContext } from '../../utilities/UserContext';
import { useParams } from 'react-router-dom';
import PostType from '../../utilities/PostType';
import Post from './Post';

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
    <section className="w-4/5  flex flex-col items-center">
      {posts.length === 0 ? (
        <p>This is where my posts would go... if I had any</p>
      ) : (
        posts.map((post) => (
          <Post
            key={post._id}
            _id={post._id}
            author={post.author}
            text={post.text}
            date={post.date}
            likes={post.likes}
            comments={post.comments}
          />
        ))
      )}
    </section>
  );
};

export default Feed;
