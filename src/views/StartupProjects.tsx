"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

interface IStartupProjectsProps {}

const StartupProjects: React.FunctionComponent<IStartupProjectsProps> = (
  props
) => {
  return (
    <section id="startup" className="py-16 bg-blue-50">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold my-5 xl:my-14 text-center text-gray-800">
          My Startup Projects
        </h1>

        {/* Mine.Lite Project */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center h-full p-4 mb-10">
            {/* Images Section */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-4 md:gap-8">
              {/* Mobile: Show only first image */}
              <div className="md:hidden">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/mine_lite_bm.jpg"
                    alt="Mine.Lite Block Model Visualization"
                    width={300}
                    height={600}
                    layout="intrinsic"
                    quality={100}
                    className="rounded-2xl object-cover"
                    style={{
                      clipPath: "inset(2% 0 0 0 round 16px)",
                      marginTop: "-2%",
                    }}
                  />
                </div>
              </div>

              {/* Desktop: Show both images */}
              <div className="hidden md:flex md:gap-8 md:items-center">
                <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
                  <Image
                    src="/mine_lite_bm.jpg"
                    alt="Mine.Lite Block Model Visualization"
                    width={300}
                    height={600}
                    layout="intrinsic"
                    quality={100}
                    className="rounded-2xl object-cover"
                    style={{
                      clipPath: "inset(1% 0 0 0 round 16px)",
                      marginTop: "-1%",
                    }}
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
                  <Image
                    src="/mine_lite_pdf.jpg"
                    alt="Mine.Lite PDF Integration"
                    width={300}
                    height={600}
                    layout="intrinsic"
                    quality={100}
                    className="rounded-2xl object-cover"
                    style={{
                      clipPath: "inset(1% 0 0 0 round 16px)",
                      marginTop: "-1%",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center justify-center max-w-4xl">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  🚀 FEATURED STARTUP PROJECT
                </div>
              </div>

              <h1 className="text-center text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Mine.Lite - Mining Visualization SaaS
              </h1>

              <div className="text-center text-md font-medium md:text-xl lg:text-lg mb-6 lg:px-16 text-gray-700 leading-relaxed">
                <p className="mb-4">
                  <strong>Breakthrough SaaS mobile application</strong>{" "}
                  revolutionizing the mining industry through advanced
                  geological data visualization. As{" "}
                  <strong>
                    Co-Founder of PT Insinyur Software Handal - Tiang Bendera
                  </strong>
                  , I'm leading the development of this innovative solution.
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-left bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-gray-100">
                  <div>
                    <h3 className="font-bold text-blue-600 mb-2">
                      🎯 Core Features:
                    </h3>
                    <ul className="space-y-1 text-sm md:text-base">
                      <li>• Interactive mining block model visualization</li>
                      <li>• Cross-section analysis & depth visualization</li>
                      <li>• PDF map reading & coordinate alignment</li>
                      <li>• Real-time geological data processing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-blue-700 mb-2">
                      💼 Business Model:
                    </h3>
                    <ul className="space-y-1 text-sm md:text-base">
                      <li>• Subscription-based SaaS platform</li>
                      <li>• Targeting mining professionals globally</li>
                      <li>• Mobile-first approach for field operations</li>
                      <li>• Scalable cloud infrastructure</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 italic">
                  "Transforming how mining professionals visualize and analyze
                  geological data through cutting-edge mobile technology."
                </p>
              </div>

              {/* Stats or highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 w-full max-w-2xl">
                <div className="text-center p-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">2025</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center p-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">SaaS</div>
                  <div className="text-sm text-gray-600">Platform</div>
                </div>
                <div className="text-center p-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">Mobile</div>
                  <div className="text-sm text-gray-600">First</div>
                </div>
                <div className="text-center p-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">Mining</div>
                  <div className="text-sm text-gray-600">Industry</div>
                </div>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.mine.lite&hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 lg:py-4 lg:px-8 lg:text-lg md:py-6 md:px-12 md:text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform"
              >
                <span className="flex items-center justify-center gap-2">
                  📱 Download on Play Store
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StartupProjects;
