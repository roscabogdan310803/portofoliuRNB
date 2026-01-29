export interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

export interface InfiniteMenuProps {
  items?: MenuItem[];
  scale?: number;
}