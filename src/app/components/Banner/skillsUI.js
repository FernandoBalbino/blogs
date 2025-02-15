"use client";
import Image from "next/image";
export default function SkillsUtil() {
  const skills = [
    {
      id: 1,
      nome: "React js",
      abv: "Rjs",
      icone: "logos/react.svg",
      check: "logos/check.svg",
      stack: "Principal",
    },
    {
      id: 2,
      nome: "Javascript",
      abv: "JS",
      icone: "logos/javascript.svg",
      check: "logos/check.svg",
      stack: "Sempre",
    },
    {
      id: 3,
      nome: "HTML5",
      abv: "HTML5",
      icone: "logos/html5.svg",
      check: "logos/check.svg",
      stack: "Sempre",
    },
    {
      id: 4,
      nome: "CSS",
      abv: "CSS",
      icone: "logos/css.svg",
      check: "logos/check.svg",
      stack: "Sempre",
    },
    {
      id: 5,
      nome: "Next.js",
      abv: "Next",
      icone: "logos/nextjs.svg",
      check: "logos/check.svg",
      stack: "Principal",
    },
    {
      id: 6,
      nome: "Tailwind",
      abv: "TW",
      icone: "logos/tailwindcss.svg",
      check: "logos/check.svg",
      stack: "Sempre",
    },
    {
      id: 7,
      nome: "Three.js",
      abv: "3JS",
      icone: "logos/threejs.svg",
      check: "logos/check.svg",
      stack: "Ocasionalmente",
    },
    {
      id: 8,
      nome: "Prettier",
      abv: "PRT",
      icone: "logos/pretie.svg",
      check: "logos/check.svg",
      stack: "Sempre",
    },
    {
      id: 9,
      nome: "Markdown",
      abv: "MKD",
      icone: "logos/mark.svg",
      check: "logos/check.svg",
      stack: "Ocasionalmente",
    },
  ];

  return (
    <>
      <div className="bg-[#FAFAFA] scrollbar-hidden scrollbar-thin scrollbar-track-rounded-full scrollbar-track-gray-200 scrollbar-thumb-[#A192F7] scrollbar-thumb-rounded-full overflow-y-auto overflow-x-hidden rounded-lg shadow-lg scroll h-[310px] w-full">
        <div className="flex justify-between  rounded-t-xl items-center px-4  bg-[#8675f5] p-3">
          <div className="flex">
            <div className="text-black cursor-pointer mr-3">Front Skills</div>
            <div className="text-black cursor-pointer ">Back Skills</div>
          </div>
          <div>
            <Image
              alt={"Scroll"}
              className="w-[30px] h-[30px] animate-pulse"
              width={30}
              height={30}
              src={"arrow.svg"}
            />
          </div>
        </div>
        <div>
          <div className="flex relative flex-col py-3 gap-y-3">
            {skills.map((item) => {
              return (
                <div key={item.id} className="flex px-4">
                  <div className="grid grid-cols-3  items-center w-full">
                    <div className="flex items-center">
                      <Image
                        alt={item.nome}
                        className="w-[30px] mr-2 h-[30px]"
                        width={30}
                        height={30}
                        src={item.icone}
                      />
                      <div className="font-medium text-[16px] mr-2 text-black">
                        {item.abv.toUpperCase()}
                      </div>
                      <div className="text-[14px] text-[#707A8A]">
                        {item.nome}
                      </div>
                    </div>

                    <div className="text-center ">{item.stack}</div>
                    <div className="flex items-center text-[#202630] justify-end">
                      Verificado
                      <Image
                        alt={"Verificado"}
                        className="w-[30px] h-[30px]"
                        width={30}
                        height={30}
                        src={item.check}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
