import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormSetValuesTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.FormSetValuesTask.values FormSetValuesTask.values}.
 */
values?: Record;

/**
 * See {@link isc.FormSetValuesTask.fixedValues FormSetValuesTask.fixedValues}.
 */
fixedValues?: Record;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormSetValuesTask wraps the SmartClient widget class
 * {@link isc.FormSetValuesTask FormSetValuesTask} for React, allowing you to import
 * FormSetValuesTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FormSetValuesTask extends ComponentTask {
    props: AsComponentXML<FormSetValuesTaskProps>;
}
