// Slider.jsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = useCallback(
    (newIndex) => {
      const totalImages = images.length;
      setCurrentImage((newIndex + totalImages) % totalImages);
    },
    [images]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange(currentImage + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, handleImageChange]);

  return (
    <div className="relative text-center">
      <div className="relative mx-auto w-full h-[500px]">
        <Image
          className="object-cover"
          src={images[currentImage].url}
          alt={images[currentImage].title}
          layout="fill" // Ocupa todo el tamaño del contenedor
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          {/* Aquí colocamos los botones */}
          <button
            className="font-semibold text-[var(--light)] text-4xl absolute left-4"
            onClick={() => handleImageChange(currentImage - 1)}
          >
            «
          </button>
          <button
            className="font-semibold text-[var(--light)] text-4xl absolute right-4"
            onClick={() => handleImageChange(currentImage + 1)}
          >
            »
          </button>
        </div>
      </div>

      <p className="mt-2 text-lg font-semibold text-[var(--text-light)]">
        {images[currentImage].title}
      </p>

      <div className="flex justify-center items-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`h-4 w-4 rounded-full ${
              index === currentImage ? "bg-[var(--text-extralight)]" : "bg-[var(--border-light)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
