import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs"
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5x1 font-semibold">
              Chat With PDF
            </h1>
            <UserButton afterSignOutUrl="/"></UserButton>
          </div>

          <div className="flex mt-5">
            {isAuth && <Button> Go to Chats</Button>}
          </div>

          <p className="max-w-x1 mt-5 text-lg text-slate-600">Instantly answer questions of PDF based on AI</p>

          <div className="w-full mt-5">
            {isAuth ? (<FileUpload></FileUpload>) : (
              <Link href="/signin">
                <Button>Login to get started!
                  <LogIn className="w-4 h-4 ml-2"></LogIn>
                </Button> 
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
