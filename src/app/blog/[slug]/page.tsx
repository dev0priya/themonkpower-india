import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  BookOpen, 
  CheckCircle2,
  FileText,
  ShieldCheck
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | The Monk Power India",
    };
  }

  return {
    title: `${post.title} | Engineering Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.featuredImage }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="flex flex-col min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white pt-12 pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <span className="text-slate-400">{post.category}</span>
          </div>

          <div className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-600 text-white mb-4">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs border border-sky-400/40">
                RN
              </div>
              <span>{post.author.name} · {post.author.role}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>{post.publishedDate}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Lead Excerpt */}
        <p className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed pb-8 border-b border-slate-200">
          {post.excerpt}
        </p>

        {/* Section Blocks */}
        <div className="mt-8 space-y-10">
          {post.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                {sec.sectionHeading}
              </h2>
              {sec.bodyText.map((para, pIdx) => (
                <p key={pIdx} className="text-base text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}

              {sec.keyTakeaway && (
                <div className="mt-4 p-5 bg-sky-50 rounded-xl border-l-4 border-sky-600 text-sky-950 text-sm leading-relaxed flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-sky-900 uppercase text-xs tracking-wider mb-1">
                      Key Engineering Takeaway:
                    </strong>
                    <span>{sec.keyTakeaway}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
            {post.author.name.slice(0, 2)}
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">{post.author.name}</h4>
            <p className="text-xs font-medium text-sky-700">{post.author.role}</p>
            <p className="text-xs text-slate-500 mt-1">
              Part of The Monk Power India polymer research &amp; quality assurance engineering panel.
            </p>
          </div>
        </div>

        {/* Back Link & Quote CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-sky-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition"
          >
            <span>Explore Certified Pipes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-black text-slate-900 mb-6">Related Technical Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-sky-300 transition group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition mt-1">
                      {rel.title}
                    </h4>
                  </div>
                  <p className="text-xs font-semibold text-sky-600 mt-4 flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
