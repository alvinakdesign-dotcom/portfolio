import luvCover from "@/assets/projects/luv-cover.jpg";
import luv1 from "@/assets/projects/luv-1.jpg";
import luv2 from "@/assets/projects/luv-2.jpg";
import luv3 from "@/assets/projects/luv-3.jpg";
import luv4 from "@/assets/projects/luv-4.jpg";
import luv5 from "@/assets/projects/luv-5.jpg";
import luv6 from "@/assets/projects/luv-6.jpg";
import luv7 from "@/assets/projects/luv-7.jpg";
import luv8 from "@/assets/projects/luv-8.jpg";
import luv9 from "@/assets/projects/luv-9.jpg";

import heidisCover from "@/assets/projects/heidis-cover.jpeg";
import heidis1 from "@/assets/projects/heidis-1.jpg";
import heidis2 from "@/assets/projects/heidis-2.jpg";
import heidis3 from "@/assets/projects/heidis-3.jpg";
import heidis4 from "@/assets/projects/heidis-4.jpg";
import heidis5 from "@/assets/projects/heidis-5.jpg";
import heidis6 from "@/assets/projects/heidis-6.jpg";
import heidis7 from "@/assets/projects/heidis-7.jpg";
import heidis8 from "@/assets/projects/heidis-8.jpg";

import honCover from "@/assets/projects/hon-cover.jpeg";
import hon1 from "@/assets/projects/hon-1.jpg";
import hon2 from "@/assets/projects/hon-2.jpg";
import hon3 from "@/assets/projects/hon-3.jpg";
import hon4 from "@/assets/projects/hon-4.jpg";
import hon5 from "@/assets/projects/hon-5.jpg";
import hon6 from "@/assets/projects/hon-6.jpg";
import hon7 from "@/assets/projects/hon-7.jpg";
import hon8 from "@/assets/projects/hon-8.jpg";
import hon9 from "@/assets/projects/hon-9.jpg";

import matchyCover from "@/assets/projects/matchy-cover.jpg";
import matchy1 from "@/assets/projects/matchy-1.jpg";
import matchy2 from "@/assets/projects/matchy-2.jpg";
import matchy3 from "@/assets/projects/matchy-3.jpg";
import matchy4 from "@/assets/projects/matchy-4.jpg";
import matchy5 from "@/assets/projects/matchy-5.jpg";
import matchy6 from "@/assets/projects/matchy-6.jpg";
import matchy7 from "@/assets/projects/matchy-7.jpg";
import matchy8 from "@/assets/projects/matchy-8.jpg";
import matchy9 from "@/assets/projects/matchy-9.jpg";

import sensedCover from "@/assets/projects/sensed-cover.jpg";
import sensed1 from "@/assets/projects/sensed-1.jpg";
import sensed2 from "@/assets/projects/sensed-2.jpg";
import sensed3 from "@/assets/projects/sensed-3.jpg";
import sensed4 from "@/assets/projects/sensed-4.jpg";
import sensed5 from "@/assets/projects/sensed-5.jpg";
import sensed6 from "@/assets/projects/sensed-6.jpg";

import muqarnasCover from "@/assets/projects/muqarnas-cover.jpg";
import muqarnas1 from "@/assets/projects/muqarnas-1.jpg";
import muqarnas2 from "@/assets/projects/muqarnas-2.jpg";
import muqarnas3 from "@/assets/projects/muqarnas-3.jpg";
import muqarnas4 from "@/assets/projects/muqarnas-4.jpg";
import muqarnas5 from "@/assets/projects/muqarnas-5.jpg";
import muqarnas6 from "@/assets/projects/muqarnas-6.jpg";
import muqarnas7 from "@/assets/projects/muqarnas-7.jpg";
import muqarnas8 from "@/assets/projects/muqarnas-8.jpg";

