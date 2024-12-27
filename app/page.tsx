'use client';
import Hero from '../components/Hero';
import AboutUs from "../components/AboutUs";

import Immigration from "../components/Immigration";
import Partners from "../components/Partners";
import Testimonial from "../components/Testimonial";
import Plan from "../components/Plan";

import Form from "../components/Form";
import Footer from "../components/Footer";
import FadeInSection from '../components/FadeInSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      
      <Immigration />
      <FadeInSection><Partners /></FadeInSection>
      <FadeInSection><Testimonial /></FadeInSection>
      <FadeInSection><Plan /></FadeInSection>
      <FadeInSection><Form /></FadeInSection>
      <Footer />
    </>
  );
}
