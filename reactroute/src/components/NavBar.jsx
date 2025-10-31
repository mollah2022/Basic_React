import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="h-fit w-full px-8 py-8 bg-black text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">LOGO</h1>
          </div>
          <div>
            <ul className="flex gap-6 ">
              <Link
                to={"/"}
                className="font-semibold text-2xl hover:text-yellow-200"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="font-semibold text-2xl hover:text-yellow-200"
              >
                About
              </Link>
              <Link
                to={"/contract"}
                className="font-semibold text-2xl hover:text-yellow-200"
              >
                Contract
              </Link>
              <Link
                to={"/portfolio"}
                className="font-semibold text-2xl hover:text-yellow-200"
              >
                Portfolio
              </Link>
            </ul>
          </div>
          <div>
            <button className="bg-white text-black rounded-lg shadow-2xl px-5 py-2">
              SignUp
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
