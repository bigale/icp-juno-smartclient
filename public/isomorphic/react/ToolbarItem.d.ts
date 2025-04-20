import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolbarItemProps extends CanvasItemProps {

/**
 * See {@link isc.ToolbarItem.colSpan ToolbarItem.colSpan}.
 */
colSpan?: number | string;

/**
 * See {@link isc.ToolbarItem.createButtonsOnInit ToolbarItem.createButtonsOnInit}.
 */
createButtonsOnInit?: boolean;

/**
 * See {@link isc.ToolbarItem.buttons ToolbarItem.buttons}.
 */
buttons?: StatefulCanvas[];

/**
 * See {@link isc.ToolbarItem.canvasProperties ToolbarItem.canvasProperties}.
 */
canvasProperties?: Canvas;

/**
 * See {@link isc.ToolbarItem.buttonProperties ToolbarItem.buttonProperties}.
 */
buttonProperties?: Object;

/**
 * See {@link isc.ToolbarItem.endRow ToolbarItem.endRow}.
 */
endRow?: boolean;

/**
 * See {@link isc.ToolbarItem.canvasConstructor ToolbarItem.canvasConstructor}.
 */
canvasConstructor?: string;

/**
 * See {@link isc.ToolbarItem.buttonAutoFit ToolbarItem.buttonAutoFit}.
 */
buttonAutoFit?: boolean;

/**
 * See {@link isc.ToolbarItem.editProxyConstructor ToolbarItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.ToolbarItem.buttonBaseStyle ToolbarItem.buttonBaseStyle}.
 */
buttonBaseStyle?: string;

/**
 * See {@link isc.ToolbarItem.showTitle ToolbarItem.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.ToolbarItem.buttonSpace ToolbarItem.buttonSpace}.
 */
buttonSpace?: number;

/**
 * See {@link isc.ToolbarItem.startRow ToolbarItem.startRow}.
 */
startRow?: boolean;

/**
 * See {@link isc.ToolbarItem.vertical ToolbarItem.vertical}.
 */
vertical?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolbarItem wraps the SmartClient widget class
 * {@link isc.ToolbarItem ToolbarItem} for React, allowing you to import
 * ToolbarItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class ToolbarItem extends CanvasItem {
    props: AsComponentXML<ToolbarItemProps>;
}
