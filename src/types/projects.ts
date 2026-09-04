import type en from "@/locales/en.json";

/** مفاتيح نصوص شبكة المشاريع — مقيّدة بملف الترجمة */
export type ProjectsGridKey = keyof typeof en.projectsGrid;

export interface Project {
  id: string;
  titleKey: ProjectsGridKey;
  categoryKey: ProjectsGridKey;
  image: string;
}

export interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  isAr: boolean;
  onClick: () => void;
}
