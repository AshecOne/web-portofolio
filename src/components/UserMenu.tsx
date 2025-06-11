import React from "react";

interface IUserMenuProps {
  onClose: () => void;
  onLogout: () => void;
  onSettings: () => void; // New prop for settings
}

const UserMenu: React.FC<IUserMenuProps> = ({
  onClose,
  onLogout,
  onSettings,
}) => {
  const handleSettingsClick = () => {
    onSettings(); // Call parent's settings handler
    onClose(); // Close the dropdown
  };

  const handleLogoutClick = () => {
    onLogout();
    onClose();
  };

  return (
    <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden">
      <button
        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
        onClick={handleSettingsClick}
      >
        Settings
      </button>
      <hr className="border-gray-100" />
      <button
        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 font-medium text-sm"
        onClick={handleLogoutClick}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
