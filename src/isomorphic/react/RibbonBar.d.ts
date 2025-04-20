import React from 'react';
import { ToolStrip, ToolStripProps } from './ToolStrip';
import { AsComponentXML } from './core/ReactComponent';


declare interface RibbonBarProps extends ToolStripProps {

/**
 * See {@link isc.RibbonBar.addGroup() RibbonBar.addGroup()}.
 */
addGroup?: Function;

/**
 * See {@link isc.RibbonBar.groupTitleOrientation RibbonBar.groupTitleOrientation}.
 */
groupTitleOrientation?: string;

/**
 * See {@link isc.RibbonBar.showGroupTitle RibbonBar.showGroupTitle}.
 */
showGroupTitle?: boolean;

/**
 * See {@link isc.RibbonBar.groupTitleAlign RibbonBar.groupTitleAlign}.
 */
groupTitleAlign?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RibbonBar wraps the SmartClient widget class
 * {@link isc.RibbonBar RibbonBar} for React, allowing you to import
 * RibbonBar for use in React JS and JSX.
 * @class
 * @extends ToolStrip
 */
declare class RibbonBar extends ToolStrip {
    props: AsComponentXML<RibbonBarProps>;
}
