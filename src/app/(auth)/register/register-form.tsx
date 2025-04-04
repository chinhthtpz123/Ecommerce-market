"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisBody, RegisBodyType } from "@/SchemaValidations/auth.schema";

export default function RegisterForm(): React.ReactElement {
  const form = useForm<RegisBodyType>({
    resolver: zodResolver(RegisBody),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (data: RegisBodyType) => {
    console.log(data);
  };

  return (
    <div className="flex w-1/2 h-11/12 items-center justify-center ">
      <div className="shadow-sm p-2 bg-white rounded-md">
        <h3 className="w-[inherit] text-2xl text-custom p-2">Đăng ký</h3>
        <div className="w-[inherit] mt-5 p-2">
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-2"
          >
            <div className="flex w-full space-x-1">
              <div className="flex flex-col w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  type="text"
                  placeholder="First Name"
                  {...form.register("firstName")}
                  required
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Last Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  type="text"
                  placeholder="Last Name"
                  {...form.register("lastName")}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="email"
                {...form.register("email")}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="password"
                placeholder="••••••••"
                {...form.register("password")}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="password"
                placeholder="••••••••"
                {...form.register("confirmPassword")}
              />
              {form.formState.errors && (
                <p className="text-sm text-red-700 mt-1">
                  {form.formState.errors.confirmPassword?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
