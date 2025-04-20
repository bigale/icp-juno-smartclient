import React from 'react';
import { HLayout, HLayoutProps } from './HLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface NavigationBarProps extends HLayoutProps {

/**
 * See {@link isc.NavigationBar.setShowRightButton() NavigationBar.setShowRightButton()}.
 */
setShowRightButton?: Function;

/**
 * See {@link isc.NavigationBar.rightButtonTitle NavigationBar.rightButtonTitle}.
 */
rightButtonTitle?: string;

/**
 * See {@link isc.NavigationBar.animateStateChanges NavigationBar.animateStateChanges}.
 */
animateStateChanges?: boolean;

/**
 * See {@link isc.NavigationBar.navigationClick() NavigationBar.navigationClick()}.
 */
navigationClick?: Function;

/**
 * See {@link isc.NavigationBar.showLeftButton NavigationBar.showLeftButton}.
 */
showLeftButton?: boolean;

/**
 * See {@link isc.NavigationBar.setAlwaysShowLeftButtonTitle() NavigationBar.setAlwaysShowLeftButtonTitle()}.
 */
setAlwaysShowLeftButtonTitle?: Function;

/**
 * See {@link isc.NavigationBar.upClick() NavigationBar.upClick()}.
 */
upClick?: Function;

/**
 * See {@link isc.NavigationBar.titleLabelProperties NavigationBar.titleLabelProperties}.
 */
titleLabelProperties?: Label;

/**
 * See {@link isc.NavigationBar.setCustomNavControl() NavigationBar.setCustomNavControl()}.
 */
setCustomNavControl?: Function;

/**
 * See {@link isc.NavigationBar.downClick() NavigationBar.downClick()}.
 */
downClick?: Function;

/**
 * See {@link isc.NavigationBar.iconBaseStyle NavigationBar.iconBaseStyle}.
 */
iconBaseStyle?: string;

/**
 * See {@link isc.NavigationBar.rightButtonIcon NavigationBar.rightButtonIcon}.
 */
rightButtonIcon?: string;

/**
 * See {@link isc.NavigationBar.setShortLeftButtonTitle() NavigationBar.setShortLeftButtonTitle()}.
 */
setShortLeftButtonTitle?: Function;

/**
 * See {@link isc.NavigationBar.setViewState() NavigationBar.setViewState()}.
 */
setViewState?: Function;

/**
 * See {@link isc.NavigationBar.setShowLeftButton() NavigationBar.setShowLeftButton()}.
 */
setShowLeftButton?: Function;

/**
 * See {@link isc.NavigationBar.setLeftButtonTitle() NavigationBar.setLeftButtonTitle()}.
 */
setLeftButtonTitle?: Function;

/**
 * See {@link isc.NavigationBar.rightButtonProperties NavigationBar.rightButtonProperties}.
 */
rightButtonProperties?: NavigationButton;

/**
 * See {@link isc.NavigationBar.iconSize NavigationBar.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.NavigationBar.shortLeftButtonTitle NavigationBar.shortLeftButtonTitle}.
 */
shortLeftButtonTitle?: string;

/**
 * See {@link isc.NavigationBar.setTitle() NavigationBar.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.NavigationBar.leftButtonTitle NavigationBar.leftButtonTitle}.
 */
leftButtonTitle?: string;

/**
 * See {@link isc.NavigationBar.alwaysShowLeftButtonTitle NavigationBar.alwaysShowLeftButtonTitle}.
 */
alwaysShowLeftButtonTitle?: boolean;

/**
 * See {@link isc.NavigationBar.leftButtonIcon NavigationBar.leftButtonIcon}.
 */
leftButtonIcon?: string;

/**
 * See {@link isc.NavigationBar.leftButtonProperties NavigationBar.leftButtonProperties}.
 */
leftButtonProperties?: NavigationButton;

/**
 * See {@link isc.NavigationBar.setRightButtonIcon() NavigationBar.setRightButtonIcon()}.
 */
setRightButtonIcon?: Function;

/**
 * See {@link isc.NavigationBar.showRightButton NavigationBar.showRightButton}.
 */
showRightButton?: boolean;

/**
 * See {@link isc.NavigationBar.miniNavControlProperties NavigationBar.miniNavControlProperties}.
 */
miniNavControlProperties?: MiniNavControl;

/**
 * See {@link isc.NavigationBar.customNavControl NavigationBar.customNavControl}.
 */
customNavControl?: Canvas;

/**
 * See {@link isc.NavigationBar.setRightButtonTitle() NavigationBar.setRightButtonTitle()}.
 */
setRightButtonTitle?: Function;

/**
 * See {@link isc.NavigationBar.setLeftButtonIcon() NavigationBar.setLeftButtonIcon()}.
 */
setLeftButtonIcon?: Function;

/**
 * See {@link isc.NavigationBar.title NavigationBar.title}.
 */
title?: string;

/**
 * See {@link isc.NavigationBar.miniNavAlign NavigationBar.miniNavAlign}.
 */
miniNavAlign?: string;

/**
 * See {@link isc.NavigationBar.showMiniNavControl NavigationBar.showMiniNavControl}.
 */
showMiniNavControl?: boolean;

/**
 * See {@link isc.NavigationBar.controls NavigationBar.controls}.
 */
controls?: string[] | Canvas[];

/**
 * See {@link isc.NavigationBar.maxCenterOffset NavigationBar.maxCenterOffset}.
 */
maxCenterOffset?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NavigationBar wraps the SmartClient widget class
 * {@link isc.NavigationBar NavigationBar} for React, allowing you to import
 * NavigationBar for use in React JS and JSX.
 * @class
 * @extends HLayout
 */
declare class NavigationBar extends HLayout {
    props: AsComponentXML<NavigationBarProps>;
}
