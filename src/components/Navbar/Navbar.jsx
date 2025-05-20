import React from "react";

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar flex justify-between bg-base-100 items-center">
        <div className="">
          <a>
            <span className="text-[#003EA4] text-2xl font-bold">Auction</span>{" "}
            <span className="text-[#FFD337] text-2xl font-bold">Gallery</span>
          </a>
        </div>

        <div className="flex gap-14 poppins">
          <h1>Home</h1>
          <h1>Auctions</h1>
          <h1>Categories</h1>
          <h1>How to works</h1>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <button className="btn btn-circle mr-5">
              <div className="indicator text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />{" "}
                </svg>
                <span className="badge indicator-item bg-[#2e2e2e] text-white text-xs w-5 h-5 p-0 rounded-full flex items-center justify-center">
                  9
                </span>
              </div>
            </button>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-20 h-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="photos/Ellipse 19.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
