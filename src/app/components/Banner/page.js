import { electrolize } from "@/app/fonts";
import SkillsUtil from "./skillsUI";
import Link from "next/link";
import Noticias from "./noticias";
export default function banner() {
  return (
    <>
      <section className="h-screen   flex bg-center  items-center justify-center">
        <article className="relative   max-w-[1200px] mx-auto h-full bg gap-x-3 content-center px-5   w-full md:flex justify-center items-center">
          <div className=" mb-4  w-[60%] ">
            <h1
              className={`md:text-8xl text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6F5CF3] via-[#9A8CF7] to-[#BFB0FA] ${electrolize.className}`}
            >
              Full Stack
              <br />
              <span className="text-[#29363D]">Developer</span>
              <span className=" inline-block animate-pulse duration-0 text-[#9F91F8]">
                _
              </span>
            </h1>
            <p className="  font-medium my-3 text-[14px] text-[#656b8a] leading-6 max-w-[500px]">
              Minha missão é tornar a tecnologia acessível. Desenvolvo sistemas
              intuitivos para que você possa focar no que realmente importa: o
              seu negócio.
            </p>
            <Link
              className="bg-[#7462F4] inline-block transition-all hover:shadow-2xl hover:scale-95 hover:shadow-[#29363D] rounded-md py-2 px-4   text-white hover:bg-[#9E90F7] shadow-lg "
              href={"/"}
            >
              Solicitar serviço
            </Link>
          </div>
          <div className="hidden md:flex w-[40%] flex-col items-center  h-full   justify-center ">
            <SkillsUtil />
            <Noticias />
          </div>
        </article>
      </section>
    </>
  );
}
