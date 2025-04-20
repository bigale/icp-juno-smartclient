import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormEditNewRecordTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.FormEditNewRecordTask.initialValues FormEditNewRecordTask.initialValues}.
 */
initialValues?: Record;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormEditNewRecordTask wraps the SmartClient widget class
 * {@link isc.FormEditNewRecordTask FormEditNewRecordTask} for React, allowing you to import
 * FormEditNewRecordTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FormEditNewRecordTask extends ComponentTask {
    props: AsComponentXML<FormEditNewRecordTaskProps>;
}
