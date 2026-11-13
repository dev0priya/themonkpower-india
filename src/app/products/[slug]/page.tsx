import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS_DATA, ProductItem } from "@/data/products";
import { 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Check, 
  PhoneCall, 
  Table, 
  Settings2,
  Share2
} from "lucide-react";
import ProductDetailClient from "./ProductDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | The Monk Power India",
    };
  }

  return {
    title: `${product.name} | Technical Specs & Pricing`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | The Monk Power India`,
      description: product.tagline,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products from same or adjacent categories
  const relatedProducts = PRODUCTS_DATA.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <ProductDetailClient 
      product={product} 
      relatedProducts={relatedProducts} 
    />
  );
}
