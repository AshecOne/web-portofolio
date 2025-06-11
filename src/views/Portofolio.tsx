"use client";
import React from "react";
import Image from "next/image";
import { shootingGame } from "@/utils/shootingGame";
import { suitGame } from "@/utils/suitGame";
import { bukaToko } from "@/utils/tokoKelontong";
import Container from "@/components/Container";
import ProfessionalProjects from "./ProfessionalProjects";
import PersonalProjects from "./PersonalProjects";

interface IPortofolioProps {}

const Portofolio: React.FunctionComponent<IPortofolioProps> = (props) => {
  return (
    <>
      {/* Games Section */}
      <div className="py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold my-5 xl:my-14 text-center">
            Wanna Play?
          </h1>
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
                <p className="text-center text-md font-medium md:text-xl lg:text-lg mb-4">
                  Prompt Alert command of Rock Paper Scissors against computer.
                </p>
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-6 lg:py-2 lg:px-6 md:py-4 md:px-10 md:text-xl lg:text-lg rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
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
                <p className="text-center text-md md:text-xl font-medium lg:text-lg mb-4">
                  Prompt Alert command of Two Players shoot each other.
                </p>
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-6 lg:py-2 lg:px-6 md:py-4 md:px-10 md:text-xl lg:text-lg rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
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
              <p className="text-center text-md font-medium md:text-xl lg:text-lg mb-4">
                Prompt Alert command of e-commerce. Login as Admin to manage
                store.
              </p>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-6 lg:py-2 lg:px-6 md:py-4 md:px-10 md:text-xl lg:text-lg rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
                onClick={bukaToko}
              >
                Try!
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Professional Projects Section */}
      <ProfessionalProjects />

      {/* Personal Projects Section */}
      <PersonalProjects />
    </>
  );
};

export default Portofolio;
