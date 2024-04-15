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
    onClose();  // Ensure this also hides the UserMenu itself
  };

  return (
    <>
      <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-10">
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
            onClose(); // Close the UserMenu when the setting is changed
          }}
        />
      )}
    </>
  );
};

export default UserMenu;
