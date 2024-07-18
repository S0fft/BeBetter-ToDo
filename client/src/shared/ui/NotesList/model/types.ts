import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

export type OutletContext = [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  ReactNode,
  RefObject<HTMLUListElement>,
];
