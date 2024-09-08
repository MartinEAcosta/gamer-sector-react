// Decidido realizarse de forma estatica ya que no seria la idea ser modificado.

import { SubscriptionForm } from "./SubscriptionForm";

export const Footer = () => {
    return (
        <>
            <footer className="bg-slate-900 flex-row px-10">

                <div className="grid grid-cols-5 grid-rows-2 items-center">
                    
                    <section className='col-start-1 col-end-4 row-start-1  text-slate-100 text-xl'>

                        <h3 className="text-2xl font-bold font-roboto py-5 text-amber-500">Sobre Nosotros</h3>

                        <p className="text-lg font-roboto">
                            Somos una tienda en línea especializada en la venta de productos tecnológicos de alta calidad. 
                            Ofrecemos una amplia gama de gadgets y dispositivos para satisfacer todas tus necesidades tecnológicas.
                        </p>

                    </section>

                    <SubscriptionForm />

                    <div className="grid grid-flow-col col-start-1 col-end-6 row-start-2 mt-40 font-roboto text-center text-slate-100 border-opacity-40 border-t-slate-600 border-t py-5">

                        <div className="flex-col flex m-5">
                            <a href="" className="text-lg my-2 hover:text-slate-300">Instagram</a>
                            <a href="" className="text-lg my-2 hover:text-slate-300">Facebook</a>
                            <a href="" className="text-lg my-2 hover:text-slate-300">Twitter</a>
                        </div>

                        <div className="flex-col flex m-5">
                            <a href="" className="text-lg my-2 hover:text-slate-300">Ayuda</a>
                            <a href="" className="text-lg my-2 hover:text-slate-300">Soporte</a>
                            <a href="" className="text-lg my-2 hover:text-slate-300">FAQ</a>
                        </div>
                        <div className="flex-col flex  m-5">
                            <p className="text-lg my-2">(123) 456-7890</p>
                            <p className="text-lg my-2">gamersector@tutienda.com</p>
                            <p className="text-lg my-2">Blessed 444, Tandil, Argentina</p>
                        </div>
                    </div>
                
                </div>

            </footer>
        </>
    );
}