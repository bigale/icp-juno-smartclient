import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface StartTransactionTaskProps extends ProcessElementProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StartTransactionTask wraps the SmartClient widget class
 * {@link isc.StartTransactionTask StartTransactionTask} for React, allowing you to import
 * StartTransactionTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class StartTransactionTask extends ProcessElement {
    props: AsComponentXML<StartTransactionTaskProps>;
}
