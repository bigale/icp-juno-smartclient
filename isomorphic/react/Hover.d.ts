import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface HoverProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Hover wraps the non-rendered SmartClient class
 * {@link isc.Hover Hover} for React, allowing you to import
 *  Hover for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Hover extends ILogicalComponent {
    props: AsComponentXML<HoverProps>;
}
