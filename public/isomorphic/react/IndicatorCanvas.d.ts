import React from 'react';
import { EventCanvas, EventCanvasProps } from './EventCanvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface IndicatorCanvasProps extends EventCanvasProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * IndicatorCanvas wraps the SmartClient widget class
 * {@link isc.IndicatorCanvas IndicatorCanvas} for React, allowing you to import
 * IndicatorCanvas for use in React JS and JSX.
 * @class
 * @extends EventCanvas
 */
declare class IndicatorCanvas extends EventCanvas {
    props: AsComponentXML<IndicatorCanvasProps>;
}
