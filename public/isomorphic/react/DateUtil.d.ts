import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateUtilProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DateUtil wraps the non-rendered SmartClient class
 * {@link isc.DateUtil DateUtil} for React, allowing you to import
 *  DateUtil for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class DateUtil extends ILogicalComponent {
    props: AsComponentXML<DateUtilProps>;
}
