import React from 'react';
import { EventCanvas, EventCanvasProps } from './EventCanvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface ZoneCanvasProps extends EventCanvasProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ZoneCanvas wraps the SmartClient widget class
 * {@link isc.ZoneCanvas ZoneCanvas} for React, allowing you to import
 * ZoneCanvas for use in React JS and JSX.
 * @class
 * @extends EventCanvas
 */
declare class ZoneCanvas extends EventCanvas {
    props: AsComponentXML<ZoneCanvasProps>;
}
