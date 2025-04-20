import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface RangeSliderProps extends CanvasProps {

/**
 * See {@link isc.RangeSlider.vertical RangeSlider.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.RangeSlider.changed() RangeSlider.changed()}.
 */
changed?: Function;

/**
 * See {@link isc.RangeSlider.minValue RangeSlider.minValue}.
 */
minValue?: number;

/**
 * See {@link isc.RangeSlider.trackProperties RangeSlider.trackProperties}.
 */
trackProperties?: Canvas;

/**
 * See {@link isc.RangeSlider.baseStyle RangeSlider.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.RangeSlider.startValue RangeSlider.startValue}.
 */
startValue?: number;

/**
 * See {@link isc.RangeSlider.endThumbProperties RangeSlider.endThumbProperties}.
 */
endThumbProperties?: Snapbar;

/**
 * See {@link isc.RangeSlider.startThumbProperties RangeSlider.startThumbProperties}.
 */
startThumbProperties?: Snapbar;

/**
 * See {@link isc.RangeSlider.scrollbarProperties RangeSlider.scrollbarProperties}.
 */
scrollbarProperties?: Scrollbar;

/**
 * See {@link isc.RangeSlider.endValue RangeSlider.endValue}.
 */
endValue?: number;

/**
 * See {@link isc.RangeSlider.maxValue RangeSlider.maxValue}.
 */
maxValue?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RangeSlider wraps the SmartClient widget class
 * {@link isc.RangeSlider RangeSlider} for React, allowing you to import
 * RangeSlider for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class RangeSlider extends Canvas {
    props: AsComponentXML<RangeSliderProps>;
}
