"use client";

import Image from "next/image";
import SplitText from "@/components/SplitText";
import Balatro from "@/components/Balatro";
import LoadingScreen from "@/components/LoadingScreen";
import ElectricBorder from "@/blocks/Animations/ElectricBorder/ElectricBorder";
import StarBorder from "@/blocks/Animations/StarBorder/StarBorder";
import PillNav from "@/blocks/Components/PillNav/PillNav";

export default function Home() {

  return (
    <div >
      {/* Loading overlay */}
      {/* <LoadingScreen/> */}
      <div className="h-[100vh] w-[100%] fixed top-0 right-0 z-0">
        <Balatro
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={700}
          color1={"#fc03b5ff"}
        />
      </div>
      <div className="relative z-1 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen ">
        {/* <header className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

          <PillNav
            logo="none"
            logoAlt="Company Logo"
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' }
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          /></header> */}
        <main ></main>
        {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <SplitText
            text="Hello, GSAP!"
            tag="h1"
          />
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                src/app/page.tsx
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main> */}

      </div>
    </div>
  );
}
