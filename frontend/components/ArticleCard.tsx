"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ArticleCardProps = {
  title: string;
  image?: string;
  link: string;
  date?: string;
  author?: string;
};

export default function ArticleCard({ title, image, link, date, author }: ArticleCardProps) {
  return (
    <div className="relative group w-64 bg-linear-to-b from-[#F0F0FF] to-[#E0E0FF] rounded-xl p-4 shadow hover:shadow-lg transition-all hover:translate-y-[-2px]">
      
      {/* Small image at the top */}
      {image && (
        <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}

      {/* Date */}
      {date && <p className="text-xs text-gray-500 mb-1">{date}</p>}

      {/* Title */}
      <h3 className="text-md font-bold text-[#6366F1]">{title}</h3>

      {/* Author */}
      {author && <p className="text-sm text-gray-600 mt-1">{`by ${author}`}</p>}

      {/* Arrow button */}
      <Link
        href={link}
        className="absolute top-4 right-4 text-gray-700 group-hover:text-[#6366F1] transition-colors"
        aria-label="Read article"
      >
        <ArrowUpRight size={20} />
      </Link>
    </div>
  );
}
