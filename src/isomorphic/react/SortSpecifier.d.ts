import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SortSpecifierProps {

/**
 * See {@link isc.SortSpecifier.direction SortSpecifier.direction}.
 */
direction?: string;

/**
 * See {@link isc.SortSpecifier.sortByProperty SortSpecifier.sortByProperty}.
 */
sortByProperty?: string;

/**
 * See {@link isc.SortSpecifier.property SortSpecifier.property}.
 */
property?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SortSpecifier wraps the SmartClient object
 * {@link isc.SortSpecifier SortSpecifier} for React, allowing you to import
 * SortSpecifier for use in React JS and JSX.
 * @class
 */
declare class SortSpecifier extends ILogicalComponent {
    props: AsComponentXML<SortSpecifierProps>;
}
