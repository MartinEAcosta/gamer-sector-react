import { CardFooter } from './CardFooter';
import { data } from '../utils/dataFooter'


export const Footer = () => {
    return (
        <>
            <footer className="bg-slate-800 ">

                <section className='text-white px-10 py-20 text-xl'>
                    <p>
                        Somos una empresa dedicada a la venta de productos tecnológicos de alta calidad. 
                        Ofrecemos una amplia gama de productos a precios competitivos.
                    </p>
                </section>

                <article className='flex justify-between p-20'>
                    {data.map(item => (
                        <CardFooter title={item.title} desc={item.description} key={item.id} />
                    ))}
                </article>
                
            </footer>
        </>
    );
}