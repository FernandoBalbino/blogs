import Image from "next/image";
export default function noticias() {
  return (
    <>
      <div className=" w-full shadow-lg  px-4 rounded-xl bg-[#FAFAFA] p-3 mt-3">
        <div>
          <div className="flex mb-2  w-full justify-between items-center">
            <div>Postagens</div>
            <div className="text-[#707A8A] underline decoration-violet-600">
              Ver todos
            </div>
          </div>
          <div className=" w-full h-full flex">
            <div className="flex-shrink-0 mr-2">
              <Image
                alt="Sanity Blog"
                width={80}
                height={80}
                className="h-full w-[80px]"
                src={"/sanity.png"}
              />
            </div>
            <div className="flex-col">
              <div>Sanity, plataforma para criar blogs.</div>
              <div>
                <p className="text-[#707A8A] text-[14px]">
                  O Sanity é uma plataforma de gerenciamento de conteúdo (CMS)
                  headless, que permite criar, gerenciar e distribuir conteúdo
                  de maneira flexível e escalável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
