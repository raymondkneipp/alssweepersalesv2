import "twin.macro";
import About from "../components/About";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <About />
      <Services />
      <Brands />
      <Testimonials />
    </Layout>
  );
}
