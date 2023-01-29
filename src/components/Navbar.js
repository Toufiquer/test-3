import React from "react";
import { Link } from "react-router-dom";
import auth from "../firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { toast } from "react-toastify";
const customId = "custom-id-for-this-toast";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, loadingA, errorA] = useSignOut(auth);
  if (loading || loadingA) {
    return <Loading></Loading>;
  }
  if (error || errorA) {
    toast.error(error.message, {
      toastId: customId,
    });
  }
  const customCss = "font-semibold px-2 hover:text-white duration-500";
  return (
    <div className={` bg-blue-500`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between min-h-[60px]">
          <div className="text-3xl font-thin">Toufiquer </div>
          <nav>
            <ul className={`flex items-center justify-center`}>
              <li className={`${customCss}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`${customCss}`}>
                <Link to="/about">About</Link>
              </li>
              <li className={`${customCss}`}>
                <Link to="/private">Private</Link>
              </li>
              <li className={`${customCss}`}>
                <Link to="/authentication">
                  {user ? (
                    <span
                      onClick={() => {
                        signOut();
                        toast("Successfully Log Out", {
                          toastId: customId,
                        });
                      }}
                    >
                      Log Out
                    </span>
                  ) : (
                    "Log In"
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
