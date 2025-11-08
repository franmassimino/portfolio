import Image from "next/image";

interface ProjectCoverImageProps {
  src: string;
  alt: string;
}

export function ProjectCoverImage({ src, alt }: ProjectCoverImageProps) {
  return (
    <div className="w-full mx-0 md:mx-auto md:max-w-6xl px-8 md:px-8 mt-6 mb-4 md:mt-12 md:mb-8">
      <div className="w-full flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="object-contain w-full max-h-[500px] mx-auto rounded-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          priority
        />
      </div>
    </div>
  );
}
