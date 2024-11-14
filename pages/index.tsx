import React from "react";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { HiOutlineBell } from "react-icons/hi2";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface TwitterSidebarButton {
  title: string
  icon: React.ReactNode
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <GoHome />
  },
  {
    title: 'Explore',
    icon: <LuSearch />
  },
  {
    title: 'Notifications',
    icon: <HiOutlineBell />
  },
  {
    title: 'Messages',
    icon: <FaRegEnvelope />
  },
  {
    title: 'Bookmarks',
    icon: <FaRegBookmark />
  },
  {
    title: 'Profile',
    icon: <CiUser />
  }
]

export default function Home() {
  return (
    <div className="inter.className">
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 px-4">
          <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="mt-4 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map(item => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <button className="bg-[#1d9bf0] text-lg font-semibold p-2 rounded-full w-full ">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  )
}
