import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AutoTestProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AutoTest wraps the non-rendered SmartClient class
 * {@link isc.AutoTest AutoTest} for React, allowing you to import
 *  AutoTest for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class AutoTest extends ILogicalComponent {
    props: AsComponentXML<AutoTestProps>;
}
