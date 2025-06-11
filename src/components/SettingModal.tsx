import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/lib/features/userSlice";
import { toast } from "react-toastify";

interface ISettingModalProps {
  onClose: () => void;
}

const SettingModal: React.FC<ISettingModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUser({ name }));
    toast.success(`Updated successfully to ${name}!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[60]">
      <div className="bg-white rounded-md shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Change Your Name</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
            placeholder="Enter your new name"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingModal;
