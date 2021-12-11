import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home" >

            <div className="home__container">

                <img  className = "home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg" 
                    alt="" 
                />

                <div className="home__row">

                    <Product
                    id="12432435"
                    title="Duracell Optimum AA Batteries | 18 Count Pack | Lasting Power Double A Battery | Resealable Package for Storage | Alkaline AA Battery Ideal for Household and Office Devices"
                    price="11.90"
                    image="https://m.media-amazon.com/images/I/71x78cA0+1S._AC_SL1500_.jpg"
                    rating={5}
                    />
                    <Product
                    id="1234"
                    title="Vital Proteins Collagen Peptides Powder - Pasture Raised, Grass Fed, unflavored 20 oz"
                    price="100.00"
                    image="https://m.media-amazon.com/images/I/71qcKV5zAJL._AC_SL1500_.jpg"
                    rating={4}
                    />

                </div>

                <div className="home__row">
                    <Product
                    id="12432436"
                    title="Lenovo Chromebook Flex 3 11 Laptop, 11.6-Inch HD (1366 x 768) IPS Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64 GB eMMC, Chrome OS, 82HG0006US, Blizzard White"
                    price="226.00"
                    image="https://m.media-amazon.com/images/I/611DJR7V1sL._AC_UL320_.jpg"
                    rating={4}
                    />
                    <Product
                    id="12432437"
                    title="Govee Interior Lights for Car, App Control Smart Car Lights with DIY Mode and Music Mode, Waterproof LED Interior Lights with 2 Lines Design, RGB Under Dash Car LED Lights with Car Charger, DC 12V"
                    price="190.00"
                    image="https://m.media-amazon.com/images/I/71UcEotkdRL._AC_SL1500_.jpg"
                    rating={4}
                    />
                    <Product
                    id="12432438"
                    title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
                    price="290.00"
                    image="https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
                    rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                    id="12432439"
                    title="The Real Anthony Fauci: Bill Gates, Big Pharma, and the Global War on Democracy and Public Health (Children’s Health Defense)"
                    price="21.00"
                    image="https://images-na.ssl-images-amazon.com/images/I/41mAMaGHfqL._SX332_BO1,204,203,200_.jpg"
                    rating={5}
                    />
                </div>

            </div>
            
        </div>
    )
}

export default Home
