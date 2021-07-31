import Head from "next/head";
import "twin.macro";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          Shop Vacuums, Bags, Filters, And More | {title} | Al's Sweeper &
          Sewing Center
        </title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Navbar />

      <main tw="flex flex-col min-h-screen">{children}</main>

      <Footer />
    </>
  );
}
