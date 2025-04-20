import React from 'react';
import { DrawPath, DrawPathProps } from './DrawPath';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawPolygonProps extends DrawPathProps {

/**
 * See {@link isc.DrawPolygon.knobs DrawPolygon.knobs}.
 */
knobs?: string[];

/**
 * See {@link isc.DrawPolygon.lineCap DrawPolygon.lineCap}.
 */
lineCap?: string;

/**
 * See {@link isc.DrawPolygon.points DrawPolygon.points}.
 */
points?: Point[];

/**
 * See {@link isc.DrawPolygon.showTitleLabelBackground DrawPolygon.showTitleLabelBackground}.
 */
showTitleLabelBackground?: boolean;

/**
 * See {@link isc.DrawPolygon.titleRotationMode DrawPolygon.titleRotationMode}.
 */
titleRotationMode?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawPolygon wraps the SmartClient widget class
 * {@link isc.DrawPolygon DrawPolygon} for React, allowing you to import
 * DrawPolygon for use in React JS and JSX.
 * @class
 * @extends DrawPath
 */
declare class DrawPolygon extends DrawPath {
    props: AsComponentXML<DrawPolygonProps>;
}
