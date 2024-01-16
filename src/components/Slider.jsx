import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = useMemo(() => [
    { url: "/email.svg", title: "Título de la Imagen 1" },
    { url: "/folder.svg", title: "Título de la Imagen 2" },
    { url: "/instagram.svg", title: "Info" },
  ], []); // La dependencia es un array vacío, lo que significa que solo se crea una vez

  const handleImageChange = useCallback((newIndex) => {
    const totalImages = images.length;
    setCurrentImage((newIndex + totalImages) % totalImages);
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange(currentImage + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, handleImageChange]);

  return (
    <div className="text-center">
      <div className="relative mx-auto w-[400px] h-[400px]">
        <Image
          className="object-cover rounded-lg"
          src={images[currentImage].url}
          alt={images[currentImage].title}
          width={300}
          height={300}
        />
      </div>

      <p className="mt-2 text-lg font-semibold">{images[currentImage].title}</p>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`h-4 w-4 rounded-full ${
              index === currentImage ? "bg-amber-200" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-40">
        <button
          className="font-black text-[var(--text-light)] border border-[var(--border-light)] px-4 py-2 rounded-full text-xl"
          onClick={() => handleImageChange(currentImage - 1)}
        >
          «
        </button>
        <button
          className="font-black text-[var(--text-light)] border border-[var(--border-light)] px-4 py-2 rounded-full text-xl"
          onClick={() => handleImageChange(currentImage + 1)}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Slider;
