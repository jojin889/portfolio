import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Navbar, Contact, Footer } from "../components";
import { About, Projets  } from "../sections";


export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Projets />
      <Contact />
      <Footer />
    </main>
  );
}
