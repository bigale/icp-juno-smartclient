import React from 'react';
import { Label, LabelProps } from './Label';
import { AsComponentXML } from './core/ReactComponent';


declare interface SectionHeaderProps extends LabelProps {

/**
 * See {@link isc.SectionHeader.getSectionStack() SectionHeader.getSectionStack()}.
 */
getSectionStack?: Function;

/**
 * See {@link isc.SectionHeader.baseStyle SectionHeader.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.SectionHeader.showClippedTitleOnHover SectionHeader.showClippedTitleOnHover}.
 */
showClippedTitleOnHover?: boolean;

/**
 * See {@link isc.SectionHeader.titleClipped() SectionHeader.titleClipped()}.
 */
titleClipped?: Function;

/**
 * See {@link isc.SectionHeader.noDoubleClicks SectionHeader.noDoubleClicks}.
 */
noDoubleClicks?: boolean;

/**
 * See {@link isc.SectionHeader.definingProperty SectionHeader.definingProperty}.
 */
definingProperty?: string;

/**
 * See {@link isc.SectionHeader.titleHover() SectionHeader.titleHover()}.
 */
titleHover?: Function;

/**
 * See {@link isc.SectionHeader.icon SectionHeader.icon}.
 */
icon?: string;

/**
 * See {@link isc.SectionHeader.titleHoverHTML() SectionHeader.titleHoverHTML()}.
 */
titleHoverHTML?: Function;

/**
 * See {@link isc.SectionHeader.title SectionHeader.title}.
 */
title?: string;

/**
 * See {@link isc.SectionHeader.clipTitle SectionHeader.clipTitle}.
 */
clipTitle?: boolean;

/**
 * See {@link isc.SectionHeader.controls SectionHeader.controls}.
 */
controls?: Canvas[];

/**
 * See {@link isc.SectionHeader.controlsLayoutProperties SectionHeader.controlsLayoutProperties}.
 */
controlsLayoutProperties?: Layout;

/**
 * See {@link isc.SectionHeader.editProxyConstructor SectionHeader.editProxyConstructor}.
 */
editProxyConstructor?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SectionHeader wraps the SmartClient widget class
 * {@link isc.SectionHeader SectionHeader} for React, allowing you to import
 * SectionHeader for use in React JS and JSX.
 * @class
 * @extends Label
 */
declare class SectionHeader extends Label {
    props: AsComponentXML<SectionHeaderProps>;
}
