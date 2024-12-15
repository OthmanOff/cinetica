"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

interface FormData {
  username: string;
  password: string;
}

export default function CardWithForm() {
  
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    if (e.currentTarget.value.length == 0) {
      setErrorMessage("");
    }
  };
  const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        const result = await signIn("credentials", {
          redirect: false, 
          username:formData.username,
          password:formData.password
        });
        console.log(result)
        if (result?.ok) {
          // Redirect user after successful login
          router.push("/home");
        }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card className="flex flex-col rounded-none justify-between h-screen w-screen md:w-[350px] md:h-full md:rounded-xl md:shadow md:border dark:bg-black dark:text-white ">
        <CardHeader>
          <CardTitle className="text-3xl flex justify-center py-4 md:text-2xl ">Cinetica</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col w-full items-center gap-10 md:gap-4">
            <div className="flex flex-col space-y-1.5 w-[60%]">
              <Label htmlFor="name" className="text-2xl md:text-base">Username</Label>
              <Input
                
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5 w-[60%]">
              <Label htmlFor="framework" className="text-2xl md:text-base">Password</Label>
              <Input
                name="password"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="text-red-700 text-sm">{errorMessage}</span>
            </div>
            <Button type="submit">Login</Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          
        </CardFooter>
      </Card>
    </form>
  );
}
