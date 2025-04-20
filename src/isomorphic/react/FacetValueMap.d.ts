import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FacetValueMapProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FacetValueMap wraps the SmartClient object
 * {@link isc.FacetValueMap FacetValueMap} for React, allowing you to import
 * FacetValueMap for use in React JS and JSX.
 * @class
 */
declare class FacetValueMap extends ILogicalComponent {
    props: AsComponentXML<FacetValueMapProps>;
}
