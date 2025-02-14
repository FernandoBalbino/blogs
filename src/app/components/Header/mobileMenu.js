"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function MenuMobile() {
  const [linkAtivo, setLinkAtivo] = useState("");
  const [mobileIsOn, setMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setLinkAtivo(window.location.pathname);
  }, []);

  useEffect(() => {
    if (mobileIsOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileIsOn) {
        setMobile(false); // Fecha o menu automaticamente
        document.body.style.overflow = ""; // Restaura o scroll
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileIsOn]);

  const menuLinks = [
    { nome: "Projetos", href: "/projetos", active: false },
    { nome: "Blog", href: "/blog", active: false },
    { nome: "Contato", href: "/contato" },
  ];

  return (
    <>
      {/* Menu Mobile */}
      {isMounted && (
        <nav
          className={`fixed top-0 left-0 w-screen h-screen z-20 overflow-hidden md:hidden ${mobileIsOn ? "block" : "hidden"}`}
          style={{
            pointerEvents: mobileIsOn ? "auto" : "none",
          }}
        >
          <ul className="flex bg-[#f3f1ff] bg-no-repeat bg-cover bg-hero-pattern h-full items-center flex-col justify-center gap-y-5">
            {menuLinks.map((item, index) => (
              <li
                key={index}
                className={`relative flex items-center ${linkAtivo === item.href && item.nome !== "Contato" ? "before:flex before:w-2  before:bg-[#8776F9] before:animate-pulse before:h-2 before:absolute before:top-3 before:left-[-10px] before:rounded-full" : "bg-red-700"}`}
              >
                <Link
                  scroll={true}
                  onClick={() => {
                    setMobile(false);
                  }}
                  href={item.href}
                  className={`${item.nome === "Contato" ? "bg-[#6F5CF3] rounded-md py-2 px-4 text-white shadow-lg shadow-[#9d90f0] hover:bg-[#8776f9]" : "hover:text-[#4331b8]"} transition-all text-[25px]`}
                >
                  {item.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Menu Desktop */}
      <nav className="hidden md:flex items-center gap-x-5 md:static md:w-auto md:h-auto bg-white md:bg-inherit">
        <ul className="md:flex-row flex items-center flex-col justify-center md:gap-x-2">
          {menuLinks.map((item, index) => (
            <li
              key={index}
              className={`relative ${linkAtivo === item.href && item.nome !== "Contato" ? "before:block before:w-2 before:bg-[#8776F9] before:animate-pulse before:h-2 before:absolute before:top-5 before:left-[4.5px] before:rounded-full" : ""}`}
            >
              <Link
                onClick={() => setLinkAtivo(item.href)}
                href={item.href}
                className={`${item.nome === "Contato" ? "bg-[#6F5CF3] rounded-md py-2 px-4 text-white shadow-lg shadow-[#9d90f0] hover:bg-[#8776f9] ml-3" : "hover:text-[#4331b8] hover:bg-[#79628c1f] transition-all py-3 px-4 rounded-lg"} relative flex items-center transition-all`}
              >
                {item.nome}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão do Menu Mobile */}
      <button
        aria-label="Menu"
        onClick={() => setMobile(!mobileIsOn)}
        className="z-50 md:hidden p-2 flex flex-col justify-center items-center"
      >
        <span
          className={`block h-[3px] w-7 bg-[#6F5CF3] ${mobileIsOn ? "rotate-45" : ""}`}
        />
        <span
          className={`block h-[3px] w-7 my-1 bg-[#6F5CF3] ${mobileIsOn ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block h-[3px] w-7 bg-[#6F5CF3] ${mobileIsOn ? "-rotate-45" : ""}`}
        />
      </button>
    </>
  );
}
