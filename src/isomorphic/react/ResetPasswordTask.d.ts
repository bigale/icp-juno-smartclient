import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface ResetPasswordTaskProps extends ProcessElementProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ResetPasswordTask wraps the SmartClient widget class
 * {@link isc.ResetPasswordTask ResetPasswordTask} for React, allowing you to import
 * ResetPasswordTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class ResetPasswordTask extends ProcessElement {
    props: AsComponentXML<ResetPasswordTaskProps>;
}
