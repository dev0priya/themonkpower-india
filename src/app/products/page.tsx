import React from "react";
import type { Metadata } from "next";
import ProductsCatalogClient from "./ProductsCatalogClient";

export const metadata: Metadata = {
  title: "Product Catalogue | High-Pressure Pipes, Hoses & Conduits",
  description:
    "Comprehensive product catalogue of The Monk Power India: PVC Suction Hose Pipes, UPVC Plumbing Pipes & Fittings, Electrical Conduits, Agricultural Pipes, and Borewell Casing.",
};

export default function ProductsPage() {
  return <ProductsCatalogClient />;
}
