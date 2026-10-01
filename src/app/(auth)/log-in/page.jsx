"use client";

import Link from "next/link";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "../../../lib/auth-client";

export default function LogInPage() {
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("after Log in Just " , data);


    const {data:resData, error}= await signIn.email({
    email: data.email ,
    password: data.password ,
    rememberMe: true, 
    callbackURL: "/", 

    })

    console.log("after mongodb submit " , resData, error);

   
  };

  const handlecliclgoogleauth = async()=>{
      const data = await signIn.social({
        provider: 'google'
      })
  
  
      console.log("google auth config" , data);
    }
    const handlecliclgithubauth = async()=>{
      const data = await signIn.social({
        provider: 'github'
      })
  
  
      console.log("google auth config" , data);
    }


  return (
    <div className="flex justify-center items-center my-15">
        <div className="w-110 pt-16 pb-8 rounded-3xl flex justify-center items-center border-2 border-lime-600" >
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <h1 className="text-white flex justify-center items-center text-2xl mb-2 font-oswald font-bold">Please Log in!</h1>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="divider my-[-3] text-xs text-gray-400">OR</div>
      
            <div className="flex justify-center items-center">
              <div className="flex gap-3  items-center ">
              <FcGoogle onClick={handlecliclgoogleauth} className="text-3xl cursor-pointer" />
              <FaGithub onClick={handlecliclgithubauth} className="text-3xl cursor-pointer" />
      
      
            </div></div>
      
            <div className="flex  items-center gap-2   mb-[-20]">
              <Button type="submit" className='px-25 bg-lime-300 font-bold text-lime-800'>
                <Check />
                Login
              </Button>
              <Button type="reset" variant="secondary" className='px-8 text-lime-600'>
                Reset
              </Button>
            </div>
            <p className="flex justify-center gap-2 items-center text-gray-400 text-xs mt-3">Create a new account <span className="text-blue-500 underline"><Link href='/sign-up' >Sign Up</Link></span></p>
    </Form>
        </div>
    </div>
  );
}