import Image from "next/image";

interface ProjectCoverImageProps {
  src: string;
  alt: string;
}

export function ProjectCoverImage({ src, alt }: ProjectCoverImageProps) {
  return null
  return (
    <div className="w-full mx-0 md:mx-auto md:max-w-6xl px-8 md:px-8 mt-0 mb-6 md:mb-12">
      <div className="w-full rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-0 md:p-6">
        <div className="relative w-full max-w-5xl">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="object-cover md:object-contain w-full h-auto max-h-[600px] md:max-h-[600px] mx-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
