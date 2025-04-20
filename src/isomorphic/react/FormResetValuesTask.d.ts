import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormResetValuesTaskProps extends ComponentTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormResetValuesTask wraps the SmartClient widget class
 * {@link isc.FormResetValuesTask FormResetValuesTask} for React, allowing you to import
 * FormResetValuesTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FormResetValuesTask extends ComponentTask {
    props: AsComponentXML<FormResetValuesTaskProps>;
}
