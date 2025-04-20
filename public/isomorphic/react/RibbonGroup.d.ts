import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface RibbonGroupProps extends VLayoutProps {

/**
 * See {@link isc.RibbonGroup.styleName RibbonGroup.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.RibbonGroup.labelProperties RibbonGroup.labelProperties}.
 */
labelProperties?: Label;

/**
 * See {@link isc.RibbonGroup.setTitleOrientation() RibbonGroup.setTitleOrientation()}.
 */
setTitleOrientation?: Function;

/**
 * See {@link isc.RibbonGroup.titleHeight RibbonGroup.titleHeight}.
 */
titleHeight?: number;

/**
 * See {@link isc.RibbonGroup.numRows RibbonGroup.numRows}.
 */
numRows?: number;

/**
 * See {@link isc.RibbonGroup.titleAlign RibbonGroup.titleAlign}.
 */
titleAlign?: string;

/**
 * See {@link isc.RibbonGroup.rowHeight RibbonGroup.rowHeight}.
 */
rowHeight?: number;

/**
 * See {@link isc.RibbonGroup.titleOrientation RibbonGroup.titleOrientation}.
 */
titleOrientation?: string;

/**
 * See {@link isc.RibbonGroup.autoSizeToTitle RibbonGroup.autoSizeToTitle}.
 */
autoSizeToTitle?: boolean;

/**
 * See {@link isc.RibbonGroup.setTitleStyle() RibbonGroup.setTitleStyle()}.
 */
setTitleStyle?: Function;

/**
 * See {@link isc.RibbonGroup.labelConstructor RibbonGroup.labelConstructor}.
 */
labelConstructor?: string;

/**
 * See {@link isc.RibbonGroup.reflowControls() RibbonGroup.reflowControls()}.
 */
reflowControls?: Function;

/**
 * See {@link isc.RibbonGroup.getControlColumn() RibbonGroup.getControlColumn()}.
 */
getControlColumn?: Function;

/**
 * See {@link isc.RibbonGroup.controls RibbonGroup.controls}.
 */
controls?: Canvas[];

/**
 * See {@link isc.RibbonGroup.titleStyle RibbonGroup.titleStyle}.
 */
titleStyle?: string;

/**
 * See {@link isc.RibbonGroup.labelLayoutProperties RibbonGroup.labelLayoutProperties}.
 */
labelLayoutProperties?: HLayout;

/**
 * See {@link isc.RibbonGroup.removeControl() RibbonGroup.removeControl()}.
 */
removeControl?: Function;

/**
 * See {@link isc.RibbonGroup.setTitle() RibbonGroup.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.RibbonGroup.setShowTitle() RibbonGroup.setShowTitle()}.
 */
setShowTitle?: Function;

/**
 * See {@link isc.RibbonGroup.setTitleAlign() RibbonGroup.setTitleAlign()}.
 */
setTitleAlign?: Function;

/**
 * See {@link isc.RibbonGroup.bodyProperties RibbonGroup.bodyProperties}.
 */
bodyProperties?: HLayout;

/**
 * See {@link isc.RibbonGroup.bodyConstructor RibbonGroup.bodyConstructor}.
 */
bodyConstructor?: string;

/**
 * See {@link isc.RibbonGroup.titleProperties RibbonGroup.titleProperties}.
 */
titleProperties?: Label;

/**
 * See {@link isc.RibbonGroup.editProxyConstructor RibbonGroup.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.RibbonGroup.title RibbonGroup.title}.
 */
title?: string;

/**
 * See {@link isc.RibbonGroup.columnLayoutProperties RibbonGroup.columnLayoutProperties}.
 */
columnLayoutProperties?: VLayout;

/**
 * See {@link isc.RibbonGroup.addControls() RibbonGroup.addControls()}.
 */
addControls?: Function;

/**
 * See {@link isc.RibbonGroup.newControlDefaultsProperties RibbonGroup.newControlDefaultsProperties}.
 */
newControlDefaultsProperties?: RibbonButton;

/**
 * See {@link isc.RibbonGroup.addControl() RibbonGroup.addControl()}.
 */
addControl?: Function;

/**
 * See {@link isc.RibbonGroup.setTitleHeight() RibbonGroup.setTitleHeight()}.
 */
setTitleHeight?: Function;

/**
 * See {@link isc.RibbonGroup.setControls() RibbonGroup.setControls()}.
 */
setControls?: Function;

/**
 * See {@link isc.RibbonGroup.createControl() RibbonGroup.createControl()}.
 */
createControl?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RibbonGroup wraps the SmartClient widget class
 * {@link isc.RibbonGroup RibbonGroup} for React, allowing you to import
 * RibbonGroup for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class RibbonGroup extends VLayout {
    props: AsComponentXML<RibbonGroupProps>;
}
