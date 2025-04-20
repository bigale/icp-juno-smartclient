import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FieldProps {

/**
 * See {@link isc.Field.escapeHTML Field.escapeHTML}.
 */
escapeHTML?: boolean;

/**
 * See {@link isc.Field.title Field.title}.
 */
title?: string;

/**
 * See {@link isc.Field.canEdit Field.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.Field.exportTitle Field.exportTitle}.
 */
exportTitle?: string;

/**
 * See {@link isc.Field.name Field.name}.
 */
name?: string;

/**
 * See {@link isc.Field.type Field.type}.
 */
type?: string;

/**
 * See {@link isc.Field.canExport Field.canExport}.
 */
canExport?: boolean;

/**
 * See {@link isc.Field.valueMap Field.valueMap}.
 */
valueMap?: ValueMap;

/**
 * See {@link isc.Field.required Field.required}.
 */
required?: boolean;

/**
 * See {@link isc.Field.multiple Field.multiple}.
 */
multiple?: boolean;

/**
 * See {@link isc.Field.sortByField Field.sortByField}.
 */
sortByField?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Field wraps the SmartClient object
 * {@link isc.Field Field} for React, allowing you to import
 * Field for use in React JS and JSX.
 * @class
 */
declare class Field extends ILogicalComponent {
    props: AsComponentXML<FieldProps>;
}
