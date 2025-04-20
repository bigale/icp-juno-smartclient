import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ListPropertiesProps {

/**
 * See {@link isc.ListProperties.startNumber ListProperties.startNumber}.
 */
startNumber?: number;

/**
 * See {@link isc.ListProperties.style ListProperties.style}.
 */
style?: string;

/**
 * See {@link isc.ListProperties.image ListProperties.image}.
 */
image?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ListProperties wraps the SmartClient object
 * {@link isc.ListProperties ListProperties} for React, allowing you to import
 * ListProperties for use in React JS and JSX.
 * @class
 */
declare class ListProperties extends ILogicalComponent {
    props: AsComponentXML<ListPropertiesProps>;
}
