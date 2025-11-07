export interface KeyFeature {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon?: string;
}

// Structured content for rich sections
export interface StructuredContent {
  intro?: string;
  introEs?: string;
  bullets?: string[];
  bulletsEs?: string[];
  highlight?: string;
  highlightEs?: string;
  closing?: string;
  closingEs?: string;
}

// Section with standardized structured content
export interface Section {
  title: string;
  titleEs: string;
  structuredContent: StructuredContent;
}

export interface Metric {
  label: string;
  labelEs: string;
  value: string;
  valueEs: string;
  insight: string;
  insightEs: string;
  icon: string;
}

export interface Impact {
  title: string;
  titleEs: string;
  content: string;
  contentEs: string;
}

export interface ProjectData {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  coverImage: string;
  completedDate: string;
  duration: string;
  techStack: string[];
  keyFeatures: KeyFeature[];
  sections: Section[];
  metrics?: Metric[];
  impact?: Impact;
  keyTakeaways?: string[];
  keyTakeawaysEs?: string[];
}
