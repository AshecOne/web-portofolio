import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div
      id="hero"
      className="flex flex-col justify-center min-h-screen lg:h-[680px] lg:pt-10 md:h-[450px] xl:h-[630px] xl:py-10 md:pt-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <Container>
        {/* Extra Large Screens (XL) */}
        <div className="xl:block lg:hidden md:hidden hidden">
          <div className="flex justify-between items-center pt-16">
            <div className="flex flex-col justify-center space-y-12 mr-10">
              <div>
                <h1 className="hero-title text-8xl text-black text-shadow-lg">
                  Hello, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Econ</span> is here
                </h1>
                <p className="hero-subtitle text-2xl text-gray-700 mt-6">
                  A Physics Graduate&apos;s Journey into <span className="font-semibold text-blue-600">Creative Coding</span>
                </p>
                <div className="mt-8">
                  <Link
                    href="https://wa.me/6285156720292?text=Hello%2C%20Can%20I%20ask%20you%20?"
                    target="_blank"
                    className="btn-primary inline-block text-lg"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="flex items-center pt-5">
                <div className="w-1/2 pl-48">
                  <div className="relative group">
                    <Image
                      src="/learning-coding.webp"
                      alt="Learning"
                      width={200}
                      height={200}
                      className="rounded-full shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="w-1/2">
                  <h2 className="section-title text-2xl font-semibold text-gray-800 pl-5">Learn to Code</h2>
                  <p className="text-gray-600 text-md mt-2 font-inter pl-5">
                    This web is my learning <br /> progress to be a <span className="font-semibold text-blue-600">web developer</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center ml-10">
              <div className="relative group">
                <div className="relative">
                  <div className="w-64 h-80 border-2 border-blue-300 rounded-full shadow-lg"></div>
                  <div
                    className="w-[229px] h-72 rounded-t-[50%] rounded-b-[52%] shadow-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 absolute group-hover:scale-105 transition-transform duration-300"
                    style={{ top: "18px", left: "14px" }}
                  ></div>
                  <div
                    className="absolute"
                    style={{
                      top: "-80px",
                      left: "11px",
                      width: "calc(92%)",
                      height: "calc(120%)",
                      zIndex: 20,
                    }}
                  >
                    <a
                      href="https://github.com/AshecOne"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full group"
                    >
                      <Image
                        src="/foto-profil.png"
                        alt="Foto Profil"
                        fill
                        objectFit="cover"
                        className="rounded-b-[52%] transition-all duration-300 transform group-hover:scale-105 cursor-pointer filter group-hover:brightness-110"
                      />
                    </a>
                  </div>
                </div>
                <div className="glass border border-white/30 rounded-2xl py-4 px-6 shadow-2xl absolute -bottom-14 -right-8 w-80 text-center backdrop-blur-sm">
                  <p className="text-blue-600 text-2xl font-bold font-poppins">
                    Trian Verson Tumanan
                  </p>
                  <h5 className="text-gray-700 text-md font-medium font-inter">
                    SouthEast Sulawesi, Kendari
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Screens */}
        <div className="md:hidden lg:hidden block xl:hidden">
          <div className="flex flex-col items-center space-y-8 pt-[100px] px-4">
            <div>
              <h1 className="hero-title text-4xl text-black text-center text-shadow">
                Hello, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Econ</span> is here
              </h1>
            </div>
            <div className="h-[245px] relative text-center">
              <div className="relative w-[200px] h-[220px] border-2 border-blue-300 rounded-full -top-5 shadow-lg inline-block"></div>
              <div className="w-[170px] h-[200px] rounded-full shadow-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 absolute -top-2 left-0 right-0 mx-auto"></div>
              <div
                className="absolute items-center"
                style={{
                  top: "-55px",
                  left: "36px",
                  width: "calc(72%)",
                  height: "calc(100%)",
                  zIndex: 20,
                }}
              >
                <a
                  href="https://github.com/AshecOne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="/foto-profil.png"
                    alt="Foto Profil"
                    fill
                    objectFit="cover"
                    className="rounded-b-[52%] transition-all duration-300 transform hover:scale-105 filter hover:brightness-110"
                  />
                </a>
              </div>

              <div className="glass border border-white/30 rounded-2xl py-3 px-4 shadow-xl text-center -mt-10 w-64 backdrop-blur-sm">
                <p className="text-blue-600 text-xl font-bold font-poppins">
                  Trian Verson Tumanan
                </p>
                <h5 className="text-gray-700 text-sm font-medium font-inter">
                  SouthEast Sulawesi, Kendari
                </h5>
              </div>
            </div>
            <div className="h-[32px] mx-4">
              <p className="hero-subtitle text-md font-medium text-gray-700 text-center">
                A Physics Graduate&apos;s Journey into <span className="font-semibold text-blue-600">Creative Coding</span>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Image
                  src="/learning-coding.webp"
                  alt="Learning"
                  width={120}
                  height={120}
                  className="rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="ml-4">
                <h2 className="section-title text-xl font-semibold text-gray-800">Learn to Code</h2>
                <p className="text-gray-600 font-medium text-sm mt-1 font-inter">
                  This web is my learning <br /> progress to be a <span className="font-semibold text-blue-600">web dev</span>
                </p>
              </div>
            </div>
            <div>
              <Link
                href="https://wa.me/6285156720292?text=Hello%2C%20Can%20I%20ask%20you%20?"
                target="_blank"
                className="btn-primary inline-block text-base"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Medium Screens (MD) */}
        <div className="md:block hidden lg:hidden">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center space-y-12 ml-10">
              <div>
                <h1 className="hero-title text-6xl text-black text-shadow">
                  Hello, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Econ</span> is here
                </h1>
                <p className="hero-subtitle text-xl text-gray-700 mt-4">
                  A Physics Graduate&apos;s Journey into <span className="font-semibold text-blue-600">Creative Coding</span>
                </p>
                <div className="mt-6">
                  <Link
                    href="https://wa.me/6285156720292?text=Hello%2C%20Can%20I%20ask%20you%20?"
                    target="_blank"
                    className="btn-primary inline-block text-lg"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="flex items-center pt-5 pl-13">
                <div className="w-4/9 pr-8">
                  <div className="relative group">
                    <Image
                      src="/learning-coding.webp"
                      alt="Learning"
                      width={180}
                      height={180}
                      className="rounded-full shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="w-5/9">
                  <h2 className="section-title text-2xl font-semibold text-gray-800">Learn to Code</h2>
                  <p className="text-gray-600 text-lg mt-1 font-inter">
                    This web is my learning <br /> progress to be a <span className="font-semibold text-blue-600">web dev</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mr-10">
              <div className="relative group">
                <div className="relative">
                  <div className="w-48 h-64 border-2 border-blue-300 rounded-full shadow-lg"></div>
                  <div
                    className="w-[170px] h-56 rounded-t-[50%] rounded-b-[52%] shadow-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 absolute group-hover:scale-105 transition-transform duration-300"
                    style={{ top: "14px", left: "11px" }}
                  ></div>
                  <div
                    className="absolute"
                    style={{
                      top: "-60px",
                      left: "8px",
                      width: "calc(92%)",
                      height: "calc(120%)",
                      zIndex: 20,
                    }}
                  >
                    <a
                      href="https://github.com/AshecOne"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full group"
                    >
                      <Image
                        src="/foto-profil.png"
                        alt="Foto Profil"
                        fill
                        objectFit="cover"
                        className="rounded-b-[52%] transition-all duration-300 transform group-hover:scale-105 cursor-pointer filter group-hover:brightness-110"
                      />
                    </a>
                  </div>
                </div>
                <div className="glass border border-white/30 rounded-2xl py-3 px-4 shadow-2xl absolute -bottom-14 -right-6 w-64 text-center backdrop-blur-sm">
                  <p className="text-blue-600 text-xl font-bold font-poppins">
                    Trian Verson Tumanan
                  </p>
                  <h5 className="text-gray-700 text-sm font-medium font-inter">
                    SouthEast Sulawesi, Kendari
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Screens (LG) */}
        <div className="lg:block xl:hidden md:hidden hidden">
          <div className="flex justify-between items-center pt-5">
            <div className="flex flex-col justify-center space-y-12 mr-10">
              <div>
                <h1 className="hero-title text-7xl text-black text-shadow-lg">
                  Hello, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Econ</span> is here
                </h1>
                <p className="hero-subtitle text-2xl text-gray-700 mt-6">
                  A Physics Graduate&apos;s Journey into <span className="font-semibold text-blue-600">Creative Coding</span>
                </p>
                <div className="mt-8">
                  <Link
                    href="https://wa.me/6285156720292?text=Hello%2C%20Can%20I%20ask%20you%20?"
                    target="_blank"
                    className="btn-primary inline-block text-lg"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="flex items-center pt-5">
                <div className="w-1/2">
                  <div className="relative group">
                    <Image
                      src="/learning-coding.webp"
                      alt="Learning"
                      width={220}
                      height={220}
                      className="rounded-full shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="w-1/2">
                  <h2 className="section-title text-3xl font-semibold text-gray-800">Learn to Code</h2>
                  <p className="text-gray-600 text-lg mt-2 font-inter">
                    This web is my learning <br /> progress to be a <span className="font-semibold text-blue-600">web dev</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center ml-10">
              <div className="relative group">
                <div className="relative">
                  <div className="w-64 h-80 border-2 border-blue-300 rounded-full shadow-lg"></div>
                  <div
                    className="w-[229px] h-72 rounded-t-[50%] rounded-b-[52%] shadow-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 absolute group-hover:scale-105 transition-transform duration-300"
                    style={{ top: "18px", left: "14px" }}
                  ></div>
                  <div
                    className="absolute"
                    style={{
                      top: "-80px",
                      left: "11px",
                      width: "calc(92%)",
                      height: "calc(120%)",
                      zIndex: 20,
                    }}
                  >
                    <a
                      href="https://github.com/AshecOne"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full group"
                    >
                      <Image
                        src="/foto-profil.png"
                        alt="Foto Profil"
                        fill
                        objectFit="cover"
                        className="rounded-b-[52%] transition-all duration-300 transform group-hover:scale-105 cursor-pointer filter group-hover:brightness-110"
                      />
                    </a>
                  </div>
                </div>
                <div className="glass border border-white/30 rounded-2xl py-4 px-6 shadow-2xl absolute -bottom-14 -right-8 w-80 text-center backdrop-blur-sm">
                  <p className="text-blue-600 text-2xl font-bold font-poppins">
                    Trian Verson Tumanan
                  </p>
                  <h5 className="text-gray-700 text-lg font-medium font-inter">
                    SouthEast Sulawesi, Kendari
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;