import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface SendTransactionTaskProps extends ProcessElementProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SendTransactionTask wraps the SmartClient widget class
 * {@link isc.SendTransactionTask SendTransactionTask} for React, allowing you to import
 * SendTransactionTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class SendTransactionTask extends ProcessElement {
    props: AsComponentXML<SendTransactionTaskProps>;
}
