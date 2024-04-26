import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div id="hero" className="flex flex-col justify-center h-[620px] md:h-[450px] lg:h-[630px] lg:py-10 md:pt-32">
      <Container>
        <div className="lg:block md:hidden hidden">
          <div className="flex justify-between items-center pt-5">
            <div className="flex flex-col justify-center space-y-12 mr-10">
              <div>
                <h1 className="text-8xl font-bold text-black">
                  Hello, Econ is here
                </h1>
                <p className="text-2xl text-gray-700 mt-6">
                  A Physics Graduate&apos;s Journey into Creative Coding
                </p>
                <div className="mt-8">
                  <Link
                    href="https://wa.me/6285156720292?text=Hello%2C%20Can%20I%20ask%20you%20?
                  "
                    target="_blank"
                    className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex items-center pt-5">
                <div className="w-1/2 pl-48">
                  <Image
                    src="/learning-coding.webp"
                    alt="Learning"
                    width={200}
                    height={200}
                    className="rounded-full shadow-lg"
                  />
                </div>
                <div className="w-1/2">
                  <h2 className="text-2xl font-semibold">Learn to Code</h2>
                  <p className="text-gray-600 text-md mt-2">
                    This web is my learning <br /> progress to be a web dev
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center ml-10">
              <div className="relative">
                <div className="relative">
                  <div className="w-64 h-80 border-2 border-blue-300 rounded-full shadow-md"></div>
                  <div
                    className="w-[229px] h-72 rounded-t-[50%] rounded-b-[52%] shadow-lg bg-gradient-to-br from-indigo-500 to-blue-700 absolute"
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
                      href="https://github.com/AshecOne?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/foto-profil.png"
                        alt="Foto Profil"
                        fill
                        objectFit="cover"
                        className="rounded-b-[52%] transition duration-300 transform hover:scale-105 cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
                <div className="bg-white bg-opacity-50 border border-white rounded-2xl py-4 px-6 shadow-lg absolute -bottom-14 -right-8 w-80 text-center">
                  <p className="text-blue-500 text-2xl font-bold">
                    Trian Verson Tumanan
                  </p>
                  <h5 className="text-gray-700 text-md font-medium font-poppins">
                    SouthEast Sulawesi, Kendari
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden lg:hidden block">
          <div className="flex flex-col items-center space-y-8 pt-[80px]">
            <div>
              <h1 className="text-4xl font-bold text-black text-center">
                Hello, Econ is here
              </h1>
            </div>
            <div className="h-[245px] relative text-center">
              <div className="relative w-[200px] h-[220px] border-2 border-blue-300 rounded-full -top-5 shadow-md inline-block"></div>
              <div className="w-[170px] h-[200px] rounded-full shadow-lg bg-gradient-to-br from-indigo-500 to-blue-700 absolute -top-2 left-0 right-0 mx-auto"></div>
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
                  href="https://github.com/AshecOne?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/foto-profil.png"
                    alt="Foto Profil"
                    fill
                    objectFit="cover"
                    className="rounded-b-[52%] transition duration-300 transform hover:scale-105"
                  />
                </a>
              </div>

              <div className="bg-white bg-opacity-50 border rounded-2xl py-3 px-4 shadow-lg text-center -mt-10 w-64">
                <p className="text-blue-500 text-xl font-bold">
                  Trian Verson Tumanan
                </p>
                <h5 className="text-gray-700 text-sm font-medium font-poppins">
                  SouthEast Sulawesi, Kendari
                </h5>
              </div>
            </div>
            <div className="h-[32px] mx-4">
              <p className="text-md font-medium text-gray-700 text-center">
                A Physics Graduate&apos;s Journey into Creative Coding
              </p>
            </div>
            <div className="flex items-center">
              <Image
                src="/learning-coding.webp"
                alt="Learning"
                width={150}
                height={150}
                className="rounded-full shadow-lg"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Learn to Code</h2>
                <p className="text-gray-600 font-medium text-sm mt-1">
                  This web is my learning <br /> progress to be a web dev
                </p>
              </div>
            </div>
            <div>
              <Link
                href="https://wa.me/6285156720292?text=Hello%2C%20Can%20I%20ask%20you%20? "
                target="_blank"
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-base font-bold transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="md:block hidden lg:hidden">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center space-y-12 ml-10">
              <div>
                <h1 className="text-6xl font-bold text-black">
                  Hello, Econ is here
                </h1>
                <p className="text-xl text-gray-700 mt-4">
                  A Physics Graduate&apos;s Journey into Creative Coding
                </p>
                <div className="mt-6">
                  <Link
                    href="https://wa.me/6285156720292?text=Hello%2C%20Can%20I%20ask%20you%20?"
                    target="_blank"
                    className="inline-block bg-blue-500 text-white py-4 px-8 rounded-full text-lg font-bold transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex items-center pt-5 pl-13">
                <div className="w-4/9 pr-8">
                  <Image
                    src="/learning-coding.webp"
                    alt="Learning"
                    width={200}
                    height={180}
                    className="rounded-full shadow-lg"
                  />
                </div>
                <div className="w-5/9">
                  <h2 className="text-2xl font-semibold">Learn to Code</h2>
                  <p className="text-gray-600 text-lg mt-1">
                    This web is my learning <br /> progress to be a web dev
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mr-10">
              <div className="relative">
                <div className="relative">
                  <div className="w-48 h-64 border-2 border-blue-300 rounded-full shadow-md"></div>
                  <div
                    className="w-[170px] h-56 rounded-t-[50%] rounded-b-[52%] shadow-lg bg-gradient-to-br from-indigo-500 to-blue-700 absolute"
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
                      href="https://github.com/AshecOne?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/foto-profil.png"
                        alt="Foto Profil"
                        fill
                        objectFit="cover"
                        className="rounded-b-[52%] transition duration-300 transform hover:scale-105 cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
                <div className="bg-white bg-opacity-50 border border-white rounded-2xl py-3 px-4 shadow-lg absolute -bottom-14 -right-6 w-64 text-center">
                  <p className="text-blue-500 text-xl font-bold">
                    Trian Verson Tumanan
                  </p>
                  <h5 className="text-gray-700 text-sm font-medium font-poppins">
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
