import React from 'react';

export interface CaseStudy {
  id: string;
  title: string;
  beforeImg: string;
  afterImg: string;
  result: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}