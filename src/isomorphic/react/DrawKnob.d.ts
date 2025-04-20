import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawKnobProps extends CanvasProps {

/**
 * See {@link isc.DrawKnob.knobShapeProperties DrawKnob.knobShapeProperties}.
 */
knobShapeProperties?: DrawItem;

/**
 * See {@link isc.DrawKnob.updatePoints() DrawKnob.updatePoints()}.
 */
updatePoints?: Function;

/**
 * See {@link isc.DrawKnob.y DrawKnob.y}.
 */
y?: number;

/**
 * See {@link isc.DrawKnob.knobShapeDefaults DrawKnob.knobShapeDefaults}.
 */
knobShapeDefaults?: DrawItem;

/**
 * See {@link isc.DrawKnob.drawPane DrawKnob.drawPane}.
 */
drawPane?: DrawPane;

/**
 * See {@link isc.DrawKnob.setCenterPoint() DrawKnob.setCenterPoint()}.
 */
setCenterPoint?: Function;

/**
 * See {@link isc.DrawKnob.x DrawKnob.x}.
 */
x?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawKnob wraps the SmartClient widget class
 * {@link isc.DrawKnob DrawKnob} for React, allowing you to import
 * DrawKnob for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class DrawKnob extends Canvas {
    props: AsComponentXML<DrawKnobProps>;
}
