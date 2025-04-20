import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface RecordProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Record wraps the SmartClient object
 * {@link isc.Record Record} for React, allowing you to import
 * Record for use in React JS and JSX.
 * @class
 */
declare class Record extends ILogicalComponent {
    props: AsComponentXML<RecordProps>;
}
