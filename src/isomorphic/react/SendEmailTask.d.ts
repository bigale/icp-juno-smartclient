import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface SendEmailTaskProps extends ProcessElementProps {

/**
 * See {@link isc.SendEmailTask.mockModeNotifyMessage SendEmailTask.mockModeNotifyMessage}.
 */
mockModeNotifyMessage?: string;

/**
 * See {@link isc.SendEmailTask.subject SendEmailTask.subject}.
 */
subject?: string;

/**
 * See {@link isc.SendEmailTask.subjectFormula SendEmailTask.subjectFormula}.
 */
subjectFormula?: UserSummary;

/**
 * See {@link isc.SendEmailTask.failureElement SendEmailTask.failureElement}.
 */
failureElement?: string;

/**
 * See {@link isc.SendEmailTask.to SendEmailTask.to}.
 */
to?: string;

/**
 * See {@link isc.SendEmailTask.requestProperties SendEmailTask.requestProperties}.
 */
requestProperties?: DSRequest;

/**
 * See {@link isc.SendEmailTask.message SendEmailTask.message}.
 */
message?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SendEmailTask wraps the SmartClient widget class
 * {@link isc.SendEmailTask SendEmailTask} for React, allowing you to import
 * SendEmailTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class SendEmailTask extends ProcessElement {
    props: AsComponentXML<SendEmailTaskProps>;
}
