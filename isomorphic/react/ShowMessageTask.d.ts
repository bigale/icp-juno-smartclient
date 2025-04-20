import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface ShowMessageTaskProps extends ProcessElementProps {

/**
 * See {@link isc.ShowMessageTask.textFormula ShowMessageTask.textFormula}.
 */
textFormula?: UserSummary;

/**
 * See {@link isc.ShowMessageTask.message ShowMessageTask.message}.
 */
message?: string;

/**
 * See {@link isc.ShowMessageTask.type ShowMessageTask.type}.
 */
type?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ShowMessageTask wraps the SmartClient widget class
 * {@link isc.ShowMessageTask ShowMessageTask} for React, allowing you to import
 * ShowMessageTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class ShowMessageTask extends ProcessElement {
    props: AsComponentXML<ShowMessageTaskProps>;
}
