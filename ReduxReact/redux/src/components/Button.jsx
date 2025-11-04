const Button = ({ type, children, onHandler }) => {
  let content =
    type === "danger"
      ? "bg-yellow-500 text-white px-5 py-3 shadow rounded"
      : "bg-red-500 text-white px-5 py-3 shadow rounded";

  return (
    <>
      <div>
        <button onClick={onHandler} className={content}>
          {children}
        </button>
      </div>
    </>
  );
};
export default Button;
