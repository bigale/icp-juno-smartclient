import React from 'react';
import { Button, ButtonProps } from './Button';
import { AsComponentXML } from './core/ReactComponent';


declare interface RibbonButtonProps extends ButtonProps {

/**
 * See {@link isc.RibbonButton.showTitle RibbonButton.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.RibbonButton.menuAlign RibbonButton.menuAlign}.
 */
menuAlign?: string;

/**
 * See {@link isc.RibbonButton.menuIconHeight RibbonButton.menuIconHeight}.
 */
menuIconHeight?: number;

/**
 * See {@link isc.RibbonButton.iconOrientation RibbonButton.iconOrientation}.
 */
iconOrientation?: string;

/**
 * See {@link isc.RibbonButton.icon RibbonButton.icon}.
 */
icon?: string;

/**
 * See {@link isc.RibbonButton.getIcon() RibbonButton.getIcon()}.
 */
getIcon?: Function;

/**
 * See {@link isc.RibbonButton.baseStyle RibbonButton.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.RibbonButton.menu RibbonButton.menu}.
 */
menu?: Menu;

/**
 * See {@link isc.RibbonButton.showMenuIconDown RibbonButton.showMenuIconDown}.
 */
showMenuIconDown?: boolean;

/**
 * See {@link isc.RibbonButton.iconStyle RibbonButton.iconStyle}.
 */
iconStyle?: string;

/**
 * See {@link isc.RibbonButton.rowSpan RibbonButton.rowSpan}.
 */
rowSpan?: number;

/**
 * See {@link isc.RibbonButton.largeIconSize RibbonButton.largeIconSize}.
 */
largeIconSize?: number;

/**
 * See {@link isc.RibbonButton.setMenu() RibbonButton.setMenu()}.
 */
setMenu?: Function;

/**
 * See {@link isc.RibbonButton.menuIconSrc RibbonButton.menuIconSrc}.
 */
menuIconSrc?: string;

/**
 * See {@link isc.RibbonButton.iconClick() RibbonButton.iconClick()}.
 */
iconClick?: Function;

/**
 * See {@link isc.RibbonButton.setIcon() RibbonButton.setIcon()}.
 */
setIcon?: Function;

/**
 * See {@link isc.RibbonButton.showMenu() RibbonButton.showMenu()}.
 */
showMenu?: Function;

/**
 * See {@link isc.RibbonButton.menuIconWidth RibbonButton.menuIconWidth}.
 */
menuIconWidth?: number;

/**
 * See {@link isc.RibbonButton.showButtonTitle RibbonButton.showButtonTitle}.
 */
showButtonTitle?: boolean;

/**
 * See {@link isc.RibbonButton.menuAnimationEffect RibbonButton.menuAnimationEffect}.
 */
menuAnimationEffect?: string;

/**
 * See {@link isc.RibbonButton.vertical RibbonButton.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.RibbonButton.showMenuIcon RibbonButton.showMenuIcon}.
 */
showMenuIcon?: boolean;

/**
 * See {@link isc.RibbonButton.setLargeIcon() RibbonButton.setLargeIcon()}.
 */
setLargeIcon?: Function;

/**
 * See {@link isc.RibbonButton.align RibbonButton.align}.
 */
align?: string;

/**
 * See {@link isc.RibbonButton.orientation RibbonButton.orientation}.
 */
orientation?: string;

/**
 * See {@link isc.RibbonButton.showIcon RibbonButton.showIcon}.
 */
showIcon?: boolean;

/**
 * See {@link isc.RibbonButton.menuIconClick() RibbonButton.menuIconClick()}.
 */
menuIconClick?: Function;

/**
 * See {@link isc.RibbonButton.iconAlign RibbonButton.iconAlign}.
 */
iconAlign?: string;

/**
 * See {@link isc.RibbonButton.editProxyConstructor RibbonButton.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.RibbonButton.showMenuIconDisabled RibbonButton.showMenuIconDisabled}.
 */
showMenuIconDisabled?: boolean;

/**
 * See {@link isc.RibbonButton.largeIcon RibbonButton.largeIcon}.
 */
largeIcon?: string;

/**
 * See {@link isc.RibbonButton.valign RibbonButton.valign}.
 */
valign?: string;

/**
 * See {@link isc.RibbonButton.click() RibbonButton.click()}.
 */
click?: Function;

/**
 * See {@link isc.RibbonButton.menuIconStyle RibbonButton.menuIconStyle}.
 */
menuIconStyle?: string;

/**
 * See {@link isc.RibbonButton.showMenuBelow RibbonButton.showMenuBelow}.
 */
showMenuBelow?: boolean;

/**
 * See {@link isc.RibbonButton.showMenuOnClick RibbonButton.showMenuOnClick}.
 */
showMenuOnClick?: boolean;

/**
 * See {@link isc.RibbonButton.showMenuIconOver RibbonButton.showMenuIconOver}.
 */
showMenuIconOver?: boolean;

/**
 * See {@link isc.RibbonButton.iconSize RibbonButton.iconSize}.
 */
iconSize?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RibbonButton wraps the SmartClient widget class
 * {@link isc.RibbonButton RibbonButton} for React, allowing you to import
 * RibbonButton for use in React JS and JSX.
 * @class
 * @extends Button
 */
declare class RibbonButton extends Button {
    props: AsComponentXML<RibbonButtonProps>;
}
