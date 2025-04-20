import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface EdgeSizesProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EdgeSizes wraps the SmartClient object
 * {@link isc.EdgeSizes EdgeSizes} for React, allowing you to import
 * EdgeSizes for use in React JS and JSX.
 * @class
 */
declare class EdgeSizes extends ILogicalComponent {
    props: AsComponentXML<EdgeSizesProps>;
}
