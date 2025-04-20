import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface RichTextCanvasProps extends CanvasProps {

/**
 * See {@link isc.RichTextCanvas.useDesignMode RichTextCanvas.useDesignMode}.
 */
useDesignMode?: boolean;

/**
 * See {@link isc.RichTextCanvas.convertSelectionToUnorderedList() RichTextCanvas.convertSelectionToUnorderedList()}.
 */
convertSelectionToUnorderedList?: Function;

/**
 * See {@link isc.RichTextCanvas.moveFocusOnTab RichTextCanvas.moveFocusOnTab}.
 */
moveFocusOnTab?: boolean;

/**
 * See {@link isc.RichTextCanvas.convertSelectionToOrderedList() RichTextCanvas.convertSelectionToOrderedList()}.
 */
convertSelectionToOrderedList?: Function;

/**
 * See {@link isc.RichTextCanvas.styleName RichTextCanvas.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.RichTextCanvas.applyListProperties() RichTextCanvas.applyListProperties()}.
 */
applyListProperties?: Function;

/**
 * See {@link isc.RichTextCanvas.styleWithCSS RichTextCanvas.styleWithCSS}.
 */
styleWithCSS?: boolean;

/**
 * See {@link isc.RichTextCanvas.outdentSelection() RichTextCanvas.outdentSelection()}.
 */
outdentSelection?: Function;

/**
 * See {@link isc.RichTextCanvas.indentSelection() RichTextCanvas.indentSelection()}.
 */
indentSelection?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RichTextCanvas wraps the SmartClient widget class
 * {@link isc.RichTextCanvas RichTextCanvas} for React, allowing you to import
 * RichTextCanvas for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class RichTextCanvas extends Canvas {
    props: AsComponentXML<RichTextCanvasProps>;
}
