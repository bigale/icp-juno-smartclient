import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormDisableFieldTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.FormDisableFieldTask.targetField FormDisableFieldTask.targetField}.
 */
targetField?: string;

/**
 * See {@link isc.FormDisableFieldTask.disable FormDisableFieldTask.disable}.
 */
disable?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormDisableFieldTask wraps the SmartClient widget class
 * {@link isc.FormDisableFieldTask FormDisableFieldTask} for React, allowing you to import
 * FormDisableFieldTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FormDisableFieldTask extends ComponentTask {
    props: AsComponentXML<FormDisableFieldTaskProps>;
}
