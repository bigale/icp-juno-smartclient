import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface WindowProps extends LayoutProps {

/**
 * See {@link isc.Window.hiliteHeaderStyle Window.hiliteHeaderStyle}.
 */
hiliteHeaderStyle?: string;

/**
 * See {@link isc.Window.setHeaderStyle() Window.setHeaderStyle()}.
 */
setHeaderStyle?: Function;

/**
 * See {@link isc.Window.printBodyStyle Window.printBodyStyle}.
 */
printBodyStyle?: string;

/**
 * See {@link isc.Window.isModal Window.isModal}.
 */
isModal?: boolean;

/**
 * See {@link isc.Window.restoreButtonProperties Window.restoreButtonProperties}.
 */
restoreButtonProperties?: ImgButton;

/**
 * See {@link isc.Window.maximizeButtonProperties Window.maximizeButtonProperties}.
 */
maximizeButtonProperties?: ImgButton;

/**
 * See {@link isc.Window.headerControls Window.headerControls}.
 */
headerControls?: string[];

/**
 * See {@link isc.Window.hiliteHeaderSrc Window.hiliteHeaderSrc}.
 */
hiliteHeaderSrc?: string;

/**
 * See {@link isc.Window.headerBackgroundProperties Window.headerBackgroundProperties}.
 */
headerBackgroundProperties?: Img;

/**
 * See {@link isc.Window.setBodyStyle() Window.setBodyStyle()}.
 */
setBodyStyle?: Function;

/**
 * See {@link isc.Window.fillSpaceStyleName Window.fillSpaceStyleName}.
 */
fillSpaceStyleName?: string;

/**
 * See {@link isc.Window.headerIconProperties Window.headerIconProperties}.
 */
headerIconProperties?: Img;

/**
 * See {@link isc.Window.title Window.title}.
 */
title?: string;

/**
 * See {@link isc.Window.dismissOnEscape Window.dismissOnEscape}.
 */
dismissOnEscape?: boolean;

/**
 * See {@link isc.Window.bodyProperties Window.bodyProperties}.
 */
bodyProperties?: Canvas;

/**
 * See {@link isc.Window.showHeaderBackground Window.showHeaderBackground}.
 */
showHeaderBackground?: boolean;

/**
 * See {@link isc.Window.centerInPage() Window.centerInPage()}.
 */
centerInPage?: Function;

/**
 * See {@link isc.Window.setAutoSize() Window.setAutoSize()}.
 */
setAutoSize?: Function;

/**
 * See {@link isc.Window.removeItem() Window.removeItem()}.
 */
removeItem?: Function;

/**
 * See {@link isc.Window.setAutoCenter() Window.setAutoCenter()}.
 */
setAutoCenter?: Function;

/**
 * See {@link isc.Window.bodyConstructor Window.bodyConstructor}.
 */
bodyConstructor?: string;

/**
 * See {@link isc.Window.closeClick() Window.closeClick()}.
 */
closeClick?: Function;

/**
 * See {@link isc.Window.headerProperties Window.headerProperties}.
 */
headerProperties?: HLayout;

/**
 * See {@link isc.Window.setShowHeaderIcon() Window.setShowHeaderIcon()}.
 */
setShowHeaderIcon?: Function;

/**
 * See {@link isc.Window.hiliteBodyColor Window.hiliteBodyColor}.
 */
hiliteBodyColor?: string;

/**
 * See {@link isc.Window.footerControls Window.footerControls}.
 */
footerControls?: string[];

/**
 * See {@link isc.Window.animateMinimize Window.animateMinimize}.
 */
animateMinimize?: boolean;

/**
 * See {@link isc.Window.setShowTitle() Window.setShowTitle()}.
 */
setShowTitle?: Function;

/**
 * See {@link isc.Window.revealChild() Window.revealChild()}.
 */
revealChild?: Function;

/**
 * See {@link isc.Window.minimizeAcceleration Window.minimizeAcceleration}.
 */
minimizeAcceleration?: string;

/**
 * See {@link isc.Window.bodyColor Window.bodyColor}.
 */
bodyColor?: string;

/**
 * See {@link isc.Window.shouldDismissOnEscape() Window.shouldDismissOnEscape()}.
 */
shouldDismissOnEscape?: Function;

/**
 * See {@link isc.Window.defaultMinimizeHeight Window.defaultMinimizeHeight}.
 */
defaultMinimizeHeight?: number;

/**
 * See {@link isc.Window.canDragResize Window.canDragResize}.
 */
canDragResize?: boolean;

/**
 * See {@link isc.Window.resizerProperties Window.resizerProperties}.
 */
resizerProperties?: ImgButton;

/**
 * See {@link isc.Window.addItems() Window.addItems()}.
 */
addItems?: Function;

/**
 * See {@link isc.Window.useBackMask Window.useBackMask}.
 */
useBackMask?: boolean;

/**
 * See {@link isc.Window.close() Window.close()}.
 */
close?: Function;

/**
 * See {@link isc.Window.keepInParentRect Window.keepInParentRect}.
 */
keepInParentRect?: boolean | number[];

/**
 * See {@link isc.Window.showModalMask Window.showModalMask}.
 */
showModalMask?: boolean;

/**
 * See {@link isc.Window.dismissOnOutsideClick Window.dismissOnOutsideClick}.
 */
dismissOnOutsideClick?: boolean;

/**
 * See {@link isc.Window.setShowCloseButton() Window.setShowCloseButton()}.
 */
setShowCloseButton?: Function;

/**
 * See {@link isc.Window.showFooter Window.showFooter}.
 */
showFooter?: boolean;

/**
 * See {@link isc.Window.showMaximizeButton Window.showMaximizeButton}.
 */
showMaximizeButton?: boolean;

/**
 * See {@link isc.Window.setBodyColor() Window.setBodyColor()}.
 */
setBodyColor?: Function;

/**
 * See {@link isc.Window.canDragReposition Window.canDragReposition}.
 */
canDragReposition?: boolean;

/**
 * See {@link isc.Window.statusBarProperties Window.statusBarProperties}.
 */
statusBarProperties?: Canvas;

/**
 * See {@link isc.Window.headerLabelProperties Window.headerLabelProperties}.
 */
headerLabelProperties?: Label;

/**
 * See {@link isc.Window.minimizeTime Window.minimizeTime}.
 */
minimizeTime?: number;

/**
 * See {@link isc.Window.setShowMaximizeButton() Window.setShowMaximizeButton()}.
 */
setShowMaximizeButton?: Function;

/**
 * See {@link isc.Window.removeItems() Window.removeItems()}.
 */
removeItems?: Function;

/**
 * See {@link isc.Window.headerLabelDefaults Window.headerLabelDefaults}.
 */
headerLabelDefaults?: Object;

/**
 * See {@link isc.Window.closeButtonProperties Window.closeButtonProperties}.
 */
closeButtonProperties?: ImgButton;

/**
 * See {@link isc.Window.placement Window.placement}.
 */
placement?: string;

/**
 * See {@link isc.Window.modalMaskStyle Window.modalMaskStyle}.
 */
modalMaskStyle?: string;

/**
 * See {@link isc.Window.showStatusBar Window.showStatusBar}.
 */
showStatusBar?: boolean;

/**
 * See {@link isc.Window.showShadow Window.showShadow}.
 */
showShadow?: boolean;

/**
 * See {@link isc.Window.showTitle Window.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.Window.restore() Window.restore()}.
 */
restore?: Function;

/**
 * See {@link isc.Window.showBody Window.showBody}.
 */
showBody?: boolean;

/**
 * See {@link isc.Window.setStatus() Window.setStatus()}.
 */
setStatus?: Function;

/**
 * See {@link isc.Window.showHeader Window.showHeader}.
 */
showHeader?: boolean;

/**
 * See {@link isc.Window.modalMaskProperties Window.modalMaskProperties}.
 */
modalMaskProperties?: Canvas;

/**
 * See {@link isc.Window.src Window.src}.
 */
src?: string;

/**
 * See {@link isc.Window.maximized Window.maximized}.
 */
maximized?: boolean;

/**
 * See {@link isc.Window.addMembers() Window.addMembers()}.
 */
addMembers?: Function;

/**
 * See {@link isc.Window.flash() Window.flash()}.
 */
flash?: Function;

/**
 * See {@link isc.Window.bringToFrontOnMouseUp Window.bringToFrontOnMouseUp}.
 */
bringToFrontOnMouseUp?: boolean;

/**
 * See {@link isc.Window.showResizer Window.showResizer}.
 */
showResizer?: boolean;

/**
 * See {@link isc.Window.headerIconDefaults Window.headerIconDefaults}.
 */
headerIconDefaults?: Object;

/**
 * See {@link isc.Window.minimizeButtonProperties Window.minimizeButtonProperties}.
 */
minimizeButtonProperties?: ImgButton;

/**
 * See {@link isc.Window.bodyDefaults Window.bodyDefaults}.
 */
bodyDefaults?: Object;

/**
 * See {@link isc.Window.canFocusInHeaderButtons Window.canFocusInHeaderButtons}.
 */
canFocusInHeaderButtons?: boolean;

/**
 * See {@link isc.Window.maximize() Window.maximize()}.
 */
maximize?: Function;

/**
 * See {@link isc.Window.minimizeHeight Window.minimizeHeight}.
 */
minimizeHeight?: number;

/**
 * See {@link isc.Window.headerSrc Window.headerSrc}.
 */
headerSrc?: string;

/**
 * See {@link isc.Window.minimize() Window.minimize()}.
 */
minimize?: Function;

/**
 * See {@link isc.Window.headerStyle Window.headerStyle}.
 */
headerStyle?: string;

/**
 * See {@link isc.Window.footerProperties Window.footerProperties}.
 */
footerProperties?: HLayout;

/**
 * See {@link isc.Window.footerHeight Window.footerHeight}.
 */
footerHeight?: number;

/**
 * See {@link isc.Window.minimized Window.minimized}.
 */
minimized?: boolean;

/**
 * See {@link isc.Window.addMember() Window.addMember()}.
 */
addMember?: Function;

/**
 * See {@link isc.Window.editProxyConstructor Window.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.Window.setHiliteBodyColor() Window.setHiliteBodyColor()}.
 */
setHiliteBodyColor?: Function;

/**
 * See {@link isc.Window.showHeaderIcon Window.showHeaderIcon}.
 */
showHeaderIcon?: boolean;

/**
 * See {@link isc.Window.contentLayout Window.contentLayout}.
 */
contentLayout?: string;

/**
 * See {@link isc.Window.showCloseButton Window.showCloseButton}.
 */
showCloseButton?: boolean;

/**
 * See {@link isc.Window.resizeFrom Window.resizeFrom}.
 */
resizeFrom?: string[];

/**
 * See {@link isc.Window.setSrc() Window.setSrc()}.
 */
setSrc?: Function;

/**
 * See {@link isc.Window.modalMaskOpacity Window.modalMaskOpacity}.
 */
modalMaskOpacity?: number;

/**
 * See {@link isc.Window.showMinimizeButton Window.showMinimizeButton}.
 */
showMinimizeButton?: boolean;

/**
 * See {@link isc.Window.showEdges Window.showEdges}.
 */
showEdges?: boolean;

/**
 * See {@link isc.Window.addItem() Window.addItem()}.
 */
addItem?: Function;

/**
 * See {@link isc.Window.opacity Window.opacity}.
 */
opacity?: number;

/**
 * See {@link isc.Window.items Window.items}.
 */
items?: Canvas[] | Canvas | string;

/**
 * See {@link isc.Window.autoSize Window.autoSize}.
 */
autoSize?: boolean;

/**
 * See {@link isc.Window.printHeaderStyle Window.printHeaderStyle}.
 */
printHeaderStyle?: string;

/**
 * See {@link isc.Window.autoCenter Window.autoCenter}.
 */
autoCenter?: boolean;

/**
 * See {@link isc.Window.status Window.status}.
 */
status?: string;

/**
 * See {@link isc.Window.setShowMinimizeButton() Window.setShowMinimizeButton()}.
 */
setShowMinimizeButton?: Function;

/**
 * See {@link isc.Window.setTitle() Window.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.Window.bodyStyle Window.bodyStyle}.
 */
bodyStyle?: string;

/**
 * See {@link isc.Window.contentsType Window.contentsType}.
 */
contentsType?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Window wraps the SmartClient widget class
 * {@link isc.Window Window} for React, allowing you to import
 * Window for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class Window extends Layout {
    props: AsComponentXML<WindowProps>;
}
