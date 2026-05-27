export interface Skill {
  name: string;
  cat: 'framework' | 'language' | 'tool';
  icon: string;
  level: number;
  color: [string, string];
  invert?: boolean;
}

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  //EMJ CEK BIASA AJA
  image?: string;
  bg: string;
  demo: string;
  github: string;
}

export interface EducationItem {
  period: string;
  school: string;
  major: string;
  desc: string;
  icon: string;
}

export interface Competency {
  name: string;
  pct: number;
  color: [string, string];
}

export interface Stat {
  num: string;
  suffix: string;
  label: string;
}
