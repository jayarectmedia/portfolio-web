/** @format */

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import github from "@/components/svgs/github";
import instagram from "@/components/svgs/instagram";
import tiktok from "@/components/svgs/tiktok";
import youtube from "@/components/svgs/youtube";
import LearnIcon from "@/components/svgs/learn";
import GitIcon from "@/components/svgs/git";

const menus = [
  { href: "/", text: "home" },
  { href: "/about", text: "about" },
  { href: "/contact", text: "contact" },
];

const icons = [
  { href: "http://github.com", icon: github },
  { href: "http://instagram.com", icon: instagram },
  { href: "http://tiktok.com", icon: tiktok },
  { href: "http://youtube.com", icon: youtube },
];

const portfolio = [
  {
    link: "https://source.unsplash.com/360x200?programmer",
    title: "Programmer",
    subtitle: "Build app with love ❤",
  },
  {
    link: "https://source.unsplash.com/360x200?web",
    title: "Web Developer",
    subtitle: "Tailwind and next JS",
  },
  {
    link: "https://source.unsplash.com/360x200?android",
    title: "Mobile Developer",
    subtitle: "Build app with flutter ❤",
  },
];

export default function Home() {
  return (
    <>
      <header className='fixed w-full'>
        <div className='py-3 md:py-4 px-4 mx-auto flex flex-row justify-between items-center md:max-w-3xl lg:max-w-7xl'>
          <div className='flex items-center space-x-6'>
            <Link
              href='/'
              className='flex flex-row py-2 space-x-2 md:px-3 md:space-x-4 items-center'>
              <img
                src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                className='w-6 h-6 md:w-10 md:h-10 object-cover rounded-full'
              />
              <span className='font-semibold text-text'>It's Jay's</span>
            </Link>
            <nav className='hidden md:block'>
              <ul className='flex space-x-2'>
                {menus.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.href}
                      className='px-3 py-2 text-text text-sm'>
                      {menu.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='flex items-center space-x-3'>
            <div className='hidden lg:flex items-center'>
              {icons.map((icon, index) => (
                <a key={index} href={icon.href} className='mr-6'>
                  <icon.icon />
                </a>
              ))}
            </div>
            <button className='py-2 px-6 text-sm border border-brand rounded-full'>
              Download CV
            </button>
            <button className='md:hidden p-2'>
              <Bars3Icon className='w-6 h-6 text-text ' />
            </button>
          </div>
        </div>
      </header>

      <main className='px-4 py-12'>
        {/* Hero section */}
        <section className='mt-[58px] mx-auto md:max-w-3xl lg:max-w-7xl lg:flex lg:items-end justify-between'>
          <div>
            <h3 className='flex flex-col font-light text-text text-[34px] md:text-[72px]'>
              <span className='flex items-center'>
                Let’s learn <LearnIcon className='md:w-14 h-14' />
              </span>
              <span className='flex items-center'>
                to code <GitIcon className='md:w-14 md:h-14' />
              </span>
              <span>an application</span>
            </h3>
          </div>
          <div className='md:flex items-center justify-between  lg:w-[30%]'>
            <div className='mt-8 lg:mt-0 md:w-[50%] lg:w-full'>
              <span className='text-text text-[16px]  leading-[160%] lg:text-[20px]'>
                with me{" "}
                <span className='text-brand'>Muhammad Jaya Saputra</span>, a
                software developer who loves to share how to code in many
                programing languages and multi platforms.
              </span>
              <div className='mt-[32px] flex items-center'>
                <button className='py-2 px-6 bg-brand rounded-full text-white mr-4'>
                  Start Learn
                </button>
                <div className='flex space-x-4 md:hidden'>
                  {icons.map((icon, index) => (
                    <a key={index} href={icon.href}>
                      <icon.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className='sm:hidden md:flex md:space-y-4 md:flex-col hidden lg:hidden'>
              {icons.map((icon, index) => (
                <a key={index} href={icon.href}>
                  <icon.icon />
                </a>
              ))}
            </div>
          </div>
        </section>
        {/* Portfolio */}
        <section className='mt-[56px] md:flex md:flex-wrap justify-center mx-auto md:max-w-3xl lg:max-w-7xl lg:justify-between '>
          {portfolio.map((portfolio, index) => (
            <div className='p-4 border-dashed border-2 border-text-100 rounded-[32px] flex flex-col mb-3 md:mr-3 md:w-[45%] lg:w-[30%]'>
              <img
                className='object-cover rounded-[16px] '
                src={portfolio.link}
                alt=''
              />
              <span className='mt-4 text-text font-medium text-[18px] mx-2'>
                {portfolio.title}
              </span>
              <span className='mt-1 text-text  text-[14px] mx-2'>
                {portfolio.subtitle}
              </span>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
