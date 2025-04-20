import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface OperatorsProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Operators wraps the non-rendered SmartClient class
 * {@link isc.Operators Operators} for React, allowing you to import
 *  Operators for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Operators extends ILogicalComponent {
    props: AsComponentXML<OperatorsProps>;
}
