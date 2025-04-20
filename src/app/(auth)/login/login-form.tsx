"use client";

// import { useEffect, useState, } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginBody, LoginBodyType } from "@/SchemaValidations/auth.schema";

// import http from '@/lib/http';
import authApi from "@/app/apiRequest/auth";
import { useAppContext } from "@/context/AppContext";

// type Status = "idle" | "loading" | "success" | "failure";

export default function LoginForm(): React.ReactElement {
    const { accessToken, setAccessToken } = useAppContext();
    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginBodyType) => {
        console.log(data);

        const { email, password } = data;

        const res = await authApi.login({
            email,
            password,
        });
        if (res.status) {
            console.log(res?.payload);
        }

        setAccessToken(res?.payload?.data?.accessToken);
    };

    console.log("accessToken: ", accessToken);

    return (
        <form
            className="space-y-4 md:space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <div>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your email
                </label>
                <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    {...form.register("email")}
                    autoComplete="username"
                    required
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Password
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    {...form.register("password")}
                    autoComplete="current-password"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-300 "
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>
                </div>
                <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                    Forgot password?
                </a>
            </div>
            <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
                Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline "
                >
                    Sign up
                </a>
            </p>
        </form>
    );
}
