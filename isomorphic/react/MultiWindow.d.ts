import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiWindowProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiWindow wraps the non-rendered SmartClient class
 * {@link isc.MultiWindow MultiWindow} for React, allowing you to import
 *  MultiWindow for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class MultiWindow extends ILogicalComponent {
    props: AsComponentXML<MultiWindowProps>;
}
