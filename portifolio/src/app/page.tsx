"use client";

import Image from "next/image";
import SplitText from "@/components/SplitText";
import Balatro from "@/components/Balatro";

import BlobImage from "@/components/BlobImage";
import GradualBlur from "@/blocks/Animations/GradualBlur/GradualBlur";
import MagicBento from "@/blocks/Components/MagicBento/MagicBento";
import Cubes from "@/blocks/Animations/Cubes/Cubes";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";


export default function Home() {

  return (
    <div className="relative bg-[#0f0020] text-white min-h-screen overflow-x-hidden">

      {/* Balatro Background */}
      <div className="h-[100vh] w-[100%] fixed top-0 right-0 z-0">
        <Balatro
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={700}
          color1="#000000ff"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full flex justify-center gap-12 py-6 z-10 text-gray-200 font-semibold backdrop-blur-sm bg-black/20 z-20">
        <a href="#home" className="hover:text-indigo-400 transition">Home</a>
        <a href="#about" className="hover:text-indigo-400 transition">About Me</a>
        <a href="#works" className="hover:text-indigo-400 transition">Works</a>
        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">

          {/* Texto */}
          <div className="flex-1 backdrop-blur-xs bg-black/50 rounded-2xl shadow-2xl p-6 md:p-12 order-1 md:order-0">
            <h1 className="text-5xl font-bold mb-6">
              <SplitText
                text="Hey, I'm Pedro 👋"
                className="text-5xl font-semibold"
                splitType="chars"
                delay={100}
                duration={0.6}
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
              />
            </h1>
            <p className="text-lg mb-6 leading-relaxed text-gray-200">
              Crafting <span className="font-semibold text-pink-400">worlds through games 🎮</span><br/>
              and building the <span className="font-semibold text-green-400">web of tomorrow 👨‍💻</span>
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Insta</a>
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">LinkedIn</a>
            </div>
          </div>



          {/* Imagem */}
          <div className="flex-1 flex justify-center order-0 md:order-1">
            <div className="w-50 h-50 relative md:w-72 md:h-72">
              <BlobImage />
            </div>
          </div>

        </div>
      </section>


      {/* About Section */}
      <section id="about" className="relative py-32 px-6 bg-[#0a0018] z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">

          {/* Texto */}
          <div className="flex-1 bg-black/50 backdrop-blur-md rounded-2xl shadow-2xl p-8">
            <h2 className="text-4xl font-bold mb-4 text-indigo-400">About Me</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              I'm Pedro Diniz Santana, a versatile <span className="font-semibold">Full Stack Web Developer</span>
              and <span className="font-semibold">Multiplatform Game Developer</span>.
              I have been studying programming for nearly 4 years and developing games for the last 2 years.
            </p>
            <p className="text-gray-200 leading-relaxed">
              I create robust web systems and immersive game experiences, always aiming for high performance and polished results. My focus on innovation and technical quality ensures consistent delivery of projects in both digital and gaming environments.
            </p>
          </div>

        </div>
      </section>


      {/* Certificates Section */}
      <section id="certificates" className="relative py-32 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-indigo-400">Certificates & Education</h2>
          <ul className="space-y-4 text-gray-200">
            <li>
              <span className="font-semibold">Technical Course in Systems Development</span> – Senac Hub Academy, Campo Grande MS (2023–2024)
            </li>
            <li>
              <span className="font-semibold">Technical Course in Digital Game Programming</span> – Senac Hub Academy, Campo Grande MS (2024–2025)
            </li>
          </ul>
        </div>
      </section>

      {/* Works / Projects Section */}
      <section id="works" className="relative py-32 px-6 bg-[#0a0018] z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-indigo-400">Works & Projects</h2>
          <p className="text-gray-200 leading-relaxed">
            I have experience creating games in Unity and developing integrated web platforms. My projects range from interactive games to full-featured web applications, combining creativity with technical precision.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-indigo-400">Contact</h2>
          <p className="text-gray-200 leading-relaxed mb-4">
            Interested in collaborating or seeing more of my work? Reach out via social media or email:
          </p>
          <ul className="text-gray-200 space-y-2">
            <li>Email: <span className="font-semibold">pedro@example.com</span></li>
            <li>GitHub: <a href="#" className="hover:underline">github.com/pedro</a></li>
            <li>LinkedIn: <a href="#" className="hover:underline">linkedin.com/in/pedro</a></li>
          </ul>
        </div>
      </section>

    </div>
  );
}
