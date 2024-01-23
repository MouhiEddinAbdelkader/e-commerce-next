'use client';

import { useState } from "react";
import Input from "../componants/inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../componants/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";


const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {register, 
    handleSubmit, 
    formState : {errors}} = useForm<FieldValues>({
      defaultValues: {
        email: "",
        password: "",
      }
    })
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true)
      console.log(data)
    }
  return (
    <>

    <h3>Sign In To E-Shop</h3>
    <Button 
    outline
    label="Continue with google"
    icon={AiOutlineGoogle}
    onClick={() => {}}
    />
    <hr className="bg-slate-300 w-full 
    h-px"/>
    <Input 
    id="email"
    label="email"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    />
    <Input 
    id="password"
    label="Password"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    type="password"
    />
    
        <Button 
        onClick={handleSubmit(onSubmit)}
        label={isLoading 
          ? "Loading" 
        : "Log In"}  />

        <p className="text-sm flex items-center justify-center pt-3" >
          Do not have account? {" "}
          <Link className="underline" href={"/register"}>
            Sign Up
          </Link>

        </p>

    </>
  );
}

export default LoginForm