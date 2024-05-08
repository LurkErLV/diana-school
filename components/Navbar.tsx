import Container from "@/components/Container";
import Image from "next/image"
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full mt-[20px] mb-[40px] md:mb-[100px] sm:mb-[70px] lg:px-5 md:px-3 sm:px-0">
            <Container>
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="https://olympics.com/images/static/b2p-images/logo_color.svg" height={40} width={87} alt="Logo"/>
                    </Link>

                    <div className="flex items-center gap-3.5">
                        <Link className="font-medium hover:opacity-70 transition-opacity" href="/paris">Paris 2024</Link>
                        <Link className="font-medium hover:opacity-70 transition-opacity" href="/contacts">Kontakti</Link>
                        <Link className="text-[#4845DB] text-[16px] font-medium border border-[#4845DB] rounded-full p-[7px] hover:bg-[#4845DB] hover:text-white transition" href="mailto:test@test.test?subject=Let's talk!">Message us</Link>
                    </div>
                </div>
            </Container>
        </nav>
    )
}
