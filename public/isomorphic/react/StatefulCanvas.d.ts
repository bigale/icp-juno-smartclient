import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface StatefulCanvasProps extends CanvasProps {

/**
 * See {@link isc.StatefulCanvas.iconHeight StatefulCanvas.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.StatefulCanvas.getStateSuffix() StatefulCanvas.getStateSuffix()}.
 */
getStateSuffix?: Function;

/**
 * See {@link isc.StatefulCanvas.state StatefulCanvas.state}.
 */
state?: string;

/**
 * See {@link isc.StatefulCanvas.showMenuOnClick StatefulCanvas.showMenuOnClick}.
 */
showMenuOnClick?: boolean;

/**
 * See {@link isc.StatefulCanvas.setBaseStyle() StatefulCanvas.setBaseStyle()}.
 */
setBaseStyle?: Function;

/**
 * See {@link isc.StatefulCanvas.setIgnoreRTL() StatefulCanvas.setIgnoreRTL()}.
 */
setIgnoreRTL?: Function;

/**
 * See {@link isc.StatefulCanvas.showDisabledIcon StatefulCanvas.showDisabledIcon}.
 */
showDisabledIcon?: boolean;

/**
 * See {@link isc.StatefulCanvas.getAriaStateDefaults() StatefulCanvas.getAriaStateDefaults()}.
 */
getAriaStateDefaults?: Function;

/**
 * See {@link isc.StatefulCanvas.radioGroup StatefulCanvas.radioGroup}.
 */
radioGroup?: string;

/**
 * See {@link isc.StatefulCanvas.getActionType() StatefulCanvas.getActionType()}.
 */
getActionType?: Function;

/**
 * See {@link isc.StatefulCanvas.iconStyle StatefulCanvas.iconStyle}.
 */
iconStyle?: string;

/**
 * See {@link isc.StatefulCanvas.showFocusedAsOver StatefulCanvas.showFocusedAsOver}.
 */
showFocusedAsOver?: boolean;

/**
 * See {@link isc.StatefulCanvas.setTitle() StatefulCanvas.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.StatefulCanvas.removeFromRadioGroup() StatefulCanvas.removeFromRadioGroup()}.
 */
removeFromRadioGroup?: Function;

/**
 * See {@link isc.StatefulCanvas.showRollOver StatefulCanvas.showRollOver}.
 */
showRollOver?: boolean;

/**
 * See {@link isc.StatefulCanvas.align StatefulCanvas.align}.
 */
align?: string;

/**
 * See {@link isc.StatefulCanvas.select() StatefulCanvas.select()}.
 */
select?: Function;

/**
 * See {@link isc.StatefulCanvas.overCanvasProperties StatefulCanvas.overCanvasProperties}.
 */
overCanvasProperties?: Canvas;

/**
 * See {@link isc.StatefulCanvas.isSelected() StatefulCanvas.isSelected()}.
 */
isSelected?: Function;

/**
 * See {@link isc.StatefulCanvas.setAutoFit() StatefulCanvas.setAutoFit()}.
 */
setAutoFit?: Function;

/**
 * See {@link isc.StatefulCanvas.getTitle() StatefulCanvas.getTitle()}.
 */
getTitle?: Function;

/**
 * See {@link isc.StatefulCanvas.getAriaLabel() StatefulCanvas.getAriaLabel()}.
 */
getAriaLabel?: Function;

/**
 * See {@link isc.StatefulCanvas.showDisabled StatefulCanvas.showDisabled}.
 */
showDisabled?: boolean;

/**
 * See {@link isc.StatefulCanvas.setIcon() StatefulCanvas.setIcon()}.
 */
setIcon?: Function;

/**
 * See {@link isc.StatefulCanvas.redrawOnStateChange StatefulCanvas.redrawOnStateChange}.
 */
redrawOnStateChange?: boolean;

/**
 * See {@link isc.StatefulCanvas.showFocusedIcon StatefulCanvas.showFocusedIcon}.
 */
showFocusedIcon?: boolean;

/**
 * See {@link isc.StatefulCanvas.getState() StatefulCanvas.getState()}.
 */
getState?: Function;

/**
 * See {@link isc.StatefulCanvas.showFocus StatefulCanvas.showFocus}.
 */
showFocus?: boolean;

/**
 * See {@link isc.StatefulCanvas.deselect() StatefulCanvas.deselect()}.
 */
deselect?: Function;

/**
 * See {@link isc.StatefulCanvas.showFocused StatefulCanvas.showFocused}.
 */
showFocused?: boolean;

/**
 * See {@link isc.StatefulCanvas.iconSize StatefulCanvas.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.StatefulCanvas.setDisabled() StatefulCanvas.setDisabled()}.
 */
setDisabled?: Function;

/**
 * See {@link isc.StatefulCanvas.showSelectedIcon StatefulCanvas.showSelectedIcon}.
 */
showSelectedIcon?: boolean;

/**
 * See {@link isc.StatefulCanvas.setSelected() StatefulCanvas.setSelected()}.
 */
setSelected?: Function;

/**
 * See {@link isc.StatefulCanvas.icon StatefulCanvas.icon}.
 */
icon?: string;

/**
 * See {@link isc.StatefulCanvas.overCanvasConstructor StatefulCanvas.overCanvasConstructor}.
 */
overCanvasConstructor?: string;

/**
 * See {@link isc.StatefulCanvas.iconWidth StatefulCanvas.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.StatefulCanvas.showRTLIcon StatefulCanvas.showRTLIcon}.
 */
showRTLIcon?: boolean;

/**
 * See {@link isc.StatefulCanvas.showRollOverIcon StatefulCanvas.showRollOverIcon}.
 */
showRollOverIcon?: boolean;

/**
 * See {@link isc.StatefulCanvas.actionType StatefulCanvas.actionType}.
 */
actionType?: string;

/**
 * See {@link isc.StatefulCanvas.height StatefulCanvas.height}.
 */
height?: number | string;

/**
 * See {@link isc.StatefulCanvas.selected StatefulCanvas.selected}.
 */
selected?: boolean;

/**
 * See {@link isc.StatefulCanvas.autoFit StatefulCanvas.autoFit}.
 */
autoFit?: boolean;

/**
 * See {@link isc.StatefulCanvas.setActionType() StatefulCanvas.setActionType()}.
 */
setActionType?: Function;

/**
 * See {@link isc.StatefulCanvas.ariaLabel StatefulCanvas.ariaLabel}.
 */
ariaLabel?: string;

/**
 * See {@link isc.StatefulCanvas.showOverCanvas StatefulCanvas.showOverCanvas}.
 */
showOverCanvas?: boolean;

/**
 * See {@link isc.StatefulCanvas.vIconStyle StatefulCanvas.vIconStyle}.
 */
vIconStyle?: string;

/**
 * See {@link isc.StatefulCanvas.setIconOrientation() StatefulCanvas.setIconOrientation()}.
 */
setIconOrientation?: Function;

/**
 * See {@link isc.StatefulCanvas.title StatefulCanvas.title}.
 */
title?: string;

/**
 * See {@link isc.StatefulCanvas.valign StatefulCanvas.valign}.
 */
valign?: string;

/**
 * See {@link isc.StatefulCanvas.setState() StatefulCanvas.setState()}.
 */
setState?: Function;

/**
 * See {@link isc.StatefulCanvas.width StatefulCanvas.width}.
 */
width?: number | string;

/**
 * See {@link isc.StatefulCanvas.styleName StatefulCanvas.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.StatefulCanvas.showDown StatefulCanvas.showDown}.
 */
showDown?: boolean;

/**
 * See {@link isc.StatefulCanvas.iconOrientation StatefulCanvas.iconOrientation}.
 */
iconOrientation?: string;

/**
 * See {@link isc.StatefulCanvas.setIconStyle() StatefulCanvas.setIconStyle()}.
 */
setIconStyle?: Function;

/**
 * See {@link isc.StatefulCanvas.addToRadioGroup() StatefulCanvas.addToRadioGroup()}.
 */
addToRadioGroup?: Function;

/**
 * See {@link isc.StatefulCanvas.showDownIcon StatefulCanvas.showDownIcon}.
 */
showDownIcon?: boolean;

/**
 * See {@link isc.StatefulCanvas.baseStyle StatefulCanvas.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.StatefulCanvas.iconSpacing StatefulCanvas.iconSpacing}.
 */
iconSpacing?: number;

/**
 * See {@link isc.StatefulCanvas.editProxyConstructor StatefulCanvas.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.StatefulCanvas.overCanvasDefaults StatefulCanvas.overCanvasDefaults}.
 */
overCanvasDefaults?: Canvas;

/**
 * See {@link isc.StatefulCanvas.ignoreRTL StatefulCanvas.ignoreRTL}.
 */
ignoreRTL?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StatefulCanvas wraps the SmartClient widget class
 * {@link isc.StatefulCanvas StatefulCanvas} for React, allowing you to import
 * StatefulCanvas for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class StatefulCanvas extends Canvas {
    props: AsComponentXML<StatefulCanvasProps>;
}
