"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

interface IProfessionalProjectsProps {}

const ProfessionalProjects: React.FunctionComponent<
  IProfessionalProjectsProps
> = (props) => {
  return (
    <section id="professional" className="py-16 bg-blue-50">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold my-5 xl:my-14 text-center">
          My Professional Projects
        </h1>

        {/* ASDP Project */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-6 md:gap-12">
              <div className="mb-4 mr-0 md:mb-0">
                <Image
                  src="/asdp.jpg"
                  alt="ASDP Vehicle Monitoring System"
                  width={921}
                  height={548}
                  layout="intrinsic"
                  quality={100}
                  className="hidden md:block rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center items-center md:ml-8">
                <Image
                  src="/asdp_logo.png"
                  alt="ASDP Logo"
                  width={200}
                  height={200}
                  layout="intrinsic"
                  quality={100}
                  className="pl-2 md:pl-4"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold mb-2">
                ASDP Vehicle Monitoring System
              </h1>
              <p className="text-center text-md font-medium md:text-xl md:px-8 lg:text-lg mb-4 lg:px-32">
                A comprehensive vehicle monitoring web application for port
                operations developed during my time at Widya Robotics. The
                system features AI-powered vehicle classification through camera
                integration, automatic license plate recognition, real-time
                vehicle counting, and comprehensive dashboard reporting for each
                operational shift. The application includes role-based access
                control to ensure secure and organized user management across
                different operational levels.
              </p>
            </div>
          </div>
        </div>

        {/* Pupuk Kaltim Project */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-6 md:gap-12">
              <div className="mb-4 mr-0 md:mb-0">
                <Image
                  src="/pupuk_kaltim.png"
                  alt="Pupuk Kaltim Monitoring System"
                  width={921}
                  height={548}
                  layout="intrinsic"
                  quality={100}
                  className="hidden md:block rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center items-center md:ml-8">
                <Image
                  src="/pupuk_kaltim_logo.png"
                  alt="Pupuk Kaltim Logo"
                  width={200}
                  height={200}
                  layout="intrinsic"
                  quality={100}
                  className="pl-2 md:pl-4"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold mb-2">
                Pupuk Kaltim Monitoring & Classification System
              </h1>
              <p className="text-center text-md font-medium md:text-xl md:px-8 lg:text-lg mb-4 lg:px-32">
                A streamlined fertilizer production monitoring and
                classification system developed at Widya Robotics. This project
                features AI-powered product classification through integrated
                camera systems, automated quality assessment, real-time
                production monitoring, and comprehensive reporting dashboards.
                Built with a simplified yet effective approach, the system
                provides essential monitoring capabilities with an intuitive
                user interface redesigned from the ground up to meet specific
                operational requirements in fertilizer manufacturing
                environments.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfessionalProjects;
