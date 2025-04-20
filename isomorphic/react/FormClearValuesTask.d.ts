import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormClearValuesTaskProps extends ComponentTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormClearValuesTask wraps the SmartClient widget class
 * {@link isc.FormClearValuesTask FormClearValuesTask} for React, allowing you to import
 * FormClearValuesTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FormClearValuesTask extends ComponentTask {
    props: AsComponentXML<FormClearValuesTaskProps>;
}
