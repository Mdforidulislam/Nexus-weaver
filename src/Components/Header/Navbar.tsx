"use client"

import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="flex gap-8 text-xl  ">
                    <li><Link href='#home'>Home</Link></li>
                    <li><Link href='#home'>About</Link></li>
                    <li><Link href='#home'>Service</Link></li>
                    <li><Link href='#home'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

//# 0D9276