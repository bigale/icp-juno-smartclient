import React from 'react';
import { Img, ImgProps } from './Img';
import { AsComponentXML } from './core/ReactComponent';


declare interface ImgButtonProps extends ImgProps {

/**
 * See {@link isc.ImgButton.setAutoFit() ImgButton.setAutoFit()}.
 */
setAutoFit?: Function;

/**
 * See {@link isc.ImgButton.iconWidth ImgButton.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.ImgButton.setDisabled() ImgButton.setDisabled()}.
 */
setDisabled?: Function;

/**
 * See {@link isc.ImgButton.setActionType() ImgButton.setActionType()}.
 */
setActionType?: Function;

/**
 * See {@link isc.ImgButton.showRollOverIcon ImgButton.showRollOverIcon}.
 */
showRollOverIcon?: boolean;

/**
 * See {@link isc.ImgButton.width ImgButton.width}.
 */
width?: number | string;

/**
 * See {@link isc.ImgButton.labelHPad ImgButton.labelHPad}.
 */
labelHPad?: number;

/**
 * See {@link isc.ImgButton.iconSize ImgButton.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.ImgButton.select() ImgButton.select()}.
 */
select?: Function;

/**
 * See {@link isc.ImgButton.showClippedTitleOnHover ImgButton.showClippedTitleOnHover}.
 */
showClippedTitleOnHover?: boolean;

/**
 * See {@link isc.ImgButton.showDown ImgButton.showDown}.
 */
showDown?: boolean;

/**
 * See {@link isc.ImgButton.setIconOrientation() ImgButton.setIconOrientation()}.
 */
setIconOrientation?: Function;

/**
 * See {@link isc.ImgButton.selected ImgButton.selected}.
 */
selected?: boolean;

/**
 * See {@link isc.ImgButton.icon ImgButton.icon}.
 */
icon?: string;

/**
 * See {@link isc.ImgButton.deselect() ImgButton.deselect()}.
 */
deselect?: Function;

/**
 * See {@link isc.ImgButton.radioGroup ImgButton.radioGroup}.
 */
radioGroup?: string;

/**
 * See {@link isc.ImgButton.baseStyle ImgButton.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.ImgButton.setSelected() ImgButton.setSelected()}.
 */
setSelected?: Function;

/**
 * See {@link isc.ImgButton.iconSpacing ImgButton.iconSpacing}.
 */
iconSpacing?: number;

/**
 * See {@link isc.ImgButton.height ImgButton.height}.
 */
height?: number | string;

/**
 * See {@link isc.ImgButton.iconAlign ImgButton.iconAlign}.
 */
iconAlign?: string;

/**
 * See {@link isc.ImgButton.labelVPad ImgButton.labelVPad}.
 */
labelVPad?: number;

/**
 * See {@link isc.ImgButton.showDownIcon ImgButton.showDownIcon}.
 */
showDownIcon?: boolean;

/**
 * See {@link isc.ImgButton.showRollOver ImgButton.showRollOver}.
 */
showRollOver?: boolean;

/**
 * See {@link isc.ImgButton.getState() ImgButton.getState()}.
 */
getState?: Function;

/**
 * See {@link isc.ImgButton.titleHoverHTML() ImgButton.titleHoverHTML()}.
 */
titleHoverHTML?: Function;

/**
 * See {@link isc.ImgButton.titleHover() ImgButton.titleHover()}.
 */
titleHover?: Function;

/**
 * See {@link isc.ImgButton.getActionType() ImgButton.getActionType()}.
 */
getActionType?: Function;

/**
 * See {@link isc.ImgButton.isSelected() ImgButton.isSelected()}.
 */
isSelected?: Function;

/**
 * See {@link isc.ImgButton.showTitle ImgButton.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.ImgButton.iconOrientation ImgButton.iconOrientation}.
 */
iconOrientation?: string;

/**
 * See {@link isc.ImgButton.showDisabledIcon ImgButton.showDisabledIcon}.
 */
showDisabledIcon?: boolean;

/**
 * See {@link isc.ImgButton.titleClipped() ImgButton.titleClipped()}.
 */
titleClipped?: Function;

/**
 * See {@link isc.ImgButton.showFocused ImgButton.showFocused}.
 */
showFocused?: boolean;

/**
 * See {@link isc.ImgButton.showDisabled ImgButton.showDisabled}.
 */
showDisabled?: boolean;

/**
 * See {@link isc.ImgButton.setIcon() ImgButton.setIcon()}.
 */
setIcon?: Function;

/**
 * See {@link isc.ImgButton.title ImgButton.title}.
 */
title?: string;

/**
 * See {@link isc.ImgButton.align ImgButton.align}.
 */
align?: string;

/**
 * See {@link isc.ImgButton.showSelectedIcon ImgButton.showSelectedIcon}.
 */
showSelectedIcon?: boolean;

/**
 * See {@link isc.ImgButton.setTitle() ImgButton.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.ImgButton.setState() ImgButton.setState()}.
 */
setState?: Function;

/**
 * See {@link isc.ImgButton.getTitle() ImgButton.getTitle()}.
 */
getTitle?: Function;

/**
 * See {@link isc.ImgButton.autoFit ImgButton.autoFit}.
 */
autoFit?: boolean;

/**
 * See {@link isc.ImgButton.src ImgButton.src}.
 */
src?: string | SCStatefulImgConfig;

/**
 * See {@link isc.ImgButton.setBaseStyle() ImgButton.setBaseStyle()}.
 */
setBaseStyle?: Function;

/**
 * See {@link isc.ImgButton.valign ImgButton.valign}.
 */
valign?: string;

/**
 * See {@link isc.ImgButton.iconHeight ImgButton.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.ImgButton.showFocus ImgButton.showFocus}.
 */
showFocus?: boolean;

/**
 * See {@link isc.ImgButton.state ImgButton.state}.
 */
state?: string;

/**
 * See {@link isc.ImgButton.showFocusedIcon ImgButton.showFocusedIcon}.
 */
showFocusedIcon?: boolean;

/**
 * See {@link isc.ImgButton.action() ImgButton.action()}.
 */
action?: Function;

/**
 * See {@link isc.ImgButton.actionType ImgButton.actionType}.
 */
actionType?: string;

/**
 * See {@link isc.ImgButton.hiliteAccessKey ImgButton.hiliteAccessKey}.
 */
hiliteAccessKey?: boolean;

/**
 * See {@link isc.ImgButton.addToRadioGroup() ImgButton.addToRadioGroup()}.
 */
addToRadioGroup?: Function;

/**
 * See {@link isc.ImgButton.removeFromRadioGroup() ImgButton.removeFromRadioGroup()}.
 */
removeFromRadioGroup?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ImgButton wraps the SmartClient widget class
 * {@link isc.ImgButton ImgButton} for React, allowing you to import
 * ImgButton for use in React JS and JSX.
 * @class
 * @extends Img
 */
declare class ImgButton extends Img {
    props: AsComponentXML<ImgButtonProps>;
}
