import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import googleIcon from "./icon/google.png";
import facebookIcon from "./icon/facebook.png";
import githubIcon from "./icon/github.png";
import auth from "../firebase";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const customId = "custom toast id";
const Authentication = () => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user2, loading2, error2] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, user3, loading3, error3] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.uid) {
      navigate("/");
    }
  });
  if (loading || loading1 || loading2 || loading3) {
    return <Loading></Loading>;
  }
  if (error || error1 || error2 || error3) {
    toast.error(error?.message || error1?.message || error2?.message || error3.message, {
      toastId: customId,
    });
  }
  if (user1 || user2 || user3) {
    toast.success("Successfully Login", {
      toastId: customId,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (toggle) {
      if (password !== password2) {
        toast.warning("Password Doesn't Match", {
          toastId: customId,
        });
      } else {
        toggle && createUserWithEmailAndPassword(email, password);
      }
    }
    !toggle && signInWithEmailAndPassword(email, password);
  };
  return (
    <div className={`bg-blue-300 min-h-screen w-full p-4`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="container  mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[480px] mx-auto mt-4 border-2 border-solid border-blue-600 rounded p-4">
            <h2 className={`font-thin text-6xl my-4 text-center`}>{toggle ? <span>Please Register</span> : <span>Please Log In</span>}</h2>
            <div className="w-full h-[1px] bg-blue-600 mb-2 mt-[-5px]"></div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                onBlur={(e) => {
                  setEmail(e.target.value);
                }}
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
                shadow={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput
                onBlur={(e) => {
                  setPassword(e.target.value);
                }}
                id="password2"
                type="password"
                required={true}
                shadow={true}
              />
            </div>
            {toggle && (
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="repeat-password" value="Repeat password" />
                </div>
                <TextInput
                  onBlur={(e) => {
                    setPassword2(e.target.value);
                  }}
                  id="repeat-password"
                  type="password"
                  required={true}
                  shadow={true}
                />
              </div>
            )}
            {toggle && (
              <div className="flex items-center gap-2">
                <Checkbox id="agree" />
                <Label htmlFor="agree">
                  I agree with the <span className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</span>
                </Label>
              </div>
            )}
            <div onClick={() => setToggle(!toggle)} className="flex items-center gap-2">
              {toggle ? (
                <div>
                  Already Have an Account? <span className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">Continue with LogIn</span>
                </div>
              ) : (
                <div>
                  New Here? <span className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">Continue with Register</span>
                </div>
              )}
            </div>
            <Button type="submit">{toggle ? <span>Register New Account</span> : <span> Log In</span>}</Button>
          </form>
        </div>
        <div className="container">
          <h2 className={`font-thin text-4xl text-center`}>Or Continue With</h2>
          <div className="w-[480px] mx-auto h-[1px] bg-blue-600 mb-2"></div>
          <div className="flex items-center justify-center flex-col w-[480px] mx-auto gap-y-4">
            <Button onClick={() => signInWithGoogle()} className={`w-full`}>
              {" "}
              <span className={`h-6 w-6 mx-2`}>
                {" "}
                <img className={`bg-blue-50 rounded-xl`} src={googleIcon} alt="Google icon" />{" "}
              </span>{" "}
              Continue With Google
            </Button>
            <Button className={`w-full`}>
              {" "}
              <span className={`h-6 w-6 mx-2`}>
                {" "}
                <img className={`bg-blue-50 rounded`} src={facebookIcon} alt="Facebook icon" />{" "}
              </span>{" "}
              Continue With Facebook
            </Button>
            <Button className={`w-full`}>
              {" "}
              <span className={`h-6 w-6 mx-2`}>
                {" "}
                <img className={`bg-blue-50 rounded-xl`} src={githubIcon} alt="Github icon" />{" "}
              </span>{" "}
              Continue With Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
