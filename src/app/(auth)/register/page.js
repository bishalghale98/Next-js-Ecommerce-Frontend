"use client";

import { EmailRegex } from "@/constants/regex";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FiUserPlus } from "react-icons/fi";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
        <form className="w-full flex-1 mt-8" method="POST">
          <div className=" my-7 border-b text-center">
            <div className="leading-none  inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              sign up with e-mail
            </div>
          </div>
          <div className="mx-auto max-w-xs">
            <input
              className="w-full px-8 py-4 mb-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="username"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}

            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: EmailRegex,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
            <button
              type="submit"
              className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none cursor-pointer"
            >
              <FiUserPlus className="w-6 h-6 -ml-2" strokeWidth={2} />
              <span className="ml-3">Sign Up</span>
            </button>
            <p className="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by E-Hatiya
              <Link
                href={`/terms`}
                className="border-b border-gray-500 border-dotted"
              >
                Terms of Service
              </Link>
              and its
              <Link
                href={`/privacy`}
                className="border-b border-gray-500 border-dotted"
              >
                Privacy Policy
              </Link>
            </p>
            <p className="mt-4 text-sm text-center">
              Already have an account?
              <Link
                href="/login"
                className="text-indigo-600 hover:underline ml-1"
              >
                Go to Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
