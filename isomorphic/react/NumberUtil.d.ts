import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface NumberUtilProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NumberUtil wraps the non-rendered SmartClient class
 * {@link isc.NumberUtil NumberUtil} for React, allowing you to import
 *  NumberUtil for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class NumberUtil extends ILogicalComponent {
    props: AsComponentXML<NumberUtilProps>;
}
