'use client';

import { useEffect, useState } from "react";
import Input from "../componants/inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../componants/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface LoginFormProps {
  currentUser: SafeUser | null
}


const LoginForm: React.FC<LoginFormProps> = ({
  currentUser
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();
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
      signIn('credentials', {
        ...data, 
        redirect: false
      }).then((callback) => {
        setIsLoading(false)
        if(callback?.ok){
          router.push("/")
          router.refresh()
          toast.success("Logged In")
        }
        if(callback?.error) {
          toast.error(callback.error)
        }
      })
    }
    useEffect(() => {
      if(currentUser) {
        router.push("/cart");
        router.refresh()
      }
      631
    }, [])
    if(currentUser) {
      return <p className="text-center">Logged in. Redirecting </p>
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