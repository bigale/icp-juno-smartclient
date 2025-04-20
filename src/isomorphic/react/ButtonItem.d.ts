import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface ButtonItemProps extends CanvasItemProps {

/**
 * See {@link isc.ButtonItem.setShowFocusedAsOver() ButtonItem.setShowFocusedAsOver()}.
 */
setShowFocusedAsOver?: Function;

/**
 * See {@link isc.ButtonItem.enableWhen ButtonItem.enableWhen}.
 */
enableWhen?: AdvancedCriteria;

/**
 * See {@link isc.ButtonItem.click() ButtonItem.click()}.
 */
click?: Function;

/**
 * See {@link isc.ButtonItem.buttonProperties ButtonItem.buttonProperties}.
 */
buttonProperties?: Canvas | Object;

/**
 * See {@link isc.ButtonItem.endRow ButtonItem.endRow}.
 */
endRow?: boolean;

/**
 * See {@link isc.ButtonItem.setButtonTitleAlign() ButtonItem.setButtonTitleAlign()}.
 */
setButtonTitleAlign?: Function;

/**
 * See {@link isc.ButtonItem.autoFit ButtonItem.autoFit}.
 */
autoFit?: boolean;

/**
 * See {@link isc.ButtonItem.height ButtonItem.height}.
 */
height?: number;

/**
 * See {@link isc.ButtonItem.baseStyle ButtonItem.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.ButtonItem.buttonTitleAlign ButtonItem.buttonTitleAlign}.
 */
buttonTitleAlign?: string;

/**
 * See {@link isc.ButtonItem.showFocusedAsOver ButtonItem.showFocusedAsOver}.
 */
showFocusedAsOver?: boolean;

/**
 * See {@link isc.ButtonItem.editProxyConstructor ButtonItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.ButtonItem.icon ButtonItem.icon}.
 */
icon?: string;

/**
 * See {@link isc.ButtonItem.setTitle() ButtonItem.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.ButtonItem.readOnlyDisplay ButtonItem.readOnlyDisplay}.
 */
readOnlyDisplay?: string;

/**
 * See {@link isc.ButtonItem.startRow ButtonItem.startRow}.
 */
startRow?: boolean;

/**
 * See {@link isc.ButtonItem.showTitle ButtonItem.showTitle}.
 */
showTitle?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ButtonItem wraps the SmartClient widget class
 * {@link isc.ButtonItem ButtonItem} for React, allowing you to import
 * ButtonItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class ButtonItem extends CanvasItem {
    props: AsComponentXML<ButtonItemProps>;
}
