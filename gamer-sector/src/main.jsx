import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header , Nav , CarouselNotices, Footer, CarouselProducts } from './components';
import { data }from './helpers/dataCarouselImages'



import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <CarouselNotices data={ data } />
    <CarouselProducts title={ "Ultimas Novedades" }/>
    <Footer />
  </React.StrictMode>,
)
