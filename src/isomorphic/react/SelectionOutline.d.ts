import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SelectionOutlineProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SelectionOutline wraps the non-rendered SmartClient class
 * {@link isc.SelectionOutline SelectionOutline} for React, allowing you to import
 *  SelectionOutline for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class SelectionOutline extends ILogicalComponent {
    props: AsComponentXML<SelectionOutlineProps>;
}
