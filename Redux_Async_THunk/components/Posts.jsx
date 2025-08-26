import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

let content;

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    content = <h1>Loading Posts....</h1>;
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
      content = <h1>No Posts Found!!!</h1>;
    }
  }

  return (
    <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      {content}
    </div>
  );
};

export default Posts;
