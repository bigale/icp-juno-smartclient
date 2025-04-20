import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface GridRemoveSelectedDataTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.GridRemoveSelectedDataTask.confirmationMessage GridRemoveSelectedDataTask.confirmationMessage}.
 */
confirmationMessage?: string;

/**
 * See {@link isc.GridRemoveSelectedDataTask.unboundConfirmationMessage GridRemoveSelectedDataTask.unboundConfirmationMessage}.
 */
unboundConfirmationMessage?: string;

/**
 * See {@link isc.GridRemoveSelectedDataTask.multipleConfirmationMessage GridRemoveSelectedDataTask.multipleConfirmationMessage}.
 */
multipleConfirmationMessage?: string;

/**
 * See {@link isc.GridRemoveSelectedDataTask.refuseMultiRemoveMessage GridRemoveSelectedDataTask.refuseMultiRemoveMessage}.
 */
refuseMultiRemoveMessage?: string;

/**
 * See {@link isc.GridRemoveSelectedDataTask.showConfirmation GridRemoveSelectedDataTask.showConfirmation}.
 */
showConfirmation?: boolean;

/**
 * See {@link isc.GridRemoveSelectedDataTask.failureElement GridRemoveSelectedDataTask.failureElement}.
 */
failureElement?: string;

/**
 * See {@link isc.GridRemoveSelectedDataTask.allowMultiRecordRemove GridRemoveSelectedDataTask.allowMultiRecordRemove}.
 */
allowMultiRecordRemove?: boolean;

/**
 * See {@link isc.GridRemoveSelectedDataTask.unboundMultipleConfirmationMessage GridRemoveSelectedDataTask.unboundMultipleConfirmationMessage}.
 */
unboundMultipleConfirmationMessage?: string;

/**
 * See {@link isc.GridRemoveSelectedDataTask.requestProperties GridRemoveSelectedDataTask.requestProperties}.
 */
requestProperties?: DSRequest;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GridRemoveSelectedDataTask wraps the SmartClient widget class
 * {@link isc.GridRemoveSelectedDataTask GridRemoveSelectedDataTask} for React, allowing you to import
 * GridRemoveSelectedDataTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class GridRemoveSelectedDataTask extends ComponentTask {
    props: AsComponentXML<GridRemoveSelectedDataTaskProps>;
}
