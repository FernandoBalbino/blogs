import Image from "next/image";
import { electrolize } from "@/app/fonts";
import ProgressBar from "./progressBar";
import Link from "next/link";
import MenuMobile from "./mobileMenu";

export default function Header() {
  return (
    <>
      <header
        className={`fixed select-none z-20 backdrop-blur-[7px] border-b-2 transition-all ${electrolize.className}  w-full`}
      >
        <div className="py-3  max-w-[1200px] mx-auto containerControl flex justify-between px-6  md:flex  items-center">
          {/* Logo */}
          <Link href={"/"} scroll={true} className="gap-x-3 flex items-center">
            <Image src={"favicon.svg"} width={40} height={40} alt="Logo" />
            <div className={`${electrolize.className} text-2xl font-bold`}>
              Portfólio
            </div>
          </Link>

          <MenuMobile />
        </div>
      </header>
      <ProgressBar />
    </>
  );
}
