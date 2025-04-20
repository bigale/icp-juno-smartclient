import React from 'react';
import { DynamicForm, DynamicFormProps } from './DynamicForm';
import { AsComponentXML } from './core/ReactComponent';


declare interface HandPlacedFormProps extends DynamicFormProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HandPlacedForm wraps the SmartClient widget class
 * {@link isc.HandPlacedForm HandPlacedForm} for React, allowing you to import
 * HandPlacedForm for use in React JS and JSX.
 * @class
 * @extends DynamicForm
 */
declare class HandPlacedForm extends DynamicForm {
    props: AsComponentXML<HandPlacedFormProps>;
}
