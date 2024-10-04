import React from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeDropper, FaEyeLowVision } from "react-icons/fa6";
import { IoMdAlert } from "react-icons/io";
import { EMAIL_REGEX } from "../constants/regex";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  console.log(errors);

  // const { name, ref, onChange, onBlur } = register("email");

  function submitForm(data) {
    console.log(data);
  }

  return (
    <section className="">
      <div className="md:w-full lg:w-1/3 h-auto relative m-auto border-2 p-7 rounded-md ">
        <div className="bg-green-200 w-[100px] h-[100px] -z-20 rounded-br-full absolute top-0 left-0 "></div>
        <div className="bg-indigo-200 w-[50px] h-[50px] -z-20 rounded-bl-full absolute top-0 right-0 "></div>

        <div className="z-50">
          <h1 className="text-xl z-1 font-bold text-gray-800 mb-5">
            Sign in to your Account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleSubmit(submitForm)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                // name={name}
                // ref={ref}
                // onChange={onChange}
                // onBlur={onBlur}
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Invalid Email Address",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 "
                placeholder="name@company.com"
              />
              <p className="text-red-700 font-[500] pl-2 mt-2">
                {" "}
                {errors.email?.message}
              </p>
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password Address is required",
                  minLength: {
                    value: 8,
                    message: "Passwrd length must be greater than 8",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 block w-full p-2.5 "
              />
              <p className="text-red-700 font-[500] pl-2 mt-2">
                {" "}
                {errors.password?.message}
              </p>
              <div className=" flex  text-[16px] text-gray-900 absolute top-11 right-5">
                <FaEye />
                <FaEyeLowVision />
              </div>
            </div>
            <div className="">
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:underline "
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-indigo-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>

            <p className="text-sm font-light text-gray-500 ">
              Don’t have an account yet?{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
