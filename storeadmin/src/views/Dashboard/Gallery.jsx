import React, { useState } from "react";
import UploadBox from "../../components/dashboard/ImageUpload";

export default function ParentComponent({ profileChecks, setProfileChecks }) {
  const [uploadedImages, setUploadedImages] = useState([]);
console.log(profileChecks, setProfileChecks)
  const handleUpload = ({ file, category }) => {
    const newImage = {
      url: URL.createObjectURL(file),
      category,
      file,
    };
    setUploadedImages([...uploadedImages, newImage]);
  };

  const handleDelete = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div>
      <UploadBox
  onUpload={handleUpload}
  uploadedImages={uploadedImages}
  onDelete={handleDelete}
  profileChecks={profileChecks}
  setProfileChecks={setProfileChecks}
/>

    </div>
  );
}
