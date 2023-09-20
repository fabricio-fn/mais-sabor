"use client"

import Home from "@/components/Home/Home"
import Newsletter from "@/components/Newsletter/Newsletter"
import OurBlog from "@/components/OurBlog/OurBlog"
import OurMenu from "@/components/OurMenu/OurMenu"
import PizzaSpecialOffer from "@/components/PizzaSpecialOffer/PizzaSpecialOffer"
import Testimonials from "@/components/Testimonials/Testimonials"

export default function Main() {
  return (
    <main>
      <Home />
      <PizzaSpecialOffer />
      <OurMenu />
      <Testimonials />
      <OurBlog />
      <Newsletter />
    </main>
  )
}