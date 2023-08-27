export interface Photo {
  id: number;
  photographer: string;
  avg_color: string
  src: {
    small: string;
    medium: string;
    large2x: string;
  };
}
