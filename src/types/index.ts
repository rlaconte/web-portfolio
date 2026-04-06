export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: string;
}

export interface Skill {
  name: string;
  category: "Languages" | "Frameworks" | "Tools" | "Databases" | "AI & Workflow";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}
