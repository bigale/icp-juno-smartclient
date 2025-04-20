import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormSaveDataTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.FormSaveDataTask.unboundNotifyMessage FormSaveDataTask.unboundNotifyMessage}.
 */
unboundNotifyMessage?: string;

/**
 * See {@link isc.FormSaveDataTask.clearAfterSave FormSaveDataTask.clearAfterSave}.
 */
clearAfterSave?: boolean;

/**
 * See {@link isc.FormSaveDataTask.passThruOutput FormSaveDataTask.passThruOutput}.
 */
passThruOutput?: boolean;

/**
 * See {@link isc.FormSaveDataTask.boundNotifyMessage FormSaveDataTask.boundNotifyMessage}.
 */
boundNotifyMessage?: string;

/**
 * See {@link isc.FormSaveDataTask.requestProperties FormSaveDataTask.requestProperties}.
 */
requestProperties?: DSRequest;

/**
 * See {@link isc.FormSaveDataTask.showNotification FormSaveDataTask.showNotification}.
 */
showNotification?: boolean;

/**
 * See {@link isc.FormSaveDataTask.notifyType FormSaveDataTask.notifyType}.
 */
notifyType?: string;

/**
 * See {@link isc.FormSaveDataTask.notifyMessage FormSaveDataTask.notifyMessage}.
 */
notifyMessage?: string;

/**
 * See {@link isc.FormSaveDataTask.failureElement FormSaveDataTask.failureElement}.
 */
failureElement?: string;

/**
 * See {@link isc.FormSaveDataTask.notifyPosition FormSaveDataTask.notifyPosition}.
 */
notifyPosition?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormSaveDataTask wraps the SmartClient widget class
 * {@link isc.FormSaveDataTask FormSaveDataTask} for React, allowing you to import
 * FormSaveDataTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FormSaveDataTask extends ComponentTask {
    props: AsComponentXML<FormSaveDataTaskProps>;
}
