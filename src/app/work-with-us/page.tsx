import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Handshake, 
  TrendingUp, 
  Truck, 
  ShieldCheck, 
  Store, 
  Briefcase, 
  ArrowRight, 
  FileText,
  BadgePercent,
  CheckCircle2
} from "lucide-react";
import WorkWithUsClient from "./WorkWithUsClient";

export const metadata: Metadata = {
  title: "Work With Us | Distributorship & Dealership Opportunities",
  description:
    "Partner with The Monk Power India as an authorized distributor or wholesale dealer. Enjoy exclusive territory support, high margins, and guaranteed supply chain.",
};

export default function WorkWithUsPage() {
  return <WorkWithUsClient />;
}
