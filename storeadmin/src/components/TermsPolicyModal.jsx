import { useEffect, useRef, useState } from "react";
import BaseModal from "./shared/BaseModal";

const TermsPolicyModal = ({ onClose }) => {
  const contentRef = useRef(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setScrolledToBottom(isBottom);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BaseModal onClose={onClose}>
      <div className="pt-8 pb-4 px-[24px] flex flex-col h-[70vh]">
        {/* Scrollable Terms Content */}
        <div
          ref={contentRef}
          className="overflow-y-auto pr-2 text-sm text-[#2C3237] leading-[1.6] flex-1"
        >
          <h2 className="text-[16px] font-medium mb-[24px] ">
            利用規約およびプライバシーポリシー
          </h2>
          {[...Array(40)].map((_, i) => (
            <p key={i}>これは利用規約のダミーテキストです。 {i + 1}</p>
          ))}
        </div>

        {/* Button changes when scrolled */}
        <button
          onClick={onClose}
          className="mt-4 h-[40px] w-full mx-auto max-w-[218px] bg-[#006BA6] text-white rounded hover:bg-[#005c90] transition"
        >
          {scrolledToBottom ? "閉じる" : "下までスクロールする"}
        </button>
      </div>
    </BaseModal>
  );
};

export default TermsPolicyModal;
