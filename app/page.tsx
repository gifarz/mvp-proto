import React from "react";

import { MainIntroPage } from "@/components/main-intro-page";
import { MainPartnersPage } from "@/components/main-partners-page";
import { MainAboutUsPage } from "@/components/main-aboutus-page";
import { MainProductPage } from "@/components/main-product-page";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        <MainIntroPage/>
        <MainPartnersPage/>
        <MainProductPage/>
        <MainAboutUsPage/>
      </div>
    </section>
  );
}
