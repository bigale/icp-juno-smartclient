import React from 'react';
import { Menu, MenuProps } from './Menu';
import { AsComponentXML } from './core/ReactComponent';


declare interface SelectionTreeMenuProps extends MenuProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SelectionTreeMenu wraps the SmartClient widget class
 * {@link isc.SelectionTreeMenu SelectionTreeMenu} for React, allowing you to import
 * SelectionTreeMenu for use in React JS and JSX.
 * @class
 * @extends Menu
 */
declare class SelectionTreeMenu extends Menu {
    props: AsComponentXML<SelectionTreeMenuProps>;
}
