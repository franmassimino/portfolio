import { lampertiLuthier } from './lamperti-luthier';
import { stayWildStudio } from './stay-wild-studio';
import { linaRestaurant } from './lina-restaurant';

export const projectsData = {
  'lamperti-luthier': lampertiLuthier,
  'stay-wild-studio': stayWildStudio,
  'lina-restaurant': linaRestaurant,
} as const;

export type ProjectSlug = keyof typeof projectsData;
export type ProjectData = typeof projectsData[ProjectSlug];

// Re-export types for convenience
export type { ProjectData as ProjectDataType, KeyFeature, Section, Metric, Impact } from './types';
