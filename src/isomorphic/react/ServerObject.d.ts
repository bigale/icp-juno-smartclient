import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ServerObjectProps {

/**
 * See {@link isc.ServerObject.bean ServerObject.bean}.
 */
bean?: string;

/**
 * See {@link isc.ServerObject.dropExtraFields ServerObject.dropExtraFields}.
 */
dropExtraFields?: boolean;

/**
 * See {@link isc.ServerObject.methodName ServerObject.methodName}.
 */
methodName?: string;

/**
 * See {@link isc.ServerObject.attributeName ServerObject.attributeName}.
 */
attributeName?: string;

/**
 * See {@link isc.ServerObject.className ServerObject.className}.
 */
className?: string;

/**
 * See {@link isc.ServerObject.visibleMethods ServerObject.visibleMethods}.
 */
visibleMethods?: VisibleMethod[];

/**
 * See {@link isc.ServerObject.ID ServerObject.ID}.
 */
ID?: string;

/**
 * See {@link isc.ServerObject.targetXPath ServerObject.targetXPath}.
 */
targetXPath?: string;

/**
 * See {@link isc.ServerObject.crudOnly ServerObject.crudOnly}.
 */
crudOnly?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ServerObject wraps the SmartClient object
 * {@link isc.ServerObject ServerObject} for React, allowing you to import
 * ServerObject for use in React JS and JSX.
 * @class
 */
declare class ServerObject extends ILogicalComponent {
    props: AsComponentXML<ServerObjectProps>;
}
