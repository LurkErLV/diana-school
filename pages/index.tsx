"use client";
import Container from "@/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

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
        <meta name="title" content="Olympic Games" />
        <title>Olympic Games</title>
      </Head>
      <Container>
        <MotionImage
          initial="hidden"
          viewport={{ once: true }}
          whileInView="enter"
          transition={{ duration: 0.5 }}
          variants={slideRight}
          className="absolute right-0 top-0 opacity-70 blur-[3px] hidden lg:block"
          src="/paris.svg"
          alt=""
          loading="eager"
          width={300}
          height={300}
        />
        <MotionImage
          initial="hidden"
          viewport={{ once: true }}
          whileInView="enter"
          transition={{ duration: 0.5 }}
          variants={slideLeft}
          className="absolute left-0 bottom-0 opacity-70 blur-[3px] hidden lg:block"
          src="https://img.olympics.com/images/image/private/w_300/f_auto/primary/lqdmzt3zbmjoqlkyxeay"
          alt=""
          loading="eager"
          width={300}
          height={300}
        />

        <main className="relative h-full min-h-[calc(100vh-500px)] pb-[200px] flex flex-col items-center justify-between z-10">
          <motion.h1
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5 }}
            variants={slideLeft}
            className="text-[#141C3A] text-[30px] md:text-[35px] lg:text-[43px] text-center font-extrabold"
          >
            Olimpiskās Spēles
          </motion.h1>
          <motion.h2
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5 }}
            variants={slideRight}
            className="text-[#0a0a0a] text-[22px] text-center font-normal max-w-[670px]"
          >
            The most important thing in the Olympic Games is not winning but
            taking part
          </motion.h2>

          <motion.div
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5 }}
            variants={fade}
            className="mt-[60px] flex justify-center items-center w-[230px] h-[230px] border-[5px] border-[#4845DB] border-dashed rounded-full"
          >
            <Image
              className="rounded-full w-[200px] h-[200px] m-[15px] animate-pulse"
              src="https://olympics.com/images/static/b2p-images/logo_color.svg"
              alt=""
              loading="eager"
              width={200}
              height={200}
            />
          </motion.div>
          <span />
        </main>
      </Container>
      <div className="relative flex flex-col justify-center items-center w-full min-h-[600px] bg-[#4845DB]">
        <div className="absolute left-[25px] top-[25px] min-w-[100px] min-h-[100px] w-[10vw] h-[10vw] z-[1]">
          <span className="absolute block left-0 top-0 bg-[#5451FF] min-w-[50px] min-h-[50px] w-[5vw] h-[5vw]" />
          <span className="absolute block right-0 bottom-0 bg-[#5451FF] min-w-[50px] min-h-[50px] w-[5vw] h-[5vw]" />
        </div>
        <div className="absolute right-[25px] bottom-[25px] min-w-[100px] min-h-[100px] w-[10vw] h-[10vw] z-[1]">
          <span className="absolute block left-0 top-0 bg-[#5451FF] min-w-[50px] min-h-[50px] w-[5vw] h-[5vw]" />
          <span className="absolute block right-0 bottom-0 bg-[#5451FF] min-w-[50px] min-h-[50px] w-[5vw] h-[5vw]" />
        </div>

        <Container>
          <div className="flex flex-col items-center">
            <motion.h1
              initial="hidden"
              viewport={{ once: true }}
              whileInView="enter"
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={slideLeft}
              className="relative text-white text-[30px] text-center font-extrabold z-[2]"
            >
              Kas ir olimpiskās spēles?
            </motion.h1>
            <motion.h2
              initial="hidden"
              viewport={{ once: true }}
              whileInView="enter"
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={slideRight}
              className="relative text-white text-[18px] text-center font-normal max-w-[750px] mt-[25px] z-[2]"
            >
              Olimpiskās spēles ir starptautisks daudzsporta pasākums, kurā
              sportisti no dažādām valstīm sacenšas dažādās disciplīnās,
              cenšoties iegūt zelta, sudraba vai bronzas medaļas. Spēles notiek
              katrus četrus gadus, rīkojot gan Vasaras, gan Ziemas Olimpiskās
              spēles. Šis pasākums veicina sporta izcilību un starptautisko
              sadarbību.
            </motion.h2>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col items-center gap-[40px] my-[150px]">
          <motion.h1
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={slideTop}
            className="text-[#141C3A] text-[30px] text-center font-extrabold"
          >
            Nākošās Olimpiskās Spēles
          </motion.h1>

          <motion.a
            href="/paris"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={slideRight}
            className="text-[#141C3A] text-[20px] text-center font-extrabold underline hover:no-underline underline-offset-4 transition-all"
          >
            Paris 2024
          </motion.a>
          <MotionImage
            initial="hidden"
            viewport={{ once: true }}
            whileInView="enter"
            transition={{ duration: 0.5 }}
            variants={slideLeft}
            src="/paris.svg"
            alt=""
            loading="eager"
            width={300}
            height={300}
          />
        </div>
      </Container>
    </>
  );
}
