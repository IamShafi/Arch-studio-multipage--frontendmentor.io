"use client";

import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../lib/validators";
import Image from "next/image";
import headerImage from "/public/assets/icons/logo.svg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Login } from "../../lib/actions/login.action";

// Define modal props type

interface LoginModalProps {
  onClose: () => void; // Callback function to handle modal close
  openRegisterModal: () => void; // Callback function to handle modal reg
}

// Define form data type
type LoginFormValues = z.infer<typeof LoginSchema>;

const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  openRegisterModal,
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    // Handle form submission
    try {
      // Validate form data

      // Submit form data to server
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      Login(data).then((result) => {
        if (result.error) {
          setError("root", { message: "An error occurred" });
        } else {
          // Handle successful login if needed
          console.log("Login successful {}");
          
        }
      });
      onClose();
    } catch (error) {
      setError("root", {
        message: "An error occurred",
      });
      console.log(error);
    }
  };

  return (
    <div className="px-4 justify-center  items-center  flex  overflow-x-hidden  overflow-y-auto  fixed  inset-0  z-50  outline-none  focus:outline-none bg-neutral-800/70 ">
      <div className=" flex flex-col pl-[72px] pr-[68px] pb-[54px] text-lg font-semibold text-white rounded-xl bg-neutral-700 max-w-[567px] max-md:px-5 ">
        <header className="flex gap-2.5 self-center py-2 mt-12 text-3xl whitespace-nowrap max-md:mt-10">
          <Image src={headerImage} alt="" />
        </header>
        <h2 className="self-center mt-11 text-4xl text-center max-md:mt-10">
          Sign In
        </h2>
        <form
          className="flex flex-col mt-16 w-full"
          onSubmit={handleSubmit(onSubmit)}
          aria-label="Sign in form"
        >
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-lg font-semibold whitespace-nowrap text-white text-opacity-60"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="justify-center items-start px-[31px] pt-[11px] pb-[17px] mt-[14px] rounded-xl bg-neutral-950"
            />
            {errors.email && (
              <span className="text-red-500 mt-2">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col w-full mt-[19px]">
            <label
              htmlFor="password"
              className="text-lg font-semibold whitespace-nowrap text-white text-opacity-60 "
            >
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="justify-center items-start px-[31px] pt-[11px] pb-[17px] mt-[14px] rounded-xl bg-neutral-950 "
            />
            {errors.password && (
              <span className="text-red-500 mt-2">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            className="mt-12 w-full   justify-center pl-[72px] py-[14px] pr-[79px] text-lg font-semibold text-center text-white whitespace-nowrap rounded-3xl bg-[#060606] max-w-[210px]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Sign in"}
          </button>
          {errors.root && (
            <div className="text-red-500">{errors.root.message}</div>
          )}
        </form>

        <footer className="mt-12 text-white max-md:mt-10 max-md:max-w-full">
          <div>
            Don't have an account? Create an account{" "}
            <span
              onClick={openRegisterModal}
              className="text-[#040404] underline cursor-pointer"
            >
              signup
            </span>
          </div>
          <div
            onClick={onClose}
            className="cursor-pointer mt-4 flex gap-4 justify-center items-center py-2"
          >
            Close <IoIosCloseCircleOutline />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginModal;
