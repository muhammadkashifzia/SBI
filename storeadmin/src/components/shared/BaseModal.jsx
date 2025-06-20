import { X } from "lucide-react";

export default function BaseModal({ onClose, children, className = "" }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div
        className={`relative w-full bg-white shadow-lg max-h-[735px] overflow-hidden p-[20px] ${className}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#666666] hover:text-black z-10"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
