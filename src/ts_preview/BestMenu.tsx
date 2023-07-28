import React from 'react';
import { Menu } from '../model/restaurant';

/* 
type OwnProps = Menu & {
  showBestMenu(name: string): string;
}; 
*/

interface OwnProps extends Omit<Menu, 'price'> {
  showBestMenu(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({ name, category, showBestMenu }) => {
  return <div>{name}</div>;
};

export default BestMenu;
