import { Settings } from 'react-slick';
import { Movie } from './movie.interface';

export interface CarouselProps {
  items: Movie[]; 
  renderItem: (item: Movie, index: number) => React.ReactNode;
  settings?: Settings;
}
