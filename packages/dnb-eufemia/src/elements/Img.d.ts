import * as React from 'react';
import type { SkeletonShow } from '../components/skeleton/Skeleton';
export type ImgSpace =
  | string
  | number
  | boolean
  | {
      top?: string | number | boolean;
      right?: string | number | boolean;
      bottom?: string | number | boolean;
      left?: string | number | boolean;
    };
export type ImgTop = string | number | boolean;
export type ImgRight = string | number | boolean;
export type ImgBottom = string | number | boolean;
export type ImgLeft = string | number | boolean;
export type ImgClassName = string | any | any[];

export interface ImgProps extends React.HTMLProps<HTMLElement> {
  space?: ImgSpace;
  top?: ImgTop;
  right?: ImgRight;
  bottom?: ImgBottom;
  left?: ImgLeft;
  src: string;
  alt: string;
  skeleton?: SkeletonShow;
  className?: ImgClassName;
  class?: string;
  img_class?: string;
  element?: React.ReactNode;
  caption?: string;
  children?: React.ReactNode;
}
declare const Img: React.FC<ImgProps>;
export default Img;
