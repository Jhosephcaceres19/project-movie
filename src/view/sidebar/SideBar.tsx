import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="">
        <div className="">
          <button onClick={() => setOpen(true)} className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          !open && "hidden"
        } bg-sky-600/50  w-full fixed h-[1800px] left-0 right-0 backdrop-blur-sm`}
      ></div>
      <div
        className={`${
          open ? " w-60" : "w-0"
        } bg-cyan-600 min-h-screen ml-auto fixed top-0 right-0`}
      >
        <div className={`${!open && "hidden"} pt-3 text-white`}>
          <button
            className="ml-[80%] mt-4 mb-10"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link to="/" className="link-sidebar">
            Inicio{" "}
          </Link>
          <Link to="/serie" className="link-sidebar">
            Serie
          </Link>
          <Link to="/pelicula" className="link-sidebar">
            Pelicula
          </Link>
          <Link to="/news" className="link-sidebar">
            Novedades populares
          </Link>
        </div>
      </div>
    </>
  );
};
export default SideBar;