import thandaiCover from "@/assets/projects/thandai-cover.jpg";
import thandai1 from "@/assets/projects/thandai-1.jpg";
import thandai2 from "@/assets/projects/thandai-2.jpg";
import thandai3 from "@/assets/projects/thandai-3.jpg";
import thandai4 from "@/assets/projects/thandai-4.jpg";
import thandai5 from "@/assets/projects/thandai-5.jpg";
import thandai6 from "@/assets/projects/thandai-6.jpg";
import thandai7 from "@/assets/projects/thandai-7.jpg";
import thandai8 from "@/assets/projects/thandai-8.jpg";
import thandai9 from "@/assets/projects/thandai-9.jpg";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "luv-coffee-patisserie",
    title: "Luv Coffee & Patisserie",
    client: "",
    category: "Brand Identity",
    year: "2026",
    description:
      "A complete brand identity for Luv Coffee & Patisserie, including logo design, visual identity, packaging, illustrations, branded patterns, print collateral, social media direction, and environmental applications for a warm, neighborhood café experience.",
    challenge: "",
    solution: "",
    image: luvCover,
    images: [
      luv1,
      luv2,
      luv3,
      luv4,
      luv5,
      luv6,
      luv7,
      luv8,
      luv9,
    ],
    featured: true,
  },
  {
    id: "heidis-cafe",
    title: "Heidi’s Café",
    client: "",
    category: "Brand Identity",
    year: "2025",
    description:
      "A complete branding project for Heidi's Café, featuring logo design, brand identity, packaging, illustrations, menus, signage, social media, and in-store applications for a friendly local café.",
    challenge: "",
    solution: "",
    image: heidisCover,
    images: [
      heidis1,
      heidis2,
      heidis3,
      heidis4,
      heidis5,
      heidis6,
      heidis7,
      heidis8,
    ],
    featured: true,
  },
  {
    id: "hon",
    title: "HON",
    client: "",
    category: "Brand Identity",
    year: "2026",
    description:
      "A complete brand identity for HON, a premium organic honey brand, including logo design, visual identity, packaging, print collateral, branded patterns, art direction, and a cinematic campaign system.",
    challenge: "",
    solution: "",
    image: honCover,
    images: [
      hon1,
      hon2,
      hon3,
      hon4,
      hon5,
      hon6,
      hon7,
      hon8,
      hon9,
    ],
    featured: true,
  },
  {
    id: "matchy",
    title: "Matchy",
    client: "",
    category: "Brand Identity",
    year: "2026",
    description:
      "A complete visual identity for Matchy, a playful matcha brand with custom typography, packaging, illustrations, and branded merchandise.",
    challenge: "",
    solution: "",
    image: matchyCover,
    images: [
      matchy1,
      matchy2,
      matchy3,
      matchy4,
      matchy5,
      matchy6,
      matchy7,
      matchy8,
      matchy9,
    ],
  },
  {
    id: "sensed-magazine",
    title: "Sensed Magazine",
    client: "",
    category: "Editorial Design",
    year: "2024",
    description:
      "Sensed is a conceptual editorial magazine exploring themes of stalking, unwanted attention, and the psychological impact of being watched. Through carefully composed imagery, typography, and visual storytelling, the publication examines the discomfort and emotional weight of the gaze. All photographic imagery is sourced from non-owned stock photography and has been digitally manipulated and art-directed for this project.",
    challenge: "",
    solution: "",
    image: sensedCover,
    images: [
      sensed1,
      sensed2,
      sensed3,
      sensed4,
      sensed5,
      sensed6,
    ],
  },
  {
    id: "muqarnas",
    title: "Muqarnas",
    client: "",
    category: "Catalog Design",
    year: "2025",
    description:
      "This project explores the intricate Muqarnas of Wazir Khan Masjid through editorial design. The catalog highlights its architectural craftsmanship, historical significance, and ornamental beauty using photography, typography, and a structured layout.",
    challenge: "",
    solution: "",
    image: muqarnasCover,
    images: [
      muqarnas1,
      muqarnas2,
      muqarnas3,
      muqarnas4,
      muqarnas5,
      muqarnas6,
      muqarnas7,
      muqarnas8,
    ],
  },
  {
    id: "thandai",
    title: "Thandai",
    client: "",
    category: "Packaging Design",
    year: "2025",
    description:
      "A 3D packaging design that reimagines traditional Thandai through contemporary form, materials, and visual storytelling.",
    challenge: "",
    solution: "",
    image: thandaiCover,
    images: [
      thandai1,
      thandai2,
      thandai3,
      thandai4,
      thandai5,
      thandai6,
      thandai7,
      thandai8,
      thandai9,
    ],
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);