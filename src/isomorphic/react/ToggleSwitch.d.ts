import React from 'react';
import { StatefulCanvas, StatefulCanvasProps } from './StatefulCanvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToggleSwitchProps extends StatefulCanvasProps {

/**
 * See {@link isc.ToggleSwitch.defaultValue ToggleSwitch.defaultValue}.
 */
defaultValue?: boolean;

/**
 * See {@link isc.ToggleSwitch.thumbOffset ToggleSwitch.thumbOffset}.
 */
thumbOffset?: number;

/**
 * See {@link isc.ToggleSwitch.thumbRadius ToggleSwitch.thumbRadius}.
 */
thumbRadius?: string;

/**
 * See {@link isc.ToggleSwitch.setValue() ToggleSwitch.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.ToggleSwitch.animateThumbTime ToggleSwitch.animateThumbTime}.
 */
animateThumbTime?: number;

/**
 * See {@link isc.ToggleSwitch.thumbBaseStyle ToggleSwitch.thumbBaseStyle}.
 */
thumbBaseStyle?: string;

/**
 * See {@link isc.ToggleSwitch.toggleBaseStyle ToggleSwitch.toggleBaseStyle}.
 */
toggleBaseStyle?: string;

/**
 * See {@link isc.ToggleSwitch.toggleOnThumbClick ToggleSwitch.toggleOnThumbClick}.
 */
toggleOnThumbClick?: boolean;

/**
 * See {@link isc.ToggleSwitch.valueChanged() ToggleSwitch.valueChanged()}.
 */
valueChanged?: Function;

/**
 * See {@link isc.ToggleSwitch.thumbProperties ToggleSwitch.thumbProperties}.
 */
thumbProperties?: Canvas;

/**
 * See {@link isc.ToggleSwitch.toggleOnKeypress ToggleSwitch.toggleOnKeypress}.
 */
toggleOnKeypress?: boolean;

/**
 * See {@link isc.ToggleSwitch.animateThumb ToggleSwitch.animateThumb}.
 */
animateThumb?: boolean;

/**
 * See {@link isc.ToggleSwitch.value ToggleSwitch.value}.
 */
value?: boolean;

/**
 * See {@link isc.ToggleSwitch.getValue() ToggleSwitch.getValue()}.
 */
getValue?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToggleSwitch wraps the SmartClient widget class
 * {@link isc.ToggleSwitch ToggleSwitch} for React, allowing you to import
 * ToggleSwitch for use in React JS and JSX.
 * @class
 * @extends StatefulCanvas
 */
declare class ToggleSwitch extends StatefulCanvas {
    props: AsComponentXML<ToggleSwitchProps>;
}
