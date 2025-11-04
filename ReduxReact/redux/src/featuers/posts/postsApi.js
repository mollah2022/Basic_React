const getposts = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  return response.json();
};
export default getposts;
