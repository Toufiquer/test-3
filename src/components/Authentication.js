import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import googleIcon from "./icon/google.png";
import facebookIcon from "./icon/facebook.png";
import githubIcon from "./icon/github.png";
const Authentication = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`bg-blue-300 min-h-screen w-full p-4`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="container  mx-auto">
          <form className="flex flex-col gap-2 w-[480px] mx-auto mt-4 border-2 border-solid border-blue-600 rounded p-4">
            <h2 className={`font-thin text-6xl my-4 text-center`}>{toggle ? <span>Please Register</span> : <span>Please Log In</span>}</h2>
            <div className="w-full h-[1px] bg-blue-600 mb-2 mt-[-5px]"></div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput id="email2" type="email" placeholder="name@flowbite.com" required={true} shadow={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput id="password2" type="password" required={true} shadow={true} />
            </div>
            {toggle && (
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="repeat-password" value="Repeat password" />
                </div>
                <TextInput id="repeat-password" type="password" required={true} shadow={true} />
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
            <Button type="submit" className={`w-full`}>
              {" "}
              <span className={`h-6 w-6 mx-2`}>
                {" "}
                <img className={`bg-blue-50 rounded-xl`} src={googleIcon} alt="Google icon" />{" "}
              </span>{" "}
              Continue With Google
            </Button>
            <Button type="submit" className={`w-full`}>
              {" "}
              <span className={`h-6 w-6 mx-2`}>
                {" "}
                <img className={`bg-blue-50 rounded`} src={facebookIcon} alt="Facebook icon" />{" "}
              </span>{" "}
              Continue With Facebook
            </Button>
            <Button type="submit" className={`w-full`}>
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
