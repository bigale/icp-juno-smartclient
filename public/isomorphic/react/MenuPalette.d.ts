import React from 'react';
import { Menu, MenuProps } from './Menu';
import { AsComponentXML } from './core/ReactComponent';


declare interface MenuPaletteProps extends MenuProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MenuPalette wraps the SmartClient widget class
 * {@link isc.MenuPalette MenuPalette} for React, allowing you to import
 * MenuPalette for use in React JS and JSX.
 * @class
 * @extends Menu
 */
declare class MenuPalette extends Menu {
    props: AsComponentXML<MenuPaletteProps>;
}
