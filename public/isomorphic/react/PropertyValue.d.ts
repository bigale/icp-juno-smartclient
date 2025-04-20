import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PropertyValueProps {

/**
 * See {@link isc.PropertyValue.name PropertyValue.name}.
 */
name?: string;

/**
 * See {@link isc.PropertyValue.value PropertyValue.value}.
 */
value?: any;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PropertyValue wraps the SmartClient object
 * {@link isc.PropertyValue PropertyValue} for React, allowing you to import
 * PropertyValue for use in React JS and JSX.
 * @class
 */
declare class PropertyValue extends ILogicalComponent {
    props: AsComponentXML<PropertyValueProps>;
}
