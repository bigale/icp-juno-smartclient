import React from 'react';
import { Toolbar, ToolbarProps } from './Toolbar';
import { AsComponentXML } from './core/ReactComponent';


declare interface MenuBarProps extends ToolbarProps {

/**
 * See {@link isc.MenuBar.menus MenuBar.menus}.
 */
menus?: Menu[];

/**
 * See {@link isc.MenuBar.removeMenus() MenuBar.removeMenus()}.
 */
removeMenus?: Function;

/**
 * See {@link isc.MenuBar.showMenu() MenuBar.showMenu()}.
 */
showMenu?: Function;

/**
 * See {@link isc.MenuBar.addMenus() MenuBar.addMenus()}.
 */
addMenus?: Function;

/**
 * See {@link isc.MenuBar.setMenus() MenuBar.setMenus()}.
 */
setMenus?: Function;

/**
 * See {@link isc.MenuBar.tabIndex MenuBar.tabIndex}.
 */
tabIndex?: number;

/**
 * See {@link isc.MenuBar.editProxyConstructor MenuBar.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.MenuBar.setButtons() MenuBar.setButtons()}.
 */
setButtons?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MenuBar wraps the SmartClient widget class
 * {@link isc.MenuBar MenuBar} for React, allowing you to import
 * MenuBar for use in React JS and JSX.
 * @class
 * @extends Toolbar
 */
declare class MenuBar extends Toolbar {
    props: AsComponentXML<MenuBarProps>;
}
