"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

interface IPersonalProjectsProps {}

const PersonalProjects: React.FunctionComponent<IPersonalProjectsProps> = (
  props
) => {
  return (
    <section id="personal" className="py-16 bg-blue-50">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold my-5 xl:my-14 text-center">
          My Personal Projects
        </h1>

        {/* Chess Game Project */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div className="mb-4 mr-0 md:mb-0 md:mr-8">
                <Image
                  src="/fachri-chess.png"
                  alt="Chess Game"
                  width={3481}
                  height={1938}
                  layout="responsive"
                  quality={100}
                  className="hidden md:block rounded-lg shadow-lg"
                />
              </div>
              <div>
                <Image
                  src="/fachri-chess-mobile.png"
                  alt="Chess Game Mobile"
                  width={242}
                  height={445}
                  layout="intrinsic"
                  quality={100}
                  className="pl-2 md:pl-0 md:hidden"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold mb-2">
                Chess Game with Fachri
              </h1>
              <p className="text-center text-md font-medium md:text-xl md:px-8 lg:text-lg mb-4 lg:px-32">
                Play chess against an AI trained with a 2000 ELO-rated dataset
                from 2019 using PyTorch. This game includes an interactive chat
                feature, providing a challenging experience in memory of our
                friend Fachri, whose passion for chess inspires us. For more,
                see the{" "}
                <a
                  href="https://github.com/AshecOne/fachri-chess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out underline text-black hover:text-blue-700"
                >
                  GitHub
                </a>
                .
              </p>
              <a
                href="https://ashecone.github.io/fachri-chess/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-4 px-6 lg:py-4 lg:px-6 lg:text-lg md:py-6 md:px-10 md:text-xl rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>

        {/* RoboWater Project */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div>
                <Image
                  src="/RoboWater.png"
                  alt="RoboWater App"
                  width={222}
                  height={445}
                  layout="intrinsic"
                  quality={100}
                  className="pl-2 md:pl-0"
                />
              </div>
              <div className="hidden md:block md:ml-8">
                <Image
                  src="/robowater_logo.png"
                  alt="RoboWater Logo"
                  width={200}
                  height={200}
                  layout="intrinsic"
                  quality={100}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold mb-2">
                RoboWater - Smart Plant Watering App
              </h1>
              <p className="text-center text-md font-medium md:text-xl md:px-8 lg:text-lg mb-4 lg:px-32">
                A React Native mobile app integrated with IoT technology for
                automated plant watering. Using ESP8266 and servo motor, users
                can remotely control their water valve through the Blynk
                platform, ensuring plants are watered even when away from home.
              </p>
              <a
                href="https://github.com/AshecOne/RoboWater"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-4 px-6 lg:py-4 lg:px-6 lg:text-lg md:py-6 md:px-10 md:text-xl rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>

        {/* Company Profile Landing Page */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center mb-8">
            <div className="mb-4 mr-0 md:mb-0 md:mr-8">
              <Image
                src="/web-lawyer-desktop.png"
                alt="Web Lawyer Desktop"
                width={921}
                height={548}
                layout="intrinsic"
                quality={100}
                className="hidden md:block rounded-lg shadow-lg"
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
            <p className="text-center text-md font-medium md:text-xl md:px-8 lg:text-lg mb-4">
              Code challenge of Purwadhika&apos;s front end module for making a
              company profile website. The design can be found{" "}
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
              className="bg-blue-500 text-white font-bold py-4 px-6 lg:py-4 lg:px-6 lg:text-lg md:py-6 md:px-10 md:text-xl rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
            >
              Check it Out!
            </a>
          </div>
        </div>

        {/* Web App Blog */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div className="mb-4 mr-0 md:mb-0 md:mr-8">
                <Image
                  src="/web-blog-desktop.png"
                  alt="Web Blog Desktop"
                  width={3481}
                  height={1938}
                  layout="responsive"
                  quality={100}
                  className="hidden md:block rounded-lg shadow-lg"
                />
              </div>
              <div>
                <Image
                  src="/web-blog-mobile.png"
                  alt="Web Blog Mobile"
                  width={242}
                  height={445}
                  layout="intrinsic"
                  quality={100}
                  className="pl-2 md:pl-0 md:hidden"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold mb-2">
                Web App Blog
              </h1>
              <p className="text-center text-md font-medium md:text-xl md:px-8 lg:text-lg mb-4 lg:px-32">
                This application allows users to create and manage blogs based
                on predefined categories. Built with Next.js, React, and Redux
                for the frontend, and utilizing MySQL, Prisma ORM, and
                Express.js for the backend, this web app offers a seamless and
                efficient blogging experience. The design inspiration is taken
                from a Figma community file, which can be found{" "}
                <a
                  href="https://www.figma.com/community/file/1185112138001406562/blogging-website-ui-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out underline text-black hover:text-blue-700"
                >
                  here
                </a>
                . Check out the repository on my{" "}
                <a
                  href="https://github.com/AshecOne/web-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out underline text-black hover:text-blue-700"
                >
                  github
                </a>
                .
              </p>
              <a
                href="https://ashecone.github.io/web-blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-4 px-6 lg:py-4 lg:px-6 lg:text-lg md:py-6 md:px-10 md:text-xl rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>

        {/* Money Tracker App */}
        <div className="mb-16">
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
              <p className="text-center text-md font-medium md:text-xl md:px-8 lg:text-lg mb-4 lg:px-32">
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
                className="bg-blue-500 text-white font-bold py-4 px-6 lg:py-4 lg:px-6 lg:text-lg md:py-6 md:px-10 md:text-xl rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>

        {/* Sayurmoms Landing Page */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div className="mb-4 mr-0 md:mb-0 md:mr-8">
                <Image
                  src="/sayurmoms-desktop.png"
                  alt="Sayurmoms Desktop"
                  width={921}
                  height={548}
                  layout="intrinsic"
                  quality={100}
                  className="hidden md:block rounded-lg shadow-lg"
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
              <p className="text-center text-md font-medium md:text-xl md:px-8 lg:text-lg mb-4 lg:px-32">
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
                className="bg-blue-500 text-white font-bold py-4 px-6 md:py-6 md:px-10 md:text-xl lg:py-4 lg:px-6 lg:text-lg rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>

        {/* Prototype Landing Page */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div className="mb-4 mr-0 md:mb-0 md:mr-8">
                <Image
                  src="/grocery-vite-desktop.png"
                  alt="Prototype Desktop"
                  width={921}
                  height={548}
                  layout="intrinsic"
                  quality={100}
                  className="hidden md:block rounded-lg shadow-lg"
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
              <p className="text-center text-md font-medium md:text-xl md:px-8 lg:text-lg mb-4 lg:px-32">
                Before creating the Sayurmoms landing page, we developed a
                prototype using the React library Vite. My primary contributions
                included designing sections and ensuring mobile responsiveness.
                Specifically, I worked on the promo card, about us, and footer
                sections. The repo is{" "}
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
                className="bg-blue-500 text-white font-bold py-4 px-6 md:py-6 md:px-10 md:text-xl lg:py-4 lg:px-6 lg:text-lg rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PersonalProjects;
