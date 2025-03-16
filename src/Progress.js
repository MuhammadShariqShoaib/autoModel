import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const ImageComparisonUpload = () => {
  const [image, setImage] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImage(URL.createObjectURL(file));
    },
  });

  return (
    <div className="flex gap-6 p-6 bg-black min-h-screen items-center justify-center">
      {/* Image Comparison */}
      <div className="relative w-80 h-80 bg-yellow-500 rounded-xl overflow-hidden">
        <div className="absolute inset-0 w-1/2 bg-black"></div>
        <motion.div
          className="absolute inset-0 w-1/2 bg-black"
          initial={{ width: "50%" }}
          animate={{ width: "50%" }}
          transition={{ duration: 0.5 }}
        />
        <Image
          src="/sample-image.jpg"
          alt="Comparison Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

      {/* Image Upload */}
      <div
        {...getRootProps()}
        className="w-80 h-80 flex flex-col items-center justify-center border-2 border-dashed border-gray-600 bg-gray-900 rounded-xl cursor-pointer hover:border-yellow-400"
      >
        <input {...getInputProps()} />
        {image ? (
          <Image
            src={image}
            alt="Uploaded Image"
            width={300}
            height={300}
            className="rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-400">
            <motion.div
              className="w-12 h-12 bg-yellow-500 flex items-center justify-center rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span className="text-black text-2xl">↑</span>
            </motion.div>
            <p className="mt-2 text-sm">Click or drag here to upload images</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageComparisonUpload;
