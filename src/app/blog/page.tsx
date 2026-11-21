import HeadingWords from '@/components/quiet/HeadingWords';
import type { Metadata } from "next";
import styles from "@/components/quiet/Quiet.module.css";
import { Rows, SectionHead, rowStyles as r } from "@/components/quiet/Rows";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import staticPosts from "@/data/blog";

export const metadata: Metadata = {
  title: "Writing — Sumit Sharma",
  alternates: { canonical: "/blog" },
};

function formatDate(value: string) {
  const plainDate = value.match(/^([A-Za-z]+) (\d{1,2}), (\d{4})$/);
  const date = new Date(plainDate ? `${value} 12:00:00 UTC` : value);
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
  return <><header className={styles.pageIntro}><p className={styles.kicker}>Writing</p><h1><HeadingWords text="Notes from making things"/></h1><p>On design, building products, and life beyond the screen.</p></header><section className={r.section}><SectionHead title="All writing"/><Rows items={[{key:"draft",label:"If you want a good UI, try this",meta:"Draft",href:"/blog/if-you-want-a-good-ui"},...posts.map(post=>({key:post.slug,label:post.title,meta:post.link?`Medium · ${formatDate(post.date)}`:formatDate(post.date),href:post.link??`/blog/${post.slug}`}))]}/></section></>;
}
