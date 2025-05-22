'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Pencil } from 'lucide-react';
import { CardMenu } from '../modal/CardMenu';
import Link from 'next/link';
import { EditVisitModal } from '../modal/EditVisitModal';
import { DeleteConfirmationModal } from '../modal/DeleteConfirmationModal';

export function SnackCard({
  snack,
  showRating = true,
  showEditIcon = false,
  showEyeIcon = false,
  onAdd,
  onEdit,
  onDelete,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditModalOpen(true);
    setMenuOpen(false);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
    setMenuOpen(false);
  };

  return (
    <div className="bg-white rounded-md p-[10px] relative">
      <div className="flex mb-2">
        <div className="flex-shrink-0 mr-[16px]">
          <Image
            src="/assets/images/post.png"
            alt={name}
            width={110}
            height={110}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start w-full">
            <div className="mt-[6px]">
              <Link href={`/profile/${snack.id}`}>
                <h3 className="text-[#B900B3] font-[900] text-[18px] mb-[4px]">
                  {snack.name}
                </h3>
              </Link>
              <p className="text-[14px] font-[400] text-[#C0C0C0]">
                {snack.location}
              </p>
              {showRating && (
                <div className="flex items-center mt-[16px]">
                  <div className="flex text-purple-600">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {star <= 3 ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                              fill="#B900B3"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                              fill="#D9D9D9"
                            />
                          </svg>
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="ml-[8px] text-[#B900B3] font-medium text-[16px]">
                    {snack.rating}
                  </span>
                </div>
              )}
            </div>
            {showEditIcon && (
              <div
                className="text-purple-600 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  width="17"
                  height="4"
                  viewBox="0 0 17 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.75" cy="1.75" r="1.75" fill="#B900B3" />
                  <circle cx="8.25" cy="1.75" r="1.75" fill="#B900B3" />
                  <circle cx="14.75" cy="1.75" r="1.75" fill="#B900B3" />
                </svg>
              </div>
            )}
            {showEyeIcon && (
              <div className="text-purple-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <CardMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onAdd={onAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            onDelete();
            setIsDeleteModalOpen(false);
          }}
        />
      )}
      {isEditModalOpen && (
        <EditVisitModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={onEdit}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}
