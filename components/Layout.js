import Head from "next/head";
import "twin.macro";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          Shop Vacuums, Bags, Filters, And More | {title} | Al&apos;s Sweeper
          &amp; Sewing Center
        </title>

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta name="theme-color" content="#fde68a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#fde68a" />
      </Head>

      <Navbar />

      <main tw="flex flex-col min-h-screen">{children}</main>

      <Footer />
    </>
  );
}
