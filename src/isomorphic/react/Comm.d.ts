import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CommProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Comm wraps the non-rendered SmartClient class
 * {@link isc.Comm Comm} for React, allowing you to import
 *  Comm for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Comm extends ILogicalComponent {
    props: AsComponentXML<CommProps>;
}
