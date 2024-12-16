"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Container from "./Container";
import LoginModal from "./LoginModal";
import UserMenu from "./UserMenu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ClipLoader from "react-spinners/ClipLoader";
import { setUser, logout } from "@/lib/features/userSlice";
import SettingModal from "./SettingModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.name);
  const [showSettingModal, setShowSettingModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  const handleSettingsClick = () => {
    setShowSettingModal(true);
  };

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleUserLogin = (name: string) => {
    dispatch(setUser({ name, isLoggedIn: true }));
    handleModalClose();
    setIsMobileMenuOpen(false);
    toast.success(`Welcome, ${name}!`);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    handleModalClose();
    handleUserMenuToggle();
    setIsMobileMenuOpen(false);
    toast.success(`Goodbye, ${userName}!`);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const userProfileInitial = userName ? userName.charAt(0).toUpperCase() : "";

  return (
    <nav className="bg-blue-100 bg-opacity-50 fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="flex items-center md:text-lg justify-between py-2 px-5 md:py-4 md:px-10">
          {isLoading ? (
            <div className="flex items-center justify-center w-full">
              <ClipLoader color="#000000" loading={isLoading} size={20} />
            </div>
          ) : (
            <>
              <div className="flex items-center font-poppins font-bold text-black hover:text-blue-700 transition duration-300 ease-in-out">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("hero");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />
                <Link
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("hero");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  AshecOne
                </Link>
              </div>
              <ul className="hidden md:flex gap-4">
                <li>
                  <Link
                    href="#portofolio"
                    className="font-medium text-black hover:text-blue-700 transition duration-300 ease-in-out px-3.5"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById("portofolio");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    PORTOFOLIO
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/trian-verson-tumanan-49a1221a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-black hover:text-blue-700 transition duration-300 ease-in-out px-3.5"
                  >
                    PROFIL
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drive.google.com/file/d/1tsqXDIUERM-qwL5p3x3OoNP0sNKQKiA_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-black hover:text-blue-700 transition duration-300 ease-in-out px-3.5"
                  >
                    CV
                  </Link>
                </li>
              </ul>
              <div className="hidden md:flex md:items-center">
                {userName ? (
                  <>
                    <div className="w-8 h-8 bg-blue-500 shadow-lg border-gray-400 border-2 font-bold text-white flex items-center justify-center rounded-full">
                      {userProfileInitial}
                    </div>
                    <button
                      className="text-black font-medium px-4 py-2 hover:text-blue-700 hover:underline transition duration-300 ease-in-out"
                      onClick={handleUserMenuToggle}
                    >
                      Hi, {userName}
                    </button>
                  </>
                ) : (
                  <button
                    className="text-gray-800 font-medium border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-100 hover:font-bold hover:shadow"
                    onClick={handleLoginClick}
                  >
                    Log In
                  </button>
                )}
                {isUserMenuOpen && (
                  <UserMenu
                    onClose={handleUserMenuToggle}
                    onLogout={handleLogoutClick}
                  />
                )}
              </div>
              <button
                className={`md:hidden text-2xl ${
                  !userName ? "" : "hidden"
                } hover:text-blue-700 transition duration-300 ease-in-out`}
                onClick={handleMobileMenuToggle}
              >
                <FaBars />
              </button>
              {userName && (
                <div
                  className="md:hidden text-lg font-semibold underline"
                  onClick={handleMobileMenuToggle}
                >
                  Hi, {userName}
                </div>
              )}
              {isMobileMenuOpen && (
                <div className="md:hidden absolute bg-blue-100 bg-opacity-50 w-full left-0 top-full z-10 flex flex-col justify-center items-center">
                  <Link
                    href="#portofolio"
                    className="text-black font-bold hover:text-blue-700 px-3.5 py-2 transition duration-300 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById("portofolio");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    PORTOFOLIO
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/trian-verson-tumanan-49a1221a4/"
                    className="text-black hover:text-blue-700 px-3.5 py-2 transition duration-300 ease-in-out font-bold"
                  >
                    PROFIL
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1SyyV07LFV5fr95CsFRd8zdMeSA-vH8Vv/view?usp=drive_link"
                    className="text-black hover:text-blue-700 px-3.5 py-2 transition duration-300 ease-in-out font-bold"
                  >
                    CV
                  </Link>
                  {userName && (
                    <>
                      <button
                        onClick={handleSettingsClick}
                        className="text-black hover:text-blue-700 px-3.5 py-2 transition duration-300 ease-in-out font-bold"
                      >
                        SETTING
                      </button>
                      <button
                        onClick={handleLogoutClick}
                        className="text-black hover:text-blue-700 px-3.5 py-2 transition duration-300 ease-in-out font-bold"
                      >
                        LOG OUT
                      </button>
                    </>
                  )}
                  {!userName && (
                    <button
                      onClick={handleLoginClick}
                      className="text-black hover:text-blue-700 px-3.5 py-2 transition duration-300 ease-in-out font-bold"
                    >
                      LOG IN
                    </button>
                  )}
                  {showSettingModal && (
                    <SettingModal onClose={() => setShowSettingModal(false)} />
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </Container>
      {isModalOpen && (
        <LoginModal onClose={handleModalClose} onLogin={handleUserLogin} />
      )}
      <ToastContainer position="top-center" />
    </nav>
  );
};

export default Navbar;
