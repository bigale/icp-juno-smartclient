import React from 'react';
import { ComponentTask, ComponentTaskProps } from './ComponentTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormEditSelectedTaskProps extends ComponentTaskProps {

/**
 * See {@link isc.FormEditSelectedTask.selectionComponentId FormEditSelectedTask.selectionComponentId}.
 */
selectionComponentId?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormEditSelectedTask wraps the SmartClient widget class
 * {@link isc.FormEditSelectedTask FormEditSelectedTask} for React, allowing you to import
 * FormEditSelectedTask for use in React JS and JSX.
 * @class
 * @extends ComponentTask
 */
declare class FormEditSelectedTask extends ComponentTask {
    props: AsComponentXML<FormEditSelectedTaskProps>;
}
