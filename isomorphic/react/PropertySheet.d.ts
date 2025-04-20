import React from 'react';
import { DynamicForm, DynamicFormProps } from './DynamicForm';
import { AsComponentXML } from './core/ReactComponent';


declare interface PropertySheetProps extends DynamicFormProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PropertySheet wraps the SmartClient widget class
 * {@link isc.PropertySheet PropertySheet} for React, allowing you to import
 * PropertySheet for use in React JS and JSX.
 * @class
 * @extends DynamicForm
 */
declare class PropertySheet extends DynamicForm {
    props: AsComponentXML<PropertySheetProps>;
}
