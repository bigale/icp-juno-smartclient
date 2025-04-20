import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface EndProcessTaskProps extends ProcessElementProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EndProcessTask wraps the SmartClient widget class
 * {@link isc.EndProcessTask EndProcessTask} for React, allowing you to import
 * EndProcessTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class EndProcessTask extends ProcessElement {
    props: AsComponentXML<EndProcessTaskProps>;
}
