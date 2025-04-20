import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface JSONEncoderProps {

/**
 * See {@link isc.JSONEncoder.skipNullValues JSONEncoder.skipNullValues}.
 */
skipNullValues?: boolean;

/**
 * See {@link isc.JSONEncoder.strictQuoting JSONEncoder.strictQuoting}.
 */
strictQuoting?: boolean;

/**
 * See {@link isc.JSONEncoder.serializeInstances JSONEncoder.serializeInstances}.
 */
serializeInstances?: string;

/**
 * See {@link isc.JSONEncoder.skipInternalProperties JSONEncoder.skipInternalProperties}.
 */
skipInternalProperties?: boolean;

/**
 * See {@link isc.JSONEncoder.encode() JSONEncoder.encode()}.
 */
encode?: Function;

/**
 * See {@link isc.JSONEncoder.prettyPrint JSONEncoder.prettyPrint}.
 */
prettyPrint?: boolean;

/**
 * See {@link isc.JSONEncoder.circularReferenceMode JSONEncoder.circularReferenceMode}.
 */
circularReferenceMode?: string;

/**
 * See {@link isc.JSONEncoder.dateFormat JSONEncoder.dateFormat}.
 */
dateFormat?: string;

/**
 * See {@link isc.JSONEncoder.encodeDate() JSONEncoder.encodeDate()}.
 */
encodeDate?: Function;

/**
 * See {@link isc.JSONEncoder.showDebugOutput JSONEncoder.showDebugOutput}.
 */
showDebugOutput?: boolean;

/**
 * See {@link isc.JSONEncoder.escapeNonPrintable JSONEncoder.escapeNonPrintable}.
 */
escapeNonPrintable?: boolean;

/**
 * See {@link isc.JSONEncoder.circularReferenceMarker JSONEncoder.circularReferenceMarker}.
 */
circularReferenceMarker?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * JSONEncoder wraps the non-rendered SmartClient class
 * {@link isc.JSONEncoder JSONEncoder} for React, allowing you to import
 *  JSONEncoder for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class JSONEncoder extends ILogicalComponent {
    props: AsComponentXML<JSONEncoderProps>;
}
