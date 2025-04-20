import React from 'react';
import { MenuItem, MenuItemProps } from './MenuItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface AdaptiveMenuItemProps extends MenuItemProps {

/**
 * See {@link isc.AdaptiveMenuItem.checkIf() AdaptiveMenuItem.checkIf()}.
 */
checkIf?: Function;

/**
 * See {@link isc.AdaptiveMenuItem.click() AdaptiveMenuItem.click()}.
 */
click?: Function;

/**
 * See {@link isc.AdaptiveMenuItem.dynamicTitle() AdaptiveMenuItem.dynamicTitle()}.
 */
dynamicTitle?: Function;

/**
 * See {@link isc.AdaptiveMenuItem.dynamicIcon() AdaptiveMenuItem.dynamicIcon()}.
 */
dynamicIcon?: Function;

/**
 * See {@link isc.AdaptiveMenuItem.getAdaptiveMenu() AdaptiveMenuItem.getAdaptiveMenu()}.
 */
getAdaptiveMenu?: Function;

/**
 * See {@link isc.AdaptiveMenuItem.enableIf() AdaptiveMenuItem.enableIf()}.
 */
enableIf?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AdaptiveMenuItem wraps the SmartClient object
 * {@link isc.AdaptiveMenuItem AdaptiveMenuItem} for React, allowing you to import
 * AdaptiveMenuItem for use in React JS and JSX.
 * @class
 */
declare class AdaptiveMenuItem extends MenuItem {
    props: AsComponentXML<AdaptiveMenuItemProps>;
}
