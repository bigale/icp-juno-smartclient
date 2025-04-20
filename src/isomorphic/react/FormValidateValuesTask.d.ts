import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormValidateValuesTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.FormValidateValuesTask.passThruOutput FormValidateValuesTask.passThruOutput}.
 */
passThruOutput?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormValidateValuesTask wraps the SmartClient widget class
 * {@link isc.FormValidateValuesTask FormValidateValuesTask} for React, allowing you to import
 * FormValidateValuesTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FormValidateValuesTask extends ComponentTask {
    props: AsComponentXML<FormValidateValuesTaskProps>;
}
