import React from 'react';
import { DrawCurve, DrawCurveProps } from './DrawCurve';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawBlockConnectorProps extends DrawCurveProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawBlockConnector wraps the SmartClient widget class
 * {@link isc.DrawBlockConnector DrawBlockConnector} for React, allowing you to import
 * DrawBlockConnector for use in React JS and JSX.
 * @class
 * @extends DrawCurve
 */
declare class DrawBlockConnector extends DrawCurve {
    props: AsComponentXML<DrawBlockConnectorProps>;
}
