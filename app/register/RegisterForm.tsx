'use client';

import { useState } from "react";
import Input from "../componants/inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../componants/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import Axios from 'axios'
import { signIn } from "next-auth/react"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



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
    const router = useRouter();
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true)
      Axios.post("/api/register", data).then(() => {
        toast.success("Account Created");

        signIn('credentials', {
          email :   data.email,
          password: data.password,
          redirect: false
        }).then((callback) => {
          if(callback?.ok){
            router.push("/cart")
            router.refresh()
            toast.success("Logged In")

          }
          if(callback?.error) {
            toast.error(callback.error)

          }
        })
      }).catch(() => {
        toast.error("something wrong")
      }).finally(() => {
        setIsLoading(false)
      })
    }
    
  return (
    <>

    <h3>Sun up for E-Shop</h3>
    <Button 
    outline
    label="Sign up with google"
    icon={AiOutlineGoogle}
    onClick={() => {}}
    />
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
    
        <Button 
        onClick={handleSubmit(onSubmit)}
        label={isLoading 
          ? "Loading" 
        : "Sign Up"}  />

        <p className="text-sm flex items-center justify-center pt-3" >
          Already have account? {" "}
          <Link className="underline" href={"/login"}>
            Log In
          </Link>
        </p>
    </>
  );
}

export default RegisterForm