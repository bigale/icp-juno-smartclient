import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface LayoutSpacerProps extends CanvasProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LayoutSpacer wraps the SmartClient widget class
 * {@link isc.LayoutSpacer LayoutSpacer} for React, allowing you to import
 * LayoutSpacer for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class LayoutSpacer extends Canvas {
    props: AsComponentXML<LayoutSpacerProps>;
}
