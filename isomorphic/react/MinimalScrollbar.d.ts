import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface MinimalScrollbarProps extends CanvasProps {

/**
 * See {@link isc.MinimalScrollbar.setInteractiveOnMouseOver MinimalScrollbar.setInteractiveOnMouseOver}.
 */
setInteractiveOnMouseOver?: boolean;

/**
 * See {@link isc.MinimalScrollbar.autoHideDelay MinimalScrollbar.autoHideDelay}.
 */
autoHideDelay?: number;

/**
 * See {@link isc.MinimalScrollbar.interactive MinimalScrollbar.interactive}.
 */
interactive?: boolean;

/**
 * See {@link isc.MinimalScrollbar.autoShow MinimalScrollbar.autoShow}.
 */
autoShow?: boolean;

/**
 * See {@link isc.MinimalScrollbar.thumbBaseStyle MinimalScrollbar.thumbBaseStyle}.
 */
thumbBaseStyle?: string;

/**
 * See {@link isc.MinimalScrollbar.thumbInset MinimalScrollbar.thumbInset}.
 */
thumbInset?: number;

/**
 * See {@link isc.MinimalScrollbar.endSpace MinimalScrollbar.endSpace}.
 */
endSpace?: number;

/**
 * See {@link isc.MinimalScrollbar.scrollbarSize MinimalScrollbar.scrollbarSize}.
 */
scrollbarSize?: number;

/**
 * See {@link isc.MinimalScrollbar.trackBaseStyle MinimalScrollbar.trackBaseStyle}.
 */
trackBaseStyle?: string;

/**
 * See {@link isc.MinimalScrollbar.interactiveScrollbarSize MinimalScrollbar.interactiveScrollbarSize}.
 */
interactiveScrollbarSize?: number;

/**
 * See {@link isc.MinimalScrollbar.thumbMinSize MinimalScrollbar.thumbMinSize}.
 */
thumbMinSize?: number;

/**
 * See {@link isc.MinimalScrollbar.setInteractive() MinimalScrollbar.setInteractive()}.
 */
setInteractive?: Function;

/**
 * See {@link isc.MinimalScrollbar.contrastSuffix MinimalScrollbar.contrastSuffix}.
 */
contrastSuffix?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MinimalScrollbar wraps the SmartClient widget class
 * {@link isc.MinimalScrollbar MinimalScrollbar} for React, allowing you to import
 * MinimalScrollbar for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class MinimalScrollbar extends Canvas {
    props: AsComponentXML<MinimalScrollbarProps>;
}
