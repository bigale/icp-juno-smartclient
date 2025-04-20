import React from 'react';
import { ProcessElement, ProcessElementProps } from './ProcessElement';
import { AsComponentXML } from './core/ReactComponent';


declare interface SendSMSTaskProps extends ProcessElementProps {

/**
 * See {@link isc.SendSMSTask.requestProperties SendSMSTask.requestProperties}.
 */
requestProperties?: DSRequest;

/**
 * See {@link isc.SendSMSTask.failureElement SendSMSTask.failureElement}.
 */
failureElement?: string;

/**
 * See {@link isc.SendSMSTask.mockModeNotifyMessage SendSMSTask.mockModeNotifyMessage}.
 */
mockModeNotifyMessage?: string;

/**
 * See {@link isc.SendSMSTask.message SendSMSTask.message}.
 */
message?: string;

/**
 * See {@link isc.SendSMSTask.to SendSMSTask.to}.
 */
to?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SendSMSTask wraps the SmartClient widget class
 * {@link isc.SendSMSTask SendSMSTask} for React, allowing you to import
 * SendSMSTask for use in React JS and JSX.
 * @class
 * @extends ProcessElement
 */
declare class SendSMSTask extends ProcessElement {
    props: AsComponentXML<SendSMSTaskProps>;
}
