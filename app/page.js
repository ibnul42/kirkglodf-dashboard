import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col gap-3 justify-center items-center">
        <h1>Welcome to kirkglodf Technology</h1>
        <Link
          href='/sign-in'
          className="bg-[#31ED93] text-white px-6 py-2 rounded-2xl"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
