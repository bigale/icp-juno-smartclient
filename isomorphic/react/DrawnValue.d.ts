import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawnValueProps {

/**
 * See {@link isc.DrawnValue.barThickness DrawnValue.barThickness}.
 */
barThickness?: number;

/**
 * See {@link isc.DrawnValue.record DrawnValue.record}.
 */
record?: CellRecord;

/**
 * See {@link isc.DrawnValue.facetValues DrawnValue.facetValues}.
 */
facetValues?: FacetValueMap;

/**
 * See {@link isc.DrawnValue.value DrawnValue.value}.
 */
value?: number;

/**
 * See {@link isc.DrawnValue.y DrawnValue.y}.
 */
y?: number;

/**
 * See {@link isc.DrawnValue.endAngle DrawnValue.endAngle}.
 */
endAngle?: number;

/**
 * See {@link isc.DrawnValue.startAngle DrawnValue.startAngle}.
 */
startAngle?: number;

/**
 * See {@link isc.DrawnValue.radius DrawnValue.radius}.
 */
radius?: number;

/**
 * See {@link isc.DrawnValue.x DrawnValue.x}.
 */
x?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawnValue wraps the SmartClient object
 * {@link isc.DrawnValue DrawnValue} for React, allowing you to import
 * DrawnValue for use in React JS and JSX.
 * @class
 */
declare class DrawnValue extends ILogicalComponent {
    props: AsComponentXML<DrawnValueProps>;
}
