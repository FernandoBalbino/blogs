import { electrolize } from "@/app/fonts";

export default function article() {
  return (
    <>
      <section className=" my-20 ">
        <article className="max-w-[1200px] mx-auto">
          <div className="md:grid md:grid-cols-2">
            <div>
              <span className="bg-[#8575F5]  text-white mb-4 inline-block rounded-lg py-1 px-3">
                /About
              </span>
              <h2
                className={`${electrolize.className}  text-[#29363D] text-7xl font-bold `}
              >
                Minha <span className="text-[#8D7EF6]">Stack</span>
              </h2>
              <p className="font-medium  text-[14px] text-[#656b8a] leading-6">
                Minha stack é composta por tecnologias que permitem a integração
                perfeita entre o front-end e o back-end. No lado do cliente,
                utilizo React e Next.js para criar interfaces dinâmicas e
                responsivas. No lado do servidor, trabalho com Node.js e
                Firebase para gerenciar APIs, autenticação e banco de dados.
                Essa combinação garante aplicações completas, eficientes e
                seguras.{" "}
              </p>
            </div>
            <div></div>
          </div>
        </article>
      </section>
    </>
  );
}
