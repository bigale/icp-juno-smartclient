import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface QuartzManagerProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * QuartzManager wraps the non-rendered SmartClient class
 * {@link isc.QuartzManager QuartzManager} for React, allowing you to import
 *  QuartzManager for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class QuartzManager extends ILogicalComponent {
    props: AsComponentXML<QuartzManagerProps>;
}
