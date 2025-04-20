import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface GroupSpecifierProps {

/**
 * See {@link isc.GroupSpecifier.property GroupSpecifier.property}.
 */
property?: string;

/**
 * See {@link isc.GroupSpecifier.grouping GroupSpecifier.grouping}.
 */
grouping?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GroupSpecifier wraps the SmartClient object
 * {@link isc.GroupSpecifier GroupSpecifier} for React, allowing you to import
 * GroupSpecifier for use in React JS and JSX.
 * @class
 */
declare class GroupSpecifier extends ILogicalComponent {
    props: AsComponentXML<GroupSpecifierProps>;
}
