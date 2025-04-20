import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ValueMapProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ValueMap wraps the SmartClient object
 * {@link isc.ValueMap ValueMap} for React, allowing you to import
 * ValueMap for use in React JS and JSX.
 * @class
 */
declare class ValueMap extends ILogicalComponent {
    props: AsComponentXML<ValueMapProps>;
}
