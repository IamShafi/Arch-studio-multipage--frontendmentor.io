"use client"
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Connect: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
    } else {
      setError(null);
      // Reset formData after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row mb-[200px] gap-10 md:gap-40">
      <h2 className="font-semibold text-[40px] ss:text-[64px] w-full md:w-[216px] leading-none">
        Connect with us
      </h2>
      <form onSubmit={handleSubmit} className="w-full ">
        {error && <p className="text-red mb-2">{error}</p>}
        <div className="mb-4 w-full border-b-[1px] border-dark">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border-none "
          />
        </div>
        <div className="mb-4 w-full border-b-[1px] border-dark">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border-none"
          />
        </div>
        <div className="mb-4 w-full border-b-[1px] border-dark">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border-none"
          ></textarea>
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-dark  h-20 w-20 text-white flex justify-center items-center"
          >
            <Image
              src="/assets/icons/arrow-icon.svg"
              alt="arrow"
              width={24}
              height={20}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Connect;
