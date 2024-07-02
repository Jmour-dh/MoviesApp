import { Settings } from 'react-slick';


export interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  settings?: Settings;
}