// Decidido realizarse de forma estatica ya que no seria la idea ser modificado.

export const Footer = () => {
    return (
        <>
            <footer className="bg-slate-900 flex-row px-10">

                <div className="grid grid-cols-5 grid-rows-2 items-center">
                    <section className='col-start-1 col-end-4 row-span-1 text-slate-100 py-20 text-xl'>

                        <h3 className="text-2xl font-bold font-roboto py-5">Sobre Nosotros</h3>

                        <p className="">
                            Somos una tienda en línea especializada en la venta de productos tecnológicos de alta calidad. 
                            Ofrecemos una amplia gama de gadgets y dispositivos para satisfacer todas tus necesidades tecnológicas.
                        </p>

                    </section>


                    <article className='grid col-start-4 col-end-6 row-span-2 text-white'>

                        <h4 className="text-xl text-center font-bold">¡Mantenme al tanto!</h4>

                        <p className="text-center font-roboto my-5">Ingresa tu mail para suscríbirte a nuestro Boletín. Donde te llegarán nuestras mejores ofertas.</p>

                        <form className="flex border rounded-3xl w-3/4 m-auto" action="" method="get">

                            <input type="email" name="" id="" placeholder="example@gmail.com" className="m-5 px-3  bg-inherit focus:outline-none valid:border-red-600"/>
                            <button type="submit" className="rounded-3xl font-bold bg-slate-700 bg-opacity-55 hover:text-amber-500 hover:bg-slate-800 text-center border-l h-auto w-full ">Suscribirse</button>

                        </form>

                    </article>
                
                </div>

                <div className="font-roboto text-center text-white flex justify-around border-opacity-40 border-amber-500 border-t py-5">
                    <div className="flex-col flex">
                        <h5 className="text-xl">Redes Sociales</h5>
                        <a href="" className="text-lg">Instagram</a>
                        <a href="" className="text-lg">Facebook</a>
                        <a href="" className="text-lg">Twitter</a>

                    </div>
                    <div>
                        <h5>Ya fue</h5>
                    </div>
                    <div>
                        <h5>Ya fue</h5>
                    </div>
                </div>

            </footer>
        </>
    );
}