"use client";

import { login } from "@/api/auth";
import { EmailRegex } from "@/constants/regex";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FiUserPlus } from "react-icons/fi";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    try {
      const response = await login(data);
      if (response?.status === 200) {
        toast.success("Login successful", {
          autoClose: 750,
        });
        router.push("/");
      }
    } catch (error) {
      toast.error(error.response?.data, {
        autoClose: 750,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-2xl xl:text-3xl font-extrabold">Sign in</h1>
        <form
          className="w-full flex-1 mt-8"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" my-7 border-b text-center">
            <div className="leading-none  inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              sign in with e-mail
            </div>
          </div>
          <div className="mx-auto max-w-xs">
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
            <button
              type="submit"
              className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none cursor-pointer"
            >
              <FiUserPlus className="w-6 h-6 -ml-2" strokeWidth={2} />
              <span className="ml-3">{loading ? "Loading..." : "Sign in"}</span>
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
              Don’t have an account?
              <Link
                href="/register"
                className="text-indigo-600 hover:underline ml-1"
              >
                Create one
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
