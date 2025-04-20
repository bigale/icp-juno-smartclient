import React from 'react';
import { MenuButton, MenuButtonProps } from './MenuButton';
import { AsComponentXML } from './core/ReactComponent';


declare interface IMenuButtonProps extends MenuButtonProps {

/**
 * See {@link isc.IMenuButton.setShowMenuBelow() IMenuButton.setShowMenuBelow()}.
 */
setShowMenuBelow?: Function;

/**
 * See {@link isc.IMenuButton.autoDestroyMenu IMenuButton.autoDestroyMenu}.
 */
autoDestroyMenu?: boolean;

/**
 * See {@link isc.IMenuButton.setShowMenuButtonImage() IMenuButton.setShowMenuButtonImage()}.
 */
setShowMenuButtonImage?: Function;

/**
 * See {@link isc.IMenuButton.menuAnimationEffect IMenuButton.menuAnimationEffect}.
 */
menuAnimationEffect?: string;

/**
 * See {@link isc.IMenuButton.hiliteAccessKey IMenuButton.hiliteAccessKey}.
 */
hiliteAccessKey?: boolean;

/**
 * See {@link isc.IMenuButton.showMenuBelow IMenuButton.showMenuBelow}.
 */
showMenuBelow?: boolean;

/**
 * See {@link isc.IMenuButton.height IMenuButton.height}.
 */
height?: number | string;

/**
 * See {@link isc.IMenuButton.menu IMenuButton.menu}.
 */
menu?: Menu;

/**
 * See {@link isc.IMenuButton.title IMenuButton.title}.
 */
title?: string;

/**
 * See {@link isc.IMenuButton.menuButtonImage IMenuButton.menuButtonImage}.
 */
menuButtonImage?: string;

/**
 * See {@link isc.IMenuButton.showMenuButtonImage IMenuButton.showMenuButtonImage}.
 */
showMenuButtonImage?: boolean;

/**
 * See {@link isc.IMenuButton.menuAlign IMenuButton.menuAlign}.
 */
menuAlign?: string;

/**
 * See {@link isc.IMenuButton.menuButtonImageUp IMenuButton.menuButtonImageUp}.
 */
menuButtonImageUp?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * IMenuButton wraps the SmartClient widget class
 * {@link isc.IMenuButton IMenuButton} for React, allowing you to import
 * IMenuButton for use in React JS and JSX.
 * @class
 * @extends MenuButton
 */
declare class IMenuButton extends MenuButton {
    props: AsComponentXML<IMenuButtonProps>;
}
