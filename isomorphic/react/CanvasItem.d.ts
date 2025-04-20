import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface CanvasItemProps extends FormItemProps {

/**
 * See {@link isc.CanvasItem.prompt CanvasItem.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.CanvasItem.setCanvas() CanvasItem.setCanvas()}.
 */
setCanvas?: Function;

/**
 * See {@link isc.CanvasItem.canEditChanged() CanvasItem.canEditChanged()}.
 */
canEditChanged?: Function;

/**
 * See {@link isc.CanvasItem.editCriteriaInInnerForm CanvasItem.editCriteriaInInnerForm}.
 */
editCriteriaInInnerForm?: boolean;

/**
 * See {@link isc.CanvasItem.minHeight CanvasItem.minHeight}.
 */
minHeight?: number;

/**
 * See {@link isc.CanvasItem.maxHeight CanvasItem.maxHeight}.
 */
maxHeight?: number;

/**
 * See {@link isc.CanvasItem.canvasConstructor CanvasItem.canvasConstructor}.
 */
canvasConstructor?: string;

/**
 * See {@link isc.CanvasItem.setCriterion() CanvasItem.setCriterion()}.
 */
setCriterion?: Function;

/**
 * See {@link isc.CanvasItem.hasAdvancedCriteria() CanvasItem.hasAdvancedCriteria()}.
 */
hasAdvancedCriteria?: Function;

/**
 * See {@link isc.CanvasItem.isFocused() CanvasItem.isFocused()}.
 */
isFocused?: Function;

/**
 * See {@link isc.CanvasItem.readOnlyDisplayChanged() CanvasItem.readOnlyDisplayChanged()}.
 */
readOnlyDisplayChanged?: Function;

/**
 * See {@link isc.CanvasItem.multiple CanvasItem.multiple}.
 */
multiple?: boolean;

/**
 * See {@link isc.CanvasItem.height CanvasItem.height}.
 */
height?: number | string;

/**
 * See {@link isc.CanvasItem.shouldSaveValue CanvasItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.CanvasItem.canvasProperties CanvasItem.canvasProperties}.
 */
canvasProperties?: Object | Canvas;

/**
 * See {@link isc.CanvasItem.showValue() CanvasItem.showValue()}.
 */
showValue?: Function;

/**
 * See {@link isc.CanvasItem.setPrompt() CanvasItem.setPrompt()}.
 */
setPrompt?: Function;

/**
 * See {@link isc.CanvasItem.getCriterion() CanvasItem.getCriterion()}.
 */
getCriterion?: Function;

/**
 * See {@link isc.CanvasItem.createCanvas() CanvasItem.createCanvas()}.
 */
createCanvas?: Function;

/**
 * See {@link isc.CanvasItem.updateCanvasTabPosition() CanvasItem.updateCanvasTabPosition()}.
 */
updateCanvasTabPosition?: Function;

/**
 * See {@link isc.CanvasItem.canEditCriterion() CanvasItem.canEditCriterion()}.
 */
canEditCriterion?: Function;

/**
 * See {@link isc.CanvasItem.canvasDefaults CanvasItem.canvasDefaults}.
 */
canvasDefaults?: Object;

/**
 * See {@link isc.CanvasItem.shouldDisableCanvas() CanvasItem.shouldDisableCanvas()}.
 */
shouldDisableCanvas?: Function;

/**
 * See {@link isc.CanvasItem.overflow CanvasItem.overflow}.
 */
overflow?: string;

/**
 * See {@link isc.CanvasItem.applyPromptToCanvas CanvasItem.applyPromptToCanvas}.
 */
applyPromptToCanvas?: boolean;

/**
 * See {@link isc.CanvasItem.autoDestroy CanvasItem.autoDestroy}.
 */
autoDestroy?: boolean;

/**
 * See {@link isc.CanvasItem.storeValue() CanvasItem.storeValue()}.
 */
storeValue?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CanvasItem wraps the SmartClient widget class
 * {@link isc.CanvasItem CanvasItem} for React, allowing you to import
 * CanvasItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class CanvasItem extends FormItem {
    props: AsComponentXML<CanvasItemProps>;
}
