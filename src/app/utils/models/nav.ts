export interface CategoryCreation {
  link: string;
  displayName: string;
  name: string;
  color: string;
}

export interface Category extends CategoryCreation {
  id: string;
}

export type Categories = Array<Category>

export interface View {
  link: string;
  displayName: string;
}

export type Views = Array<View>;

export const VIEWS: Views = [
  {
    link: 'today',
    displayName: 'Today'
  },
  {
    link: 'scheduled',
    displayName: 'Scheduled'
  },
  {
    link: 'unscheduled',
    displayName: 'Unscheduled'
  },
  {
    link: 'all',
    displayName: 'All'
  }
];
