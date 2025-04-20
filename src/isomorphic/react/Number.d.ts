import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface NumberProps {

/**
 * See {@link isc.Number.isBetween() Number.isBetween()}.
 */
isBetween?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Number wraps the SmartClient object
 * {@link isc.Number Number} for React, allowing you to import
 * Number for use in React JS and JSX.
 * @class
 */
declare class Number extends ILogicalComponent {
    props: AsComponentXML<NumberProps>;
}
