import React from "react";
import type { Metadata } from "next";
import MediaGalleryClient from "./MediaGalleryClient";

export const metadata: Metadata = {
  title: "Media & Visual Gallery | Plants, Products & Installations",
  description:
    "Explore high-resolution media from The Monk Power India — extrusion plants, quality testing labs, UPVC plumbing, agricultural installations, and infrastructure projects.",
};

export default function MediaPage() {
  return <MediaGalleryClient />;
}
