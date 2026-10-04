import { createReader } from '@keystatic/core/reader';
import { DocumentRenderer } from '@keystatic/core/renderer';
import keystaticConfig from '../../../../keystatic.config';
import { notFound } from 'next/navigation';
import AsciiHeroContainer from '@/components/ui/AsciiHeroContainer';

function formatDate(dateString: string) {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch {
    return dateString;
  }
}

export async function generateStaticParams() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const posts = await reader.collections.posts.list();
  
  return posts.map((slug) => ({
    slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const reader = createReader(process.cwd(), keystaticConfig);
  const post = await reader.collections.posts.read(params.slug);
  
  if (!post) {
    notFound();
  }

  const contentNode = await post.content();

  return (
    <AsciiHeroContainer className="w-full">
      <article className="prose prose-sm prose-zinc dark:prose-invert text-foreground max-w-3xl mx-auto py-12 animate-fade-in">
      <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6">
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="text-muted-foreground">{post.tag}</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 border-b border-border pb-8">
        {post.title}
      </h1>
      <div className="text-muted-foreground leading-relaxed text-lg">
        {/* Render serialized markdoc or plain content for now */}
        {contentNode ? (
          <DocumentRenderer document={contentNode} />
        ) : (
          <p>Writing in progress...</p>
        )}
      </div>
    </article>
    </AsciiHeroContainer>
  );
}
