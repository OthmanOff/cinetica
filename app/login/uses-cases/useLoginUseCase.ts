import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface FormData {
  username: string;
  password: string;
}

export const useLoginUseCase = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const router = useRouter();

  const LoginAndRedirectIfSuccessful = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username: formData.username,
      password: formData.password,
    });
    console.log(result);
    if (result?.ok) {
      // Redirect user after successful login
      router.push("/home");
    }
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    if (e.currentTarget.value.length == 0) {
      setErrorMessage("");
    }
  };
  return { formData, LoginAndRedirectIfSuccessful,handleChange,errorMessage};
};
