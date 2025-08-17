import "../App.css";

export default function Footer() {
  return (
    <footer className=" mt-24 text-centerr">
      <p className="items-center">
        © {new Date().getFullYear()} Demo App. All rights reserved.
      </p>
    </footer>
  );
}
