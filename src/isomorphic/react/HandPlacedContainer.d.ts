import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface HandPlacedContainerProps extends CanvasProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HandPlacedContainer wraps the SmartClient widget class
 * {@link isc.HandPlacedContainer HandPlacedContainer} for React, allowing you to import
 * HandPlacedContainer for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class HandPlacedContainer extends Canvas {
    props: AsComponentXML<HandPlacedContainerProps>;
}
