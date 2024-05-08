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
        <title>Paris 2024 - Olympic Games</title>
        <meta name="title" content="Paris 2024" />
      </Head>
      <Container>
        <div className="flex flex-col items-center">
          <MotionImage
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5 }}
            variants={slideTop}
            className="absolute right-0 top-0 opacity-70 blur-[3px] hidden lg:block"
            src="/paris.svg"
            alt=""
            loading="eager"
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-col items-center mb-[50px]">
          <motion.h1
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5 }}
            variants={slideTop}
            className="text-[#141C3A] text-[20px] md:text-[35px] lg:text-[30px] text-center font-extrabold"
          >
            Kad Olimpiskās spēles Paris 2024 notiks?
          </motion.h1>
          <motion.h3
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5 }}
            variants={slideRight}
            className="text-[#141C3A] text-[20px] text-center font-medium max-w-[500px]"
          >
            Tās notiks Francijas galvaspilsētā Parīzē no 2024. gada 26. jūlija
            līdz 11. augustam.
          </motion.h3>
        </div>

        <div className="flex w-full flex-col items-center">
          <motion.h1
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5 }}
            variants={slideLeft}
            className="text-[#141C3A] text-[20px] md:text-[35px] lg:text-[30px] text-center font-extrabold"
          >
            Kādas disciplīnas piedalīsies?
          </motion.h1>

          <div className="flex flex-wrap gap-[15px] my-[20px] px-5">
            <motion.ul
              initial="hidden"
              viewport={{ once: true }}
              whileInView="enter"
              transition={{ duration: 0.5 }}
              variants={slideRight}
              className="list-disc max-w-[800px]"
            >
              <li className="text-[20px]">Peldēšana</li>
              <p className="mb-[15px]">
                Tā ir viena no galvenajām disciplīnām olimpiskajās spēlēs, kurās
                iekļauti dažādi stili, distances un vingrinājumi, piemēram,
                brīvā stila peldēšana, bruņurupuču peldēšana, virziena peldēšana
                un daudzi citi.
              </p>
              <li className="text-[20px]">Vieglatlētika</li>
              <p className="mb-[15px]">
                Vieglatlētika ir olimpiskās spēles pamats. Šajā sporta veidā
                ietilpst dažādi vingrinājumi, piemēram, skriešana, metieni,
                sāncensības un šķēršļu skrējiens.
              </p>
              <li className="text-[20px]">Teniss</li>
              <p className="mb-[15px]">
                Teniss ir populārs olimpiskais sporta veids, kurā tiek sacenšas
                gan vienatnē, gan dubultā, gan arī īpašās komandu sacensībās.
              </p>
              <li className="text-[20px]">Velosipēdu sacīkstes</li>
              <p className="mb-[15px]">
                Velosipēdu sacīkstes ietver dažādas disciplīnas, tostarp ceļa
                sacīkstes, kalnu brauciens un velosipēdu šķēršļu brauciens.
              </p>
              <li className="text-[20px]">
                Veselības un labklājības sporta veidi
              </li>
              <p className="mb-[15px]">
                Šeit ietilpst dažādas sporta veidu, kas veicina fizisko
                aktivitāti un labklājību, piemēram, skriešana, peldēšana,
                riteņbraukšana un daudzi citi.
              </p>
              <li className="text-[20px]">Komandas sporti</li>
              <p className="mb-[15px]">
                Tādi sporta veidi kā futbols, basketbols, rokassports un hokejs,
                kurās komandas sacenšas pret citu, arī būs daļa no olimpiskajām
                spēlēm Parīzē 2024. gadā.
              </p>
              <li className="text-[20px]">Jaunievedumi</li>
              <p className="mb-[15px]">
                Parīzes 2024. gada olimpiskajās spēlēs varētu būt arī dažādi
                jaunievedumi un jauni sporta veidi, kā arī jau pierādījušās
                populāras sporta disciplīnas.
              </p>
            </motion.ul>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <motion.a
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5 }}
            variants={slideRight}
            className="bg-[#4845DB] rounded-[12px] p-[20px] my-[40px] text-white hover:!opacity-80 transition"
            href="https://olympics.com/en/paris-2024"
          >
            Lasīt sīkāk
          </motion.a>
        </div>
      </Container>
    </>
  );
}
