import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import staticPosts from "@/data/blog";

export const metadata: Metadata = {
  title: "Writing — Sumit Sharma",
  alternates: { canonical: "/blog" },
};

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
}

export default async function Blog() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const bySlug = new Map(staticPosts.map((post) => [post.slug, post]));
  try {
    const entries = await reader.collections.posts.all();
    for (const { slug, entry } of entries)
      bySlug.set(slug, {
        id: slug as unknown as number,
        title: entry.title,
        excerpt: entry.excerpt,
        date: entry.date,
        readTime: entry.readTime,
        slug,
        tags: [entry.tag],
      });
  } catch (error) {
    console.error("Could not read local posts:", error);
  }
  const posts = Array.from(bySlug.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <div className="page-content">
      <div className="page-heading">
        <p className="eyebrow">Thinking out loud</p>
        <h1>
          Notes, ideas,
          <br />
          <span>and things I’m learning.</span>
        </h1>
        <p>
          Writing about building products, design, and life beyond the screen.
        </p>
      </div>
      <div className="blog-list">
        {posts.map((post) => {
          const content = (
            <>
              <div className="blog-post-meta">
                <time>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
                {post.link && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Medium</span>
                  </>
                )}
              </div>
              <div className="blog-post-title">
                <h2>{post.title}</h2>
                <ArrowUpRight size={15} aria-hidden="true" />
              </div>
              <p>{post.excerpt}</p>
            </>
          );
          return post.link ? (
            <a
              className="blog-post-link"
              key={post.slug}
              href={post.link}
              target="_blank"
              rel="noreferrer"
            >
              {content}
            </a>
          ) : (
            <Link
              className="blog-post-link"
              key={post.slug}
              href={`/blog/${post.slug}`}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
