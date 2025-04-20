import React from 'react';
import { Button, ButtonProps } from './Button';
import { AsComponentXML } from './core/ReactComponent';


declare interface LabelProps extends ButtonProps {

/**
 * See {@link isc.Label.valign Label.valign}.
 */
valign?: string;

/**
 * See {@link isc.Label.iconWidth Label.iconWidth}.
 */
iconWidth?: number;

/**
 * See {@link isc.Label.setStyleName() Label.setStyleName()}.
 */
setStyleName?: Function;

/**
 * See {@link isc.Label.iconSpacing Label.iconSpacing}.
 */
iconSpacing?: number;

/**
 * See {@link isc.Label.setContents() Label.setContents()}.
 */
setContents?: Function;

/**
 * See {@link isc.Label.showDisabledIcon Label.showDisabledIcon}.
 */
showDisabledIcon?: boolean;

/**
 * See {@link isc.Label.editProxyConstructor Label.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.Label.showFocusedIcon Label.showFocusedIcon}.
 */
showFocusedIcon?: boolean;

/**
 * See {@link isc.Label.showDownIcon Label.showDownIcon}.
 */
showDownIcon?: boolean;

/**
 * See {@link isc.Label.styleName Label.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.Label.iconAlign Label.iconAlign}.
 */
iconAlign?: string;

/**
 * See {@link isc.Label.setIconOrientation() Label.setIconOrientation()}.
 */
setIconOrientation?: Function;

/**
 * See {@link isc.Label.iconSize Label.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.Label.contents Label.contents}.
 */
contents?: string;

/**
 * See {@link isc.Label.dynamicContents Label.dynamicContents}.
 */
dynamicContents?: boolean;

/**
 * See {@link isc.Label.wrap Label.wrap}.
 */
wrap?: boolean;

/**
 * See {@link isc.Label.align Label.align}.
 */
align?: string;

/**
 * See {@link isc.Label.setIcon() Label.setIcon()}.
 */
setIcon?: Function;

/**
 * See {@link isc.Label.showRollOverIcon Label.showRollOverIcon}.
 */
showRollOverIcon?: boolean;

/**
 * See {@link isc.Label.iconOrientation Label.iconOrientation}.
 */
iconOrientation?: string;

/**
 * See {@link isc.Label.iconHeight Label.iconHeight}.
 */
iconHeight?: number;

/**
 * See {@link isc.Label.autoFit Label.autoFit}.
 */
autoFit?: boolean;

/**
 * See {@link isc.Label.height Label.height}.
 */
height?: number | string;

/**
 * See {@link isc.Label.width Label.width}.
 */
width?: number | string;

/**
 * See {@link isc.Label.icon Label.icon}.
 */
icon?: string;

/**
 * See {@link isc.Label.showSelectedIcon Label.showSelectedIcon}.
 */
showSelectedIcon?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Label wraps the SmartClient widget class
 * {@link isc.Label Label} for React, allowing you to import
 * Label for use in React JS and JSX.
 * @class
 * @extends Button
 */
declare class Label extends Button {
    props: AsComponentXML<LabelProps>;
}
