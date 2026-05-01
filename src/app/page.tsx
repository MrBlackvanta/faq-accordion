import omletteImage from "@/assets/images/image-omelette.webp";
import { data } from "@/data/data";
import Image from "next/image";

export default function Home() {
  const { title, questions } = data;
  return (
    <main className="text-preset-4 max-w-184 bg-white text-stone-600 sm:my-32 sm:rounded-3xl sm:p-10">
      <Image
        src={omletteImage}
        alt={title}
        width={1312}
        height={600}
        sizes="(min-width: 1024px) 41rem, (min-width: 768px) 33.5rem, 100vw"
        fetchPriority="high"
        loading="eager"
        className="rounded-xl"
      />
    </main>
  );
}
