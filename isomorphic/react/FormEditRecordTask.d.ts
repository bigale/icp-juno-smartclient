import React from 'react';
import { FormEditNewRecordTask, FormEditNewRecordTaskProps } from './FormEditNewRecordTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormEditRecordTaskProps extends FormEditNewRecordTaskProps {

/**
 * See {@link isc.FormEditRecordTask.recordSourceComponent FormEditRecordTask.recordSourceComponent}.
 */
recordSourceComponent?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormEditRecordTask wraps the SmartClient widget class
 * {@link isc.FormEditRecordTask FormEditRecordTask} for React, allowing you to import
 * FormEditRecordTask for use in React JS and JSX.
 * @class
 * @extends FormEditNewRecordTask
 */
declare class FormEditRecordTask extends FormEditNewRecordTask {
    props: AsComponentXML<FormEditRecordTaskProps>;
}
