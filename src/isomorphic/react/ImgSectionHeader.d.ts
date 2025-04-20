import React from 'react';
import { HLayout, HLayoutProps } from './HLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface ImgSectionHeaderProps extends HLayoutProps {

/**
 * See {@link isc.ImgSectionHeader.titleHover() ImgSectionHeader.titleHover()}.
 */
titleHover?: Function;

/**
 * See {@link isc.ImgSectionHeader.clipTitle ImgSectionHeader.clipTitle}.
 */
clipTitle?: boolean;

/**
 * See {@link isc.ImgSectionHeader.icon ImgSectionHeader.icon}.
 */
icon?: string;

/**
 * See {@link isc.ImgSectionHeader.backgroundProperties ImgSectionHeader.backgroundProperties}.
 */
backgroundProperties?: StretchImg;

/**
 * See {@link isc.ImgSectionHeader.iconOrientation ImgSectionHeader.iconOrientation}.
 */
iconOrientation?: string;

/**
 * See {@link isc.ImgSectionHeader.setIcon() ImgSectionHeader.setIcon()}.
 */
setIcon?: Function;

/**
 * See {@link isc.ImgSectionHeader.showClippedTitleOnHover ImgSectionHeader.showClippedTitleOnHover}.
 */
showClippedTitleOnHover?: boolean;

/**
 * See {@link isc.ImgSectionHeader.setIconOrientation() ImgSectionHeader.setIconOrientation()}.
 */
setIconOrientation?: Function;

/**
 * See {@link isc.ImgSectionHeader.setPrompt() ImgSectionHeader.setPrompt()}.
 */
setPrompt?: Function;

/**
 * See {@link isc.ImgSectionHeader.prompt ImgSectionHeader.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.ImgSectionHeader.controlsLayoutProperties ImgSectionHeader.controlsLayoutProperties}.
 */
controlsLayoutProperties?: Layout;

/**
 * See {@link isc.ImgSectionHeader.iconWidth ImgSectionHeader.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.ImgSectionHeader.getSectionStack() ImgSectionHeader.getSectionStack()}.
 */
getSectionStack?: Function;

/**
 * See {@link isc.ImgSectionHeader.controls ImgSectionHeader.controls}.
 */
controls?: Canvas[];

/**
 * See {@link isc.ImgSectionHeader.noDoubleClicks ImgSectionHeader.noDoubleClicks}.
 */
noDoubleClicks?: boolean;

/**
 * See {@link isc.ImgSectionHeader.iconSize ImgSectionHeader.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.ImgSectionHeader.titleHoverHTML() ImgSectionHeader.titleHoverHTML()}.
 */
titleHoverHTML?: Function;

/**
 * See {@link isc.ImgSectionHeader.iconAlign ImgSectionHeader.iconAlign}.
 */
iconAlign?: string;

/**
 * See {@link isc.ImgSectionHeader.iconHeight ImgSectionHeader.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.ImgSectionHeader.titleClipped() ImgSectionHeader.titleClipped()}.
 */
titleClipped?: Function;

/**
 * See {@link isc.ImgSectionHeader.title ImgSectionHeader.title}.
 */
title?: string;

/**
 * See {@link isc.ImgSectionHeader.setAlign() ImgSectionHeader.setAlign()}.
 */
setAlign?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ImgSectionHeader wraps the SmartClient widget class
 * {@link isc.ImgSectionHeader ImgSectionHeader} for React, allowing you to import
 * ImgSectionHeader for use in React JS and JSX.
 * @class
 * @extends HLayout
 */
declare class ImgSectionHeader extends HLayout {
    props: AsComponentXML<ImgSectionHeaderProps>;
}
