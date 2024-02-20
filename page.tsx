'use client'
import Card from "@/components/Card";
import LoginSidebarImage from "@/components/LoginSidebarImage";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex h-screen">
        <LoginSidebarImage />
        <div className="flex-1 flex items-center justify-center">
        <RegisterForm />
        </div>
    </main>
    )
  }
