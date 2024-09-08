
export const SubscriptionForm = () => {
    return (
        <>

            <article className='grid col-start-4 col-end-6 row-start-1 row-end-3 text-slate-100'>

                <h4 className="text-2xl text-center font-bold text-amber-500">¡Mantenme al tanto!</h4>

                <p className="text-lg text-center font-roboto my-5">Ingresa tu mail para suscríbirte a nuestro Boletín. Donde te llegarán nuestras mejores ofertas.</p>

                <form className="flex border rounded-3xl w-3/4 m-auto" action="" method="get">

                    <input type="email" name="" id="" placeholder="example@gmail.com" className="m-5 px-3  bg-inherit focus:outline-none valid:border-red-600"/>
                    <button type="submit" className="rounded-3xl font-bold bg-slate-700 bg-opacity-30 hover:text-amber-500 hover:bg-slate-800 text-center border-l h-auto w-full ">Suscribirse</button>

                </form>

            </article>
            
        </>
    )
}
