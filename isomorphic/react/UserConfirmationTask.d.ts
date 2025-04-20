import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface UserConfirmationTaskProps extends ProcessElementProps {

/**
 * See {@link isc.UserConfirmationTask.textFormula UserConfirmationTask.textFormula}.
 */
textFormula?: UserSummary;

/**
 * See {@link isc.UserConfirmationTask.nextElement UserConfirmationTask.nextElement}.
 */
nextElement?: string;

/**
 * See {@link isc.UserConfirmationTask.failureElement UserConfirmationTask.failureElement}.
 */
failureElement?: string;

/**
 * See {@link isc.UserConfirmationTask.message UserConfirmationTask.message}.
 */
message?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * UserConfirmationTask wraps the SmartClient widget class
 * {@link isc.UserConfirmationTask UserConfirmationTask} for React, allowing you to import
 * UserConfirmationTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class UserConfirmationTask extends ProcessElement {
    props: AsComponentXML<UserConfirmationTaskProps>;
}
