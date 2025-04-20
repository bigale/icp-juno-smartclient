import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface HistoryProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * History wraps the SmartClient object
 * {@link isc.History History} for React, allowing you to import
 * History for use in React JS and JSX.
 * @class
 */
declare class History extends ILogicalComponent {
    props: AsComponentXML<HistoryProps>;
}
