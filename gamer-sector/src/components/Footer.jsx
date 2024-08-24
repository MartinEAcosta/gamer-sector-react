import { CardFooter } from '../components';
import { data } from '../helpers/dataFooter'


export const Footer = () => {
    return (
        <>
            <footer className="bg-slate-900 ">

                <section className='text-slate-100 px-10 py-20 text-xl'>
                    <p>
                        Somos una empresa dedicada a la venta de productos tecnológicos de alta calidad. 
                        Ofrecemos una amplia gama de productos a precios competitivos.
                    </p>
                </section>

                <article className='flex justify-between p-10'>
                    {data.map(item => (
                        <CardFooter id={ item.id } title={item.title} desc={item.description} key={item.id} />
                    ))}
                </article>

            </footer>
        </>
    );
}