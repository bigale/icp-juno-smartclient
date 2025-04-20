import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface StringProps {

/**
 * See {@link isc.String.pluralize() String.pluralize()}.
 */
pluralize?: Function;

/**
 * See {@link isc.String.startsWith() String.startsWith()}.
 */
startsWith?: Function;

/**
 * See {@link isc.String.endsWith() String.endsWith()}.
 */
endsWith?: Function;

/**
 * See {@link isc.String.contains() String.contains()}.
 */
contains?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * String wraps the SmartClient object
 * {@link isc.String String} for React, allowing you to import
 * String for use in React JS and JSX.
 * @class
 */
declare class String extends ILogicalComponent {
    props: AsComponentXML<StringProps>;
}
