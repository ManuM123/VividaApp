"use client";

import Link from "next/link";

import { links } from "@/static_data/overlay_links";
import { articles } from "@/static_data/articles";
import ArticleCard from "./ArticleCard";

export type OverlayProps = {
  closeMenu: () => void;
};

export default function Overlay({ closeMenu }: OverlayProps) {
  return (
    <div className="fixed inset-0 z-40 bg-linear-to-b from-[#F0F0FF] via-[#E8E8FF] to-[#D8D8FF] p-8 flex gap-12">
  
  {/* Left column: nav links */}
  <div className="flex flex-col gap-6 w-1/3 pt-24">
    {links.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        onClick={closeMenu}
        className="text-2xl font-semibold text-gray-700 hover:text-[#6366F1] transition-colors"
      >
        {label}
      </Link>
    ))}
  </div>

  {/* Right column: articles */}
  <div className="w-2/3 pt-24">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Articles</h2>
    <div className="flex flex-wrap gap-6">
      {articles.map((article, idx) => (
        <ArticleCard
          key={idx}
          title={article.title}
          link={article.link}
          image={article.image}
          date={article.date}
          author={article.author}
        />
      ))}
    </div>
  </div>
</div>

  );
}
