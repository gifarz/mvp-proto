"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { title } from "@/components/primitives";

export const MainPartnersPage = () => {
    const [logos, setLogos] = React.useState([
        {
            title: "Google",
            path: "/logo/Google.webp"
        },
        {
            title: "Huawei",
            path: "/logo/Huawei.webp"
        },
        {
            title: "BYD",
            path: "/logo/BYD.png"
        }
    ])
    return (
        <section id="partners" className="py-20">
            <h1 className={title()}>Our Partners</h1>
            <Marquee gradient={false} speed={40} className="mt-10">
                {logos.map((logo, index) => (
                    <div key={`repeat-${index}`} style={{ margin: '0 20px' }}>
                        <img
                            src={logo.path}
                            alt={`Partner ${index + 1}`}
                            style={{ height: '70px', objectFit: 'contain' }}
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};