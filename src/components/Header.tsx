import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="fixed w-full bg-[#36454F]/60 custom-blur z-50">
            <div className=" max-w-4xl mx-auto">
                <div className="flex flex-row items-center justify-between py-3 lg:py-5 px-4 lg:px-0">
                    <Image alt="Pijay" src={Logo} className="w-12" />
                    <div className="flex flex-row items-center gap-x-10">
                        <Link
                            href={""}
                            className="uppercase border border-[#C8A882] py-2 px-3 rounded-md text-[#C8A882] hover:bg-[#C8A882] hover:border-[#C8A882] hover:text-[#F7F3E9] transition-all ease-in-out duration-300"
                        >
                            Download my CV
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
