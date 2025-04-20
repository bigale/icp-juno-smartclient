import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface RichTextItemProps extends CanvasItemProps {

/**
 * See {@link isc.RichTextItem.shouldSaveValue RichTextItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.RichTextItem.showTitle RichTextItem.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.RichTextItem.setMoveFocusOnTab() RichTextItem.setMoveFocusOnTab()}.
 */
setMoveFocusOnTab?: Function;

/**
 * See {@link isc.RichTextItem.defaultValue RichTextItem.defaultValue}.
 */
defaultValue?: string;

/**
 * See {@link isc.RichTextItem.startRow RichTextItem.startRow}.
 */
startRow?: boolean;

/**
 * See {@link isc.RichTextItem.endRow RichTextItem.endRow}.
 */
endRow?: boolean;

/**
 * See {@link isc.RichTextItem.controlGroups RichTextItem.controlGroups}.
 */
controlGroups?: string[];

/**
 * See {@link isc.RichTextItem.colSpan RichTextItem.colSpan}.
 */
colSpan?: number | string;

/**
 * See {@link isc.RichTextItem.moveFocusOnTab RichTextItem.moveFocusOnTab}.
 */
moveFocusOnTab?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RichTextItem wraps the SmartClient widget class
 * {@link isc.RichTextItem RichTextItem} for React, allowing you to import
 * RichTextItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class RichTextItem extends CanvasItem {
    props: AsComponentXML<RichTextItemProps>;
}
