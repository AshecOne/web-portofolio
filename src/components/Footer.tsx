import React from "react";
import Image from "next/image";
import Container from "./Container";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="w-full bg-blue-100 bg-opacity-90 py-2 h-[100px]">
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              className="max-w-16 h-auto"
              width={64}
              height={64}
            />
            <p className="font-poppins font-extrabold text-xl text-black">
              AshecOne
            </p>
          </div>
          <p className="font-inherit text-sm text-black mt-1 mb-3">
            &copy; 2024 Seorang Pelajar Sejati
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;