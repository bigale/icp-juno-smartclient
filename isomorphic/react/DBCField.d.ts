import React from 'react';
import { Field, FieldProps } from './Field';
import { AsComponentXML } from './core/ReactComponent';


declare interface DBCFieldProps extends FieldProps {

/**
 * See {@link isc.DBCField.name DBCField.name}.
 */
name?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DBCField wraps the SmartClient object
 * {@link isc.DBCField DBCField} for React, allowing you to import
 * DBCField for use in React JS and JSX.
 * @class
 */
declare class DBCField extends Field {
    props: AsComponentXML<DBCFieldProps>;
}
