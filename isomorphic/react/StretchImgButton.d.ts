import React from 'react';
import { StretchImg, StretchImgProps } from './StretchImg';
import { AsComponentXML } from './core/ReactComponent';


declare interface StretchImgButtonProps extends StretchImgProps {

/**
 * See {@link isc.StretchImgButton.showRollOverIcon StretchImgButton.showRollOverIcon}.
 */
showRollOverIcon?: boolean;

/**
 * See {@link isc.StretchImgButton.height StretchImgButton.height}.
 */
height?: number | string;

/**
 * See {@link isc.StretchImgButton.autoFit StretchImgButton.autoFit}.
 */
autoFit?: boolean;

/**
 * See {@link isc.StretchImgButton.definingProperty StretchImgButton.definingProperty}.
 */
definingProperty?: string;

/**
 * See {@link isc.StretchImgButton.addToRadioGroup() StretchImgButton.addToRadioGroup()}.
 */
addToRadioGroup?: Function;

/**
 * See {@link isc.StretchImgButton.labelHPad StretchImgButton.labelHPad}.
 */
labelHPad?: number;

/**
 * See {@link isc.StretchImgButton.iconWidth StretchImgButton.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.StretchImgButton.align StretchImgButton.align}.
 */
align?: string;

/**
 * See {@link isc.StretchImgButton.wrap StretchImgButton.wrap}.
 */
wrap?: boolean;

/**
 * See {@link isc.StretchImgButton.getState() StretchImgButton.getState()}.
 */
getState?: Function;

/**
 * See {@link isc.StretchImgButton.titleHover() StretchImgButton.titleHover()}.
 */
titleHover?: Function;

/**
 * See {@link isc.StretchImgButton.removeFromRadioGroup() StretchImgButton.removeFromRadioGroup()}.
 */
removeFromRadioGroup?: Function;

/**
 * See {@link isc.StretchImgButton.getActionType() StretchImgButton.getActionType()}.
 */
getActionType?: Function;

/**
 * See {@link isc.StretchImgButton.action() StretchImgButton.action()}.
 */
action?: Function;

/**
 * See {@link isc.StretchImgButton.title StretchImgButton.title}.
 */
title?: string;

/**
 * See {@link isc.StretchImgButton.src StretchImgButton.src}.
 */
src?: string;

/**
 * See {@link isc.StretchImgButton.isSelected() StretchImgButton.isSelected()}.
 */
isSelected?: Function;

/**
 * See {@link isc.StretchImgButton.iconSpacing StretchImgButton.iconSpacing}.
 */
iconSpacing?: number;

/**
 * See {@link isc.StretchImgButton.deselect() StretchImgButton.deselect()}.
 */
deselect?: Function;

/**
 * See {@link isc.StretchImgButton.select() StretchImgButton.select()}.
 */
select?: Function;

/**
 * See {@link isc.StretchImgButton.setTitle() StretchImgButton.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.StretchImgButton.setState() StretchImgButton.setState()}.
 */
setState?: Function;

/**
 * See {@link isc.StretchImgButton.setLabelSkinImgDir() StretchImgButton.setLabelSkinImgDir()}.
 */
setLabelSkinImgDir?: Function;

/**
 * See {@link isc.StretchImgButton.setAutoFit() StretchImgButton.setAutoFit()}.
 */
setAutoFit?: Function;

/**
 * See {@link isc.StretchImgButton.getTitle() StretchImgButton.getTitle()}.
 */
getTitle?: Function;

/**
 * See {@link isc.StretchImgButton.setDisabled() StretchImgButton.setDisabled()}.
 */
setDisabled?: Function;

/**
 * See {@link isc.StretchImgButton.labelVPad StretchImgButton.labelVPad}.
 */
labelVPad?: number;

/**
 * See {@link isc.StretchImgButton.showDown StretchImgButton.showDown}.
 */
showDown?: boolean;

/**
 * See {@link isc.StretchImgButton.titleClipped() StretchImgButton.titleClipped()}.
 */
titleClipped?: Function;

/**
 * See {@link isc.StretchImgButton.showFocused StretchImgButton.showFocused}.
 */
showFocused?: boolean;

/**
 * See {@link isc.StretchImgButton.icon StretchImgButton.icon}.
 */
icon?: string;

/**
 * See {@link isc.StretchImgButton.iconAlign StretchImgButton.iconAlign}.
 */
iconAlign?: string;

/**
 * See {@link isc.StretchImgButton.showFocus StretchImgButton.showFocus}.
 */
showFocus?: boolean;

/**
 * See {@link isc.StretchImgButton.setBaseStyle() StretchImgButton.setBaseStyle()}.
 */
setBaseStyle?: Function;

/**
 * See {@link isc.StretchImgButton.showSelectedIcon StretchImgButton.showSelectedIcon}.
 */
showSelectedIcon?: boolean;

/**
 * See {@link isc.StretchImgButton.iconOrientation StretchImgButton.iconOrientation}.
 */
iconOrientation?: string;

/**
 * See {@link isc.StretchImgButton.showDisabledIcon StretchImgButton.showDisabledIcon}.
 */
showDisabledIcon?: boolean;

/**
 * See {@link isc.StretchImgButton.actionType StretchImgButton.actionType}.
 */
actionType?: string;

/**
 * See {@link isc.StretchImgButton.showClippedTitleOnHover StretchImgButton.showClippedTitleOnHover}.
 */
showClippedTitleOnHover?: boolean;

/**
 * See {@link isc.StretchImgButton.radioGroup StretchImgButton.radioGroup}.
 */
radioGroup?: string;

/**
 * See {@link isc.StretchImgButton.showTitle StretchImgButton.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.StretchImgButton.iconClick() StretchImgButton.iconClick()}.
 */
iconClick?: Function;

/**
 * See {@link isc.StretchImgButton.setIconOrientation() StretchImgButton.setIconOrientation()}.
 */
setIconOrientation?: Function;

/**
 * See {@link isc.StretchImgButton.showFocusedIcon StretchImgButton.showFocusedIcon}.
 */
showFocusedIcon?: boolean;

/**
 * See {@link isc.StretchImgButton.labelLengthPad StretchImgButton.labelLengthPad}.
 */
labelLengthPad?: number;

/**
 * See {@link isc.StretchImgButton.titleStyle StretchImgButton.titleStyle}.
 */
titleStyle?: string;

/**
 * See {@link isc.StretchImgButton.setTitleStyle() StretchImgButton.setTitleStyle()}.
 */
setTitleStyle?: Function;

/**
 * See {@link isc.StretchImgButton.setIcon() StretchImgButton.setIcon()}.
 */
setIcon?: Function;

/**
 * See {@link isc.StretchImgButton.titleHoverHTML() StretchImgButton.titleHoverHTML()}.
 */
titleHoverHTML?: Function;

/**
 * See {@link isc.StretchImgButton.showDownIcon StretchImgButton.showDownIcon}.
 */
showDownIcon?: boolean;

/**
 * See {@link isc.StretchImgButton.iconHeight StretchImgButton.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.StretchImgButton.state StretchImgButton.state}.
 */
state?: string;

/**
 * See {@link isc.StretchImgButton.vertical StretchImgButton.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.StretchImgButton.showRollOver StretchImgButton.showRollOver}.
 */
showRollOver?: boolean;

/**
 * See {@link isc.StretchImgButton.capSize StretchImgButton.capSize}.
 */
capSize?: number;

/**
 * See {@link isc.StretchImgButton.iconSize StretchImgButton.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.StretchImgButton.showDisabled StretchImgButton.showDisabled}.
 */
showDisabled?: boolean;

/**
 * See {@link isc.StretchImgButton.width StretchImgButton.width}.
 */
width?: number | string;

/**
 * See {@link isc.StretchImgButton.labelBreadthPad StretchImgButton.labelBreadthPad}.
 */
labelBreadthPad?: number;

/**
 * See {@link isc.StretchImgButton.hiliteAccessKey StretchImgButton.hiliteAccessKey}.
 */
hiliteAccessKey?: boolean;

/**
 * See {@link isc.StretchImgButton.valign StretchImgButton.valign}.
 */
valign?: string;

/**
 * See {@link isc.StretchImgButton.baseStyle StretchImgButton.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.StretchImgButton.labelSkinImgDir StretchImgButton.labelSkinImgDir}.
 */
labelSkinImgDir?: string;

/**
 * See {@link isc.StretchImgButton.setActionType() StretchImgButton.setActionType()}.
 */
setActionType?: Function;

/**
 * See {@link isc.StretchImgButton.selected StretchImgButton.selected}.
 */
selected?: boolean;

/**
 * See {@link isc.StretchImgButton.setSelected() StretchImgButton.setSelected()}.
 */
setSelected?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StretchImgButton wraps the SmartClient widget class
 * {@link isc.StretchImgButton StretchImgButton} for React, allowing you to import
 * StretchImgButton for use in React JS and JSX.
 * @class
 * @extends StretchImg
 */
declare class StretchImgButton extends StretchImg {
    props: AsComponentXML<StretchImgButtonProps>;
}
