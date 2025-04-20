import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface LogOutTaskProps extends ProcessElementProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LogOutTask wraps the SmartClient widget class
 * {@link isc.LogOutTask LogOutTask} for React, allowing you to import
 * LogOutTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class LogOutTask extends ProcessElement {
    props: AsComponentXML<LogOutTaskProps>;
}
