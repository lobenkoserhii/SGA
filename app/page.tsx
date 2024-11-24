'use client';
import Hero from '../components/Hero';
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";
import Immigration from "../components/Immigration";
import Partners from "../components/Partners";
import Testimonial from "../components/Testimonial";
import Plan from "../components/Plan";
import Consultation from "../components/Consultation";
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
      <Testimonial />
      <FadeInSection><Plan /></FadeInSection>
      
      <Form />
      <Footer />
    </>
  );
}
