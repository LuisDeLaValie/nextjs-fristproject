import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20  p-3 text-black font-bold">
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
