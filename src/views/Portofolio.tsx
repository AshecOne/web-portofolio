"use client";
import React from "react";
import Image from "next/image";
import { shootingGame } from "@/utils/shootingGame";
import { suitGame } from "@/utils/suitGame";
import { bukaToko } from "@/utils/tokoKelontong";
import Container from "@/components/Container";

interface IPortofolioProps {}

const Portofolio: React.FunctionComponent<IPortofolioProps> = (props) => {
  return (
    <div id="portofolio" className="py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="flex items-center justify-center mb-4 w-full h-40">
                <Image
                  src="/suit-game.png"
                  alt="Suit Game"
                  width={300}
                  height={300}
                  className="transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">Suit Game</h1>
              <p className="text-center text-md font-medium lg:text-lg mb-4">
                Prompt Alert command of Rock Paper Scissors against computer.
              </p>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
                onClick={suitGame}
              >
                Try!
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="flex items-center justify-center mb-4 w-full h-40">
                <Image
                  src="/shootGame.png"
                  alt="Shooting Game"
                  width={200}
                  height={200}
                  className="transition duration-300 ease-in-out hover:scale-105 pb-2"
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">Shooting Game</h1>
              <p className="text-center text-md font-medium lg:text-lg mb-4">
                Prompt Alert command of Two Players shoot each other.
              </p>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
                onClick={shootingGame}
              >
                Try!
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 md:mb-16">
          <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="flex items-center justify-center mb-4 w-full h-40">
              <Image
                src="/kelontong.png"
                alt="Toko Kelontong"
                width={300}
                height={200}
                className="transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">Toko Kelontong</h1>
            <p className="text-center text-md font-medium lg:text-lg mb-4">
              Prompt Alert command of e-commerce. Login as Admin to manage
              store.
            </p>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              onClick={bukaToko}
            >
              Try!
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div className="mb-4 mr-0 md:mb-0 md:mr-8">
                <Image
                  src="/web-lawyer-desktop.png"
                  alt="Web Lawyer Dekstop"
                  width={921}
                  height={548}
                  layout="intrinsic"
                  quality={100}
                  className="hidden md:block"
                />
              </div>
              <div>
                <Image
                  src="/web-lawyer-mobile.png"
                  alt="Web Lawyer Mobile"
                  width={342}
                  height={595}
                  layout="intrinsic"
                  quality={100}
                  className="pl-2 md:pl-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold mb-2">
                Company Profile Landing Page
              </h1>
              <p className="text-center text-md font-medium lg:text-lg mb-4">
                Code challenge of Purwadhika&apos;s front end module for making
                a company profile website. The design can be found{" "}
                <a
                  href="https://www.behance.net/gallery/189510859/Lawyer-Website?tracking_source=search_projects|lawyer+website&l=13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out underline text-black hover:text-blue-700"
                >
                  here
                </a>
                .
              </p>
              <a
                href="https://web-lawyer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-4 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div>
                <Image
                  src="/money-tracker.png"
                  alt="Money Tracker"
                  width={222}
                  height={445}
                  layout="intrinsic"
                  quality={100}
                  className="pl-2 md:pl-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold mb-2">
                Money Tracker App
              </h1>
              <p className="text-center text-md font-medium lg:text-lg mb-4 lg:px-32">
                This application can track your financial transactions and
                allows you to search through stored transaction records. It is
                built using Next.js for the frontend and MySQL for the database,
                utilizing an Express API. The repo is in my{" "}
                <a
                  href="https://github.com/AshecOne/expense-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out underline text-black hover:text-blue-700"
                >
                  github
                </a>
                .
              </p>
              <a
                href="https://ashecone.github.io/expense-tracker/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-4 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div className="mb-4 mr-0 md:mb-0 md:mr-8">
                <Image
                  src="/sayurmoms-desktop.png"
                  alt="Sayurmoms Dekstop"
                  width={921}
                  height={548}
                  layout="intrinsic"
                  quality={100}
                  className="hidden md:block"
                />
              </div>
              <div>
                <Image
                  src="/sayurmoms-mobile.png"
                  alt="Sayurmoms Mobile"
                  width={242}
                  height={445}
                  layout="intrinsic"
                  quality={100}
                  className="pl-2 md:pl-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold mb-2">
                Sayurmoms Landing Page
              </h1>
              <p className="text-center text-md font-medium lg:text-lg mb-4 lg:px-32">
                This landing page was created by a team of three: myself, Putu,
                and Ronald, as part of a group assignment at Purwadhika
                Surabaya.{" "}
                <a
                  href="https://shopee.co.id/sayurmoms.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out underline text-black hover:text-blue-700"
                >
                  Sayurmoms
                </a>{" "}
                is an e-commerce platform that sells daily food essentials based
                in Surabaya. My contributions to this website include creating
                the &apos;About Us&apos;, &apos;Testimonials&apos;,
                &apos;FAQ&apos;, and the &apos;Footer&apos; sections. The repo
                is{" "}
                <a
                  href="https://github.com/thujuli/sayurmoms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out underline text-black hover:text-blue-700"
                >
                  here
                </a>
                .
              </p>
              <a
                href="https://sayurmoms.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-4 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div className="mb-4 mr-0 md:mb-0 md:mr-8">
                <Image
                  src="/grocery-vite-desktop.png"
                  alt="Prototype Dekstop"
                  width={921}
                  height={548}
                  layout="intrinsic"
                  quality={100}
                  className="hidden md:block"
                />
              </div>
              <div>
                <Image
                  src="/grocery-vite-mobile.png"
                  alt="Prototype Mobile"
                  width={242}
                  height={445}
                  layout="intrinsic"
                  quality={100}
                  className="pl-2 md:pl-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold mb-2">
                Prototype Landing Page
              </h1>
              <p className="text-center text-md font-medium lg:text-lg mb-4 lg:px-32">
                Before creating the Sayurmoms landing page, we developed a
                prototype using the React library Vite. My
                primary contributions included designing sections and ensuring
                mobile responsiveness. Specifically, I worked on the promo card,
                about us, and footer sections. The repo is{" "}
                <a
                  href="https://github.com/thujuli/grocery_vite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out underline text-black hover:text-blue-700"
                >
                  here
                </a>
                .
              </p>
              <a
                href="https://grocery-vite.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-4 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portofolio;
