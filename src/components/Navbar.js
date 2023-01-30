import React from "react";
import auth from "../firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { toast } from "react-toastify";
import CustomLink from "./CustomLink";
const customId = "custom-id-for-navbar";
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
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li className={`${customCss}`}>
                <CustomLink to="/about">About</CustomLink>
              </li>
              <li className={`${customCss}`}>
                <CustomLink to="/private">Private</CustomLink>
              </li>
              <li className={`${customCss}`}>
                <CustomLink to="/authentication">
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
                </CustomLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
