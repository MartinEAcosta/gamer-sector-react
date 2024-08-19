import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { CarouselNotices } from './components/CarouselNotices';
import { Footer } from './components/Footer';
import { data }from './utils/dataCarouselImages'



import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <CarouselNotices data={ data } />
    <Footer />
  </React.StrictMode>,
)
