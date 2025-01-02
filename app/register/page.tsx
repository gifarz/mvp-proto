"use client";

import React from "react";
import { MailIcon, EyeSlashFilledIcon, EyeFilledIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h1>Welcome to Register Page</h1>
      <div className="text-center justify-center w-full">
        <Input
          label="Email"
          placeholder="you@example.com"
          variant="bordered"
        />
        <Input
          className="mt-2"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          label="Password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
        />
        <Input
          className="mt-2"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          label="Re-enter Password"
          placeholder="Re-enter your password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
        />
        <Button
          className="text-sm font-normal text-default-600 bg-default-300 mt-2"
          variant="flat"
          fullWidth={true}
        >
          Register
        </Button>
        <p className="mt-2">
          Already have an account ? please
          <span>&nbsp;</span>
          <span className="text-blue-600 cursor-pointer" onClick={navigateToLogin}>
            login here
          </span>
        </p>
      </div>
    </section>
  );
}
