import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormSetFieldValueTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.FormSetFieldValueTask.targetField FormSetFieldValueTask.targetField}.
 */
targetField?: string;

/**
 * See {@link isc.FormSetFieldValueTask.value FormSetFieldValueTask.value}.
 */
value?: any;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormSetFieldValueTask wraps the SmartClient widget class
 * {@link isc.FormSetFieldValueTask FormSetFieldValueTask} for React, allowing you to import
 * FormSetFieldValueTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FormSetFieldValueTask extends ComponentTask {
    props: AsComponentXML<FormSetFieldValueTaskProps>;
}
