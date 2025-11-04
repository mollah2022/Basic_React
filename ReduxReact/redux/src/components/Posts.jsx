import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../featuers/posts/postsSlice";

const Posts = () => {
  const { isLoading, isError, posts, error } = useSelector(
    (state) => state.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <h1>Loading Posts.....</h1>;
  }

  if (!isLoading && isError) {
    content = <h1 className="text-red-500">There was an error: {error}</h1>;
  }

  if (!isLoading && !isError) {
    if (posts.length > 0) {
      content = (
        <ul>
          {posts.map((post) => (
            <li
              style={{
                listStyleType: "square",
              }}
              key={post.id}
            >
              {post.title}
            </li>
          ))}
        </ul>
      );
    } else {
      content = <h1>No posts found!</h1>;
    }
  }

  return (
    <>
      <div className="bg-white text-black mx-auto shadow rounded h-fit w-1/3 mt-4  mb-8 p-10">
        {content}
      </div>
    </>
  );
};
export default Posts;
