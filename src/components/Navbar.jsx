import React from "react";

function Navbar() {
  return (
    <nav className="bg-white  border-gray-200 ">
      <div className=" flex flex-wrap items-center justify-between mx-auto ">
        <a
          href="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="../../public/Carl-Sagan-log.webp"
            className="h-16 bg-gray-500"
            alt="carl sagan Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto h-full"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col h-16 gap-10  items-center mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white   ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-a1 rounded-sm md:bg-transparent   "
                aria-current="page"
              >
                Historia
              </a>
            </li>
            <li>
              <a
                href="/soporte"
                className="block py-2 px-3 text-a1 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0      "
              >
                Soporte estudiantil
              </a>
            </li>
            <li>
              <a
                href="/matricula"
                className="block py-2 px-3 text-a1 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0     "
              >
                Matricula en linea
              </a>
            </li>
            <li className="bg-a1">
              <a
                href="#"
                className="block h-16 px-3 flex items-center text-a2 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  "
              >
                Iniciar Sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
