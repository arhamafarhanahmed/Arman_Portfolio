export const profile = {
  name: "Arman",
  fullName: "Arman",
  title: "MERN Stack Developer",
  subtitle: "Full-Stack Developer · Database Specialist",
  email: "armanaminjankabeer@gmail.com",
  phone: "+923013339252",
  location: "Pakistan",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  about: `I am a dedicated MERN Stack Developer with strong expertise in building scalable web applications using MongoDB, Express.js, React, and Node.js. Alongside modern JavaScript frameworks, I am proficient in Python, Java, C, C#, and relational database management with MySQL.

I deliver clean, maintainable code and user-focused solutions — from REST APIs and authentication systems to responsive front-end interfaces. I am committed to professional excellence and continuous learning in software development.`,
}

export const skills = [
  {
    category: "MERN Stack",
    items: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "JWT Auth"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C#"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "SQL Queries", "Schema Design", "Data Modeling"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub", "Vite", "Tailwind CSS", "Postman", "Agile"],
  },
]

export type Project = {
  title: string
  description: string
  tech: string[]
  images: string[]
  url?: string
}

export const projects: Project[] = [
  {
    title: "SwiftZone",
    description:
      "Corporate software solutions landing page with dark theme, hero animations, and service-focused layout for a modern dev agency brand.",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    images: [
      "/SwiftZone/swiftzone1.png",
      "/SwiftZone/swiftzone2.png",
      "/SwiftZone/swiftzone3.png",
    ],
    url: "https://swift-zone.vercel.app/",
  },
  {
    title: "XWallet — Crypto",
    description:
      "Web3 crypto wallet marketing site with clean product hero, download CTAs, and mobile-first wallet showcase visuals.",
    tech: ["React", "Vite", "Web3 UI"],
    images: ["/Crypto/crypto1.png", "/Crypto/crypto2.png", "/Crypto/crypto3.png"],
    url: "https://crypto-wallet-two-sooty.vercel.app/",
  },
  {
    title: "Buddies — Cloth Brand",
    description:
      "Full e-commerce storefront for kids and women's fashion with category navigation, hero promos, and shop-ready product layout.",
    tech: ["React", "E-Commerce", "Tailwind CSS"],
    images: [
      "/Buddies/buddies1.png",
      "/Buddies/buddies2.png",
      "/Buddies/buddies3.png",
    ],
    url: "https://cloth-brand-tau.vercel.app/",
  },
  {
    title: "Beauty Blend",
    description:
      "Beauty & cosmetics brand website with makeup and skincare categories, launch banner, and elegant product-focused hero design.",
    tech: ["React", "UI/UX", "Responsive Design"],
    images: [
      "/Beauty_Blend/beauty1.png",
      "/Beauty_Blend/beauty2.png",
      "/Beauty_Blend/beauty3.png",
      "/Beauty_Blend/beauty4.png",
    ],
  },
]

export const education = [
  {
    degree: "Bachelor's in Computer Science / Software Engineering",
    institution: "Your University Name",
    year: "2020 – 2024",
  },
]
