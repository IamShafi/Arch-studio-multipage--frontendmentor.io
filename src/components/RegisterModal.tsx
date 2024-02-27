"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../lib/validators";
import headerImage from "/public/assets/icons/logo.svg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Registration } from "../../lib/actions/registration.action";

// Define modal props type
interface RegisterModalProps {
  onClose: () => void; // Callback function to handle modal close
  openLoginModal: () => void; // Callback function to handle modal login
}

// Define form data type
type RegisterFormValues = z.infer<typeof RegisterSchema>;

const RegisterModal: React.FC<RegisterModalProps> = ({
  onClose,
  openLoginModal,
}) => {
  const [registrationError, setRegistrationError] = useState<string | null>("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    // Handle form submission
    try {
      // Validate form data
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        return;
      }
      // Submit form data to server
      // await new Promise((resolve) => setTimeout(resolve, 2000));hoo
      console.log(data);
      Registration(data).then((res) => {
        if (res.error) {
          setRegistrationError(res.error);
        }
        if (res.success) {
          setRegistrationError(res.success);
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      });

      //
    } catch (error) {
      setError("root", {
        message: "An error occurred",
      });
      console.log(error);
    }
  };

  return (
    <div className="px-4 justify-center  items-center  flex  overflow-x-hidden  overflow-y-auto  fixed  inset-0  z-50  outline-none  focus:outline-none bg-neutral-800/70 ">
      <div className="flex flex-col pl-[72px] pr-[68px] pb-[54px] text-lg font-semibold text-white rounded-xl bg-neutral-700 max-w-[567px] max-md:px-5 ">
        <header className="flex gap-2.5 self-center py-2 mt-12 text-3xl whitespace-nowrap max-md:mt-10">
          <Image src={headerImage} alt="" />
        </header>
        <h2 className="self-center mt-11 text-4xl text-center max-md:mt-10">
          Sign In
        </h2>

        <form
          className="flex flex-col mt-16 w-full"
          aria-label="Sign up form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-lg font-semibold whitespace-nowrap text-white text-opacity-60"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className={`justify-center items-start px-[31px] pt-[11px] pb-[17px] mt-[14px] rounded-xl bg-neutral-950 ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email")}
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
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`justify-center items-start px-[31px] pt-[11px] pb-[17px] mt-[14px] rounded-xl bg-neutral-950 ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 mt-2">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col w-full mt-[19px]">
            <label
              htmlFor="confirmPassword"
              className="text-lg font-semibold whitespace-nowrap text-white text-opacity-60 "
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className={`justify-center items-start px-[31px] pt-[11px] pb-[17px] mt-[14px] rounded-xl bg-neutral-950 ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 mt-2">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-[40px] w-full justify-center pl-[21px] py-[14px] pr-[15px] text-lg font-semibold text-center text-white whitespace-nowrap rounded-3xl bg-[#060606] max-w-[257px]"
          >
            {isSubmitting ? "Loading..." : "Create an account"}
          </button>
          <span className="text-red-500">{registrationError}</span>
        </form>

        <footer className="mt-12 text-white max-md:mt-10 max-md:max-w-full">
          <div>
            Have an account? Sign in account
            <span
              onClick={openLoginModal}
              className="text-[#040404] underline cursor-pointer"
            >
              signin
            </span>
          </div>
          <div
            onClick={onClose}
            className="cursor-pointer mt-4 flex gap-4 justify-center items-center"
          >
            Close
            <IoIosCloseCircleOutline />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RegisterModal;
