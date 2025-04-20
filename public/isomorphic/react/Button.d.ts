import React from 'react';
import { StatefulCanvas, StatefulCanvasProps } from './StatefulCanvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface ButtonProps extends StatefulCanvasProps {

/**
 * See {@link isc.Button.setIconOrientation() Button.setIconOrientation()}.
 */
setIconOrientation?: Function;

/**
 * See {@link isc.Button.selected Button.selected}.
 */
selected?: boolean;

/**
 * See {@link isc.Button.iconAlign Button.iconAlign}.
 */
iconAlign?: string;

/**
 * See {@link isc.Button.canAdaptWidth Button.canAdaptWidth}.
 */
canAdaptWidth?: boolean;

/**
 * See {@link isc.Button.iconStyle Button.iconStyle}.
 */
iconStyle?: string;

/**
 * See {@link isc.Button.definingProperty Button.definingProperty}.
 */
definingProperty?: string;

/**
 * See {@link isc.Button.showDisabled Button.showDisabled}.
 */
showDisabled?: boolean;

/**
 * See {@link isc.Button.iconSpacing Button.iconSpacing}.
 */
iconSpacing?: number;

/**
 * See {@link isc.Button.showRollOver Button.showRollOver}.
 */
showRollOver?: boolean;

/**
 * See {@link isc.Button.isSelected() Button.isSelected()}.
 */
isSelected?: Function;

/**
 * See {@link isc.Button.showFocused Button.showFocused}.
 */
showFocused?: boolean;

/**
 * See {@link isc.Button.styleName Button.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.Button.select() Button.select()}.
 */
select?: Function;

/**
 * See {@link isc.Button.width Button.width}.
 */
width?: number | string;

/**
 * See {@link isc.Button.removeFromRadioGroup() Button.removeFromRadioGroup()}.
 */
removeFromRadioGroup?: Function;

/**
 * See {@link isc.Button.iconSize Button.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.Button.iconHeight Button.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.Button.getTitle() Button.getTitle()}.
 */
getTitle?: Function;

/**
 * See {@link isc.Button.wrap Button.wrap}.
 */
wrap?: boolean;

/**
 * See {@link isc.Button.align Button.align}.
 */
align?: string;

/**
 * See {@link isc.Button.titleClipped() Button.titleClipped()}.
 */
titleClipped?: Function;

/**
 * See {@link isc.Button.action() Button.action()}.
 */
action?: Function;

/**
 * See {@link isc.Button.deselect() Button.deselect()}.
 */
deselect?: Function;

/**
 * See {@link isc.Button.overflow Button.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.Button.iconOnlyBaseStyle Button.iconOnlyBaseStyle}.
 */
iconOnlyBaseStyle?: string;

/**
 * See {@link isc.Button.autoFit Button.autoFit}.
 */
autoFit?: boolean;

/**
 * See {@link isc.Button.showDisabledIcon Button.showDisabledIcon}.
 */
showDisabledIcon?: boolean;

/**
 * See {@link isc.Button.baseStyle Button.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.Button.setVAlign() Button.setVAlign()}.
 */
setVAlign?: Function;

/**
 * See {@link isc.Button.showDown Button.showDown}.
 */
showDown?: boolean;

/**
 * See {@link isc.Button.showRollOverIcon Button.showRollOverIcon}.
 */
showRollOverIcon?: boolean;

/**
 * See {@link isc.Button.actionType Button.actionType}.
 */
actionType?: string;

/**
 * See {@link isc.Button.titleHoverHTML() Button.titleHoverHTML()}.
 */
titleHoverHTML?: Function;

/**
 * See {@link isc.Button.setState() Button.setState()}.
 */
setState?: Function;

/**
 * See {@link isc.Button.getState() Button.getState()}.
 */
getState?: Function;

/**
 * See {@link isc.Button.titleHover() Button.titleHover()}.
 */
titleHover?: Function;

/**
 * See {@link isc.Button.setSelected() Button.setSelected()}.
 */
setSelected?: Function;

/**
 * See {@link isc.Button.setBaseStyle() Button.setBaseStyle()}.
 */
setBaseStyle?: Function;

/**
 * See {@link isc.Button.icon Button.icon}.
 */
icon?: string;

/**
 * See {@link isc.Button.valign Button.valign}.
 */
valign?: string;

/**
 * See {@link isc.Button.setActionType() Button.setActionType()}.
 */
setActionType?: Function;

/**
 * See {@link isc.Button.showDownIcon Button.showDownIcon}.
 */
showDownIcon?: boolean;

/**
 * See {@link isc.Button.setWrap() Button.setWrap()}.
 */
setWrap?: Function;

/**
 * See {@link isc.Button.state Button.state}.
 */
state?: string;

/**
 * See {@link isc.Button.iconOrientation Button.iconOrientation}.
 */
iconOrientation?: string;

/**
 * See {@link isc.Button.iconCursor Button.iconCursor}.
 */
iconCursor?: string;

/**
 * See {@link isc.Button.disabledIconCursor Button.disabledIconCursor}.
 */
disabledIconCursor?: string;

/**
 * See {@link isc.Button.showSelectedIcon Button.showSelectedIcon}.
 */
showSelectedIcon?: boolean;

/**
 * See {@link isc.Button.getActionType() Button.getActionType()}.
 */
getActionType?: Function;

/**
 * See {@link isc.Button.setDisabled() Button.setDisabled()}.
 */
setDisabled?: Function;

/**
 * See {@link isc.Button.title Button.title}.
 */
title?: string;

/**
 * See {@link isc.Button.iconWidth Button.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.Button.setAlign() Button.setAlign()}.
 */
setAlign?: Function;

/**
 * See {@link isc.Button.adaptWidthShowIconOnly Button.adaptWidthShowIconOnly}.
 */
adaptWidthShowIconOnly?: boolean;

/**
 * See {@link isc.Button.iconClick() Button.iconClick()}.
 */
iconClick?: Function;

/**
 * See {@link isc.Button.radioGroup Button.radioGroup}.
 */
radioGroup?: string;

/**
 * See {@link isc.Button.hiliteAccessKey Button.hiliteAccessKey}.
 */
hiliteAccessKey?: boolean;

/**
 * See {@link isc.Button.addToRadioGroup() Button.addToRadioGroup()}.
 */
addToRadioGroup?: Function;

/**
 * See {@link isc.Button.height Button.height}.
 */
height?: number | string;

/**
 * See {@link isc.Button.showFocusedIcon Button.showFocusedIcon}.
 */
showFocusedIcon?: boolean;

/**
 * See {@link isc.Button.setIcon() Button.setIcon()}.
 */
setIcon?: Function;

/**
 * See {@link isc.Button.setAutoFit() Button.setAutoFit()}.
 */
setAutoFit?: Function;

/**
 * See {@link isc.Button.setTitle() Button.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.Button.showClippedTitleOnHover Button.showClippedTitleOnHover}.
 */
showClippedTitleOnHover?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Button wraps the SmartClient widget class
 * {@link isc.Button Button} for React, allowing you to import
 * Button for use in React JS and JSX.
 * @class
 * @extends StatefulCanvas
 */
declare class Button extends StatefulCanvas {
    props: AsComponentXML<ButtonProps>;
}
