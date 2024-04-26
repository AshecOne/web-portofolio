import React, { useState } from "react";
import SettingModal from "./SettingModal";

interface IUserMenuProps {
  onClose: () => void;  // This will now also close the UserMenu
  onLogout: () => void;
}

const UserMenu: React.FC<IUserMenuProps> = ({ onClose, onLogout }) => {
  const [showSettingModal, setShowSettingModal] = useState(false);

  const handleSettingsClick = () => {
    setShowSettingModal(true);
  };

  const handleLogoutClick = () => {
    onLogout();
    onClose(); 
  };

  return (
    <>
      <div className="absolute top-full md:right-10 lg:right-14 md:-mt-5 lg:-mt-4 md:w-[100px] bg-white rounded-md shadow-lg z-10">
        <button
          className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          onClick={handleSettingsClick}
        >
          Setting
        </button>
        <button
          className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          onClick={handleLogoutClick}
        >
          Log Out
        </button>
      </div>
      {showSettingModal && (
        <SettingModal
          onClose={() => {
            setShowSettingModal(false);
            onClose();
          }}
        />
      )}
    </>
  );
};

export default UserMenu;
