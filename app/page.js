import BackgroundPhoto from "@/components/BackgroundPhoto";
import RedirectToSignIn from "@/components/RedirectToSignIn";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundPhoto
      src="/assets/splash.svg"
      blur={15}
    >
      <RedirectToSignIn />
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 flex justify-center items-center">
          <Image src='/assets/icons/home.png' height={500} width={500} className="w-72 h-auto" alt="" />
        </div>
        <p className="text-sm py-6 text-center opacity-40">Alright by kirkglodf Technology</p>
      </div>
    </BackgroundPhoto>
  );
}
