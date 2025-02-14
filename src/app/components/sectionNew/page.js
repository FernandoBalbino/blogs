import { electrolize } from "@/app/fonts"
export default function newsletter(){
    return(
        <>
        <section id="new" className="bg-[#29363D]    h-[600px]">
            <article className="max-w-[1200px] w-full h-full flex justify-center items-center mx-auto">
                <div>
                    <div className="flex flex-col justify-center items-center">
                    <span className="bg-[#8575F5] w-fit   text-white  inline-block rounded-lg py-1 px-3">/Newsletter</span>
                        <h3 className={`${electrolize.className} text-7xl font-bold text-white`}>
                        Mantenha-se Atualizado
                            </h3>
                        <p className="font-medium max-w-[600px] mt-2 mb-4 text-center text-[14px] text-[#999fbe] leading-6">Quer acompanhar de perto meu trabalho e minhas atualizações? Inscreva-se com seu e-mail para receber notificações exclusivas sempre que um novo artigo, projeto ou ideia for lançada.</p>
                        <div className="flex">
                        <input placeholder="Digite seu email..." className="p-3 text-white rounded-l bg-transparent border border-r-0 w-[300px] outline-none focus:border-[#8575F5] border-gray-300" type="text" />
                        <button className="bg-[#6F5CF3] transition-all outline-white hover:bg-white hover:text-[#8575F5]  rounded-r text-white border  h-full p-3">Inscrever-se</button>
                        </div>
                        
                    </div>
                </div>
            </article>
        </section>
        </>
    )
}