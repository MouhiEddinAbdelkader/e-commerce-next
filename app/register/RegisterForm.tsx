'use client';

import { useState } from "react";
import Input from "../componants/inputs/input";
import { FieldValues, useForm } from "react-hook-form";


const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {register, 
    handleSubmit, 
    formState : {errors}} = useForm<FieldValues>({
      defaultValues: {
        name: "",
        email: "",
        password: "",
      }
    })
  return (
    <>
    <h3>Sun up for E-Shop</h3>
    <hr className="bg-slate-300 w-full 
    h-px"/>
    <Input 
    id="name"
    label="name"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    />
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
    </>
  );
}

export default RegisterForm