import BackgroundPhoto from "@/components/BackgroundPhoto";
import ImageComponent from "@/components/ImageComponent";
import SignInForm from "./SignInForm";

export const metadata = {
  title: 'Sign In',
};

export default function SignIn() {
  return (
    <BackgroundPhoto
      src="/assets/signIn.svg"
      alt="Background Photo"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="bg-white px-20 py-16 rounded-[36px] shadow-[0_18px_48px_36px_rgba(2,106,56,0.05)] space-y-5">
        <div className="flex gap-4">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <ImageComponent
                src="/assets/profile.jpg"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-xl text-[#31ED93]">Hello</p>
            <h1 className="text-3xl text-[#010C06] font-bold">John Doe</h1>
            <p className="text-[#9B9B9B]">Enter your Code to Access your Account</p>
          </div>
        </div>
        <SignInForm />
      </div>
    </BackgroundPhoto>
  );
}
