"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import LoginModal from "./LoginModal";
import UserMenu from "./UserMenu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLoginClick = () => {
    setIsModalOpen(true);
    // Only close mobile menu if it's actually open (mobile only)
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const userProfileInitial = userName ? userName.charAt(0).toUpperCase() : "";

  const handleSettingsClick = () => {
    setShowSettingModal(true);
    setIsUserMenuOpen(false); // Close user menu when opening settings
    // Only close mobile menu if it's actually open (mobile only)
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Mobile Menu Item Component
  const MobileMenuItem = ({ href, children, onClick, external = false }: {
    href: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    external?: boolean;
  }) => (
    <div className="overflow-hidden">
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block text-white hover:text-blue-300 py-4 px-8 text-xl font-bold font-poppins transition-all duration-300 ease-in-out transform hover:-translate-x-2 hover:bg-white/10 rounded-l-full"
        onClick={onClick}
      >
        {children}
      </Link>
    </div>
  );

  // Animated Hamburger Icon (Simple color change only)
  const HamburgerIcon = () => (
    <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
      <span
        className={`w-6 h-0.5 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'bg-blue-500' 
            : 'bg-black'
        }`}
      />
      <span
        className={`w-6 h-0.5 transition-all duration-300 ease-in-out my-1 ${
          isMobileMenuOpen 
            ? 'bg-blue-500' 
            : 'bg-black'
        }`}
      />
      <span
        className={`w-6 h-0.5 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'bg-blue-500' 
            : 'bg-black'
        }`}
      />
    </div>
  );

  return (
    <>
      <nav className="bg-blue-100 bg-opacity-50 backdrop-blur-sm fixed top-0 left-0 w-full z-40">
        <Container>
          <div className="flex items-center lg:text-lg justify-between py-2 px-5 lg:py-4 lg:px-10">
            {isLoading ? (
              /* Skeleton Loading */
              <div className="flex items-center justify-between w-full animate-pulse">
                {/* Logo Skeleton */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="h-6 bg-gray-300 rounded w-24"></div>
                </div>
                
                {/* Desktop Menu Skeleton */}
                <div className="hidden lg:flex gap-4">
                  <div className="h-4 bg-gray-300 rounded w-20"></div>
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                  <div className="h-4 bg-gray-300 rounded w-18"></div>
                  <div className="h-4 bg-gray-300 rounded w-20"></div>
                  <div className="h-4 bg-gray-300 rounded w-14"></div>
                  <div className="h-4 bg-gray-300 rounded w-8"></div>
                </div>
                
                {/* Desktop Login Button Skeleton */}
                <div className="hidden lg:block h-10 bg-gray-300 rounded-md w-20"></div>
                
                {/* Mobile User/Hamburger Skeleton */}
                <div className="lg:hidden flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                </div>
              </div>
            ) : (
              <>
                {/* Logo */}
                <div className="flex items-center font-poppins font-bold text-black hover:text-blue-700 transition duration-300 ease-in-out">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="cursor-pointer"
                    onClick={() => scrollToSection("hero")}
                  />
                  <Link
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("hero");
                    }}
                    className="text-xl font-black tracking-wide"
                  >
                    AshecOne
                  </Link>
                </div>

                {/* Desktop Menu - Ubah md: menjadi lg: */}
                <ul className="hidden lg:flex gap-4">
                  <li>
                    <Link
                      href="#professional"
                      className="font-medium text-black hover:text-blue-700 transition duration-300 ease-in-out px-3.5"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("professional");
                      }}
                    >
                      PROFESSIONAL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#startup"
                      className="font-medium text-black hover:text-blue-700 transition duration-300 ease-in-out px-3.5"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("startup");
                      }}
                    >
                      STARTUP
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#personal"
                      className="font-medium text-black hover:text-blue-700 transition duration-300 ease-in-out px-3.5"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("personal");
                      }}
                    >
                      PERSONAL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#techstack"
                      className="font-medium text-black hover:text-blue-700 transition duration-300 ease-in-out px-3.5"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("techstack");
                      }}
                    >
                      TECH STACK
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/ashecone/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-black hover:text-blue-700 transition duration-300 ease-in-out px-3.5"
                    >
                      PROFIL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://drive.google.com/file/d/12qYC7xkBRhLw7LhbfYZLMgiv9sFL0YxW/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-black hover:text-blue-700 transition duration-300 ease-in-out px-3.5"
                    >
                      CV
                    </Link>
                  </li>
                </ul>

                {/* Desktop User Menu - Tetap lg: */}
                <div className="hidden lg:flex lg:items-center relative">
                  {userName ? (
                    <div className="flex items-center relative">
                      <div className="w-8 h-8 bg-blue-500 shadow-lg border-gray-400 border-2 font-bold text-white flex items-center justify-center rounded-full">
                        {userProfileInitial}
                      </div>
                      <button
                        className="text-black font-medium px-4 py-2 hover:text-blue-700 hover:underline transition duration-300 ease-in-out"
                        onClick={handleUserMenuToggle}
                      >
                        Hi, {userName}
                      </button>
                      {isUserMenuOpen && (
                        <UserMenu
                          onClose={handleUserMenuToggle}
                          onLogout={handleLogoutClick}
                          onSettings={handleSettingsClick}
                        />
                      )}
                    </div>
                  ) : (
                    <button
                      className="text-gray-800 font-medium border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-100 hover:font-bold hover:shadow"
                      onClick={handleLoginClick}
                    >
                      Log In
                    </button>
                  )}
                </div>

                {/* Mobile Elements - Ubah md: menjadi lg: */}
                <div className="lg:hidden flex items-center gap-4">
                  {userName ? (
                    // When logged in: Show username as clickable element (replaces hamburger)
                    <div 
                      className="flex items-center gap-2 cursor-pointer hover:bg-blue-200 rounded-lg px-3 py-2 transition-all duration-200"
                      onClick={handleMobileMenuToggle}
                    >
                      <div className="w-8 h-8 bg-blue-500 shadow-lg border-gray-400 border-2 font-bold text-white flex items-center justify-center rounded-full text-sm">
                        {userProfileInitial}
                      </div>
                      <span className="text-sm font-semibold text-black font-poppins">
                        Hi, {userName}
                      </span>
                    </div>
                  ) : (
                    // When not logged in: Show hamburger menu
                    <button
                      className="p-2 hover:bg-blue-200 rounded-lg transition-all duration-200"
                      onClick={handleMobileMenuToggle}
                      aria-label="Toggle menu"
                    >
                      <HamburgerIcon />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </Container>
      </nav>

      {/* Mobile Side Navigation - Ubah md: menjadi lg: */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleMobileMenuToggle}
        />
        
        {/* Side Panel - Slide from RIGHT */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-bl from-blue-600 via-indigo-700 to-purple-800 shadow-2xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h2 className="text-white font-black text-xl font-poppins tracking-wide">
                AshecOne
              </h2>
            </div>
            <button
              onClick={handleMobileMenuToggle}
              className="text-white hover:text-blue-300 transition-colors duration-200 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 space-y-2">
            <MobileMenuItem
              href="#professional"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("professional");
              }}
            >
              PROFESSIONAL
            </MobileMenuItem>
            
            <MobileMenuItem
              href="#startup"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("startup");
              }}
            >
              STARTUP
            </MobileMenuItem>
            
            <MobileMenuItem
              href="#personal"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("personal");
              }}
            >
              PERSONAL
            </MobileMenuItem>
            
            <MobileMenuItem
              href="#techstack"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("techstack");
              }}
            >
              TECH STACK
            </MobileMenuItem>
            
            <MobileMenuItem
              href="https://www.linkedin.com/in/ashecone/"
              external
            >
              PROFIL
            </MobileMenuItem>
            
            <MobileMenuItem
              href="https://drive.google.com/file/d/12qYC7xkBRhLw7LhbfYZLMgiv9sFL0YxW/view?usp=sharing"
              external
            >
              CV
            </MobileMenuItem>

            {/* User Actions */}
            {userName ? (
              <>
                <div className="border-t border-white/20 mt-6 pt-4 space-y-2">
                  <div className="overflow-hidden">
                    <button
                      onClick={handleSettingsClick}
                      className="block w-full text-left text-white hover:text-blue-300 py-4 px-8 text-xl font-bold font-poppins transition-all duration-300 ease-in-out transform hover:-translate-x-2 hover:bg-white/10 rounded-l-full"
                    >
                      SETTINGS
                    </button>
                  </div>
                  <div className="overflow-hidden">
                    <button
                      onClick={handleLogoutClick}
                      className="block w-full text-left text-white hover:text-red-300 py-4 px-8 text-xl font-bold font-poppins transition-all duration-300 ease-in-out transform hover:-translate-x-2 hover:bg-white/10 rounded-l-full"
                    >
                      LOG OUT
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="border-t border-white/20 mt-6 pt-4">
                <div className="overflow-hidden">
                  <button
                    onClick={handleLoginClick}
                    className="block w-full text-left text-white hover:text-blue-300 py-4 px-8 text-xl font-bold font-poppins transition-all duration-300 ease-in-out transform hover:-translate-x-2 hover:bg-white/10 rounded-l-full"
                  >
                    LOG IN
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals - Same level as LoginModal */}
      {isModalOpen && (
        <LoginModal onClose={handleModalClose} onLogin={handleUserLogin} />
      )}
      
      {showSettingModal && (
        <SettingModal onClose={() => setShowSettingModal(false)} />
      )}
      
      <ToastContainer position="top-center" />
    </>
  );
};

export default Navbar;