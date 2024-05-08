"use client";
import Container from "@/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const MotionImage = motion(Image);

const slideLeft = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};
const slideRight = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};
const slideTop = {
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
};
const fade = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Index() {
  return (
    <>
      <Head>
        <title>Contacts - Olympic Games</title>
        <meta name="title" content="Paris 2024" />
      </Head>
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="text-[25px] font-bold">International Olympic Committee (IOC)</h1>

          <p className="text-[20px] font-semibold">Registered office:</p>
          <p className="text-[15px] font-medium">
            Maison Olympique <br />
            1007 Lausanne <br />
            Switzerland
          </p>

          <h2 className="text-[20px] font-semibold">VAT & Company Identification Number</h2>
          <p className="text-[15px] font-medium">CHE-106.029.126 TVA</p>
          <Link className="bg-[#4845DB] rounded-[12px] p-[20px] my-[40px] text-white hover:opacity-80 transition" href="https://support.olympics.com/hc/en-gb/requests/new">
            Uzrakstīt
          </Link>
        </div>
      </Container>
    </>
  );
}
