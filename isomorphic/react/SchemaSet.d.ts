import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SchemaSetProps {

/**
 * See {@link isc.SchemaSet.schemaNamespace SchemaSet.schemaNamespace}.
 */
schemaNamespace?: string;

/**
 * See {@link isc.SchemaSet.getSchema() SchemaSet.getSchema()}.
 */
getSchema?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SchemaSet wraps the non-rendered SmartClient class
 * {@link isc.SchemaSet SchemaSet} for React, allowing you to import
 *  SchemaSet for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class SchemaSet extends ILogicalComponent {
    props: AsComponentXML<SchemaSetProps>;
}
