import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ShadowProps {

/**
 * See {@link isc.Shadow.blur Shadow.blur}.
 */
blur?: number;

/**
 * See {@link isc.Shadow.color Shadow.color}.
 */
color?: string;

/**
 * See {@link isc.Shadow.offset Shadow.offset}.
 */
offset?: Point;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Shadow wraps the SmartClient object
 * {@link isc.Shadow Shadow} for React, allowing you to import
 * Shadow for use in React JS and JSX.
 * @class
 */
declare class Shadow extends ILogicalComponent {
    props: AsComponentXML<ShadowProps>;
}
