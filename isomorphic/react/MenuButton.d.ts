import React from 'react';
import { Button, ButtonProps } from './Button';
import { AsComponentXML } from './core/ReactComponent';


declare interface MenuButtonProps extends ButtonProps {

/**
 * See {@link isc.MenuButton.setShowMenuBelow() MenuButton.setShowMenuBelow()}.
 */
setShowMenuBelow?: Function;

/**
 * See {@link isc.MenuButton.title MenuButton.title}.
 */
title?: string;

/**
 * See {@link isc.MenuButton.menu MenuButton.menu}.
 */
menu?: Menu;

/**
 * See {@link isc.MenuButton.menuButtonImage MenuButton.menuButtonImage}.
 */
menuButtonImage?: string;

/**
 * See {@link isc.MenuButton.rollOverMenuHideDelay MenuButton.rollOverMenuHideDelay}.
 */
rollOverMenuHideDelay?: number;

/**
 * See {@link isc.MenuButton.menuAnimationEffect MenuButton.menuAnimationEffect}.
 */
menuAnimationEffect?: string;

/**
 * See {@link isc.MenuButton.setShowMenuButtonImage() MenuButton.setShowMenuButtonImage()}.
 */
setShowMenuButtonImage?: Function;

/**
 * See {@link isc.MenuButton.autoDestroyMenu MenuButton.autoDestroyMenu}.
 */
autoDestroyMenu?: boolean;

/**
 * See {@link isc.MenuButton.showMenu() MenuButton.showMenu()}.
 */
showMenu?: Function;

/**
 * See {@link isc.MenuButton.showMenuButtonImage MenuButton.showMenuButtonImage}.
 */
showMenuButtonImage?: boolean;

/**
 * See {@link isc.MenuButton.icon MenuButton.icon}.
 */
icon?: string;

/**
 * See {@link isc.MenuButton.menuButtonImageUp MenuButton.menuButtonImageUp}.
 */
menuButtonImageUp?: string;

/**
 * See {@link isc.MenuButton.editProxyConstructor MenuButton.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.MenuButton.hiliteAccessKey MenuButton.hiliteAccessKey}.
 */
hiliteAccessKey?: boolean;

/**
 * See {@link isc.MenuButton.height MenuButton.height}.
 */
height?: number | string;

/**
 * See {@link isc.MenuButton.showMenuOnRollOver MenuButton.showMenuOnRollOver}.
 */
showMenuOnRollOver?: boolean;

/**
 * See {@link isc.MenuButton.showMenuBelow MenuButton.showMenuBelow}.
 */
showMenuBelow?: boolean;

/**
 * See {@link isc.MenuButton.menuAlign MenuButton.menuAlign}.
 */
menuAlign?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MenuButton wraps the SmartClient widget class
 * {@link isc.MenuButton MenuButton} for React, allowing you to import
 * MenuButton for use in React JS and JSX.
 * @class
 * @extends Button
 */
declare class MenuButton extends Button {
    props: AsComponentXML<MenuButtonProps>;
}
