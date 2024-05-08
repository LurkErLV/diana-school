import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col justify-center items-center gap-[25px] p-[25px] w-full bg-[#4845DB]">
                <Image className="fill-white" src="https://olympics.com/images/static/b2p-images/logo_color.svg" alt="" height={40} width={84}/>
                <h1 className="text-white text-[30px] font-medium">Diāna Veišteine</h1>
            </footer>
        </>
    )
}