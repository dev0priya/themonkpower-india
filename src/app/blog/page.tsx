import React from "react";
import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Piping Engineering Blog & Technical Articles",
  description:
    "Explore engineering insights on UPVC plumbing standards, agricultural irrigation friction loss, fire-retardant electrical conduits, and borewell casing selection.",
};

export default function BlogPage() {
  return <BlogListClient />;
}
