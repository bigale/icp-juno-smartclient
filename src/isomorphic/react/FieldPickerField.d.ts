import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FieldPickerFieldProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FieldPickerField wraps the non-rendered SmartClient class
 * {@link isc.FieldPickerField FieldPickerField} for React, allowing you to import
 *  FieldPickerField for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class FieldPickerField extends ILogicalComponent {
    props: AsComponentXML<FieldPickerFieldProps>;
}
