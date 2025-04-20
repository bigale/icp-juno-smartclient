import React from 'react';
import { EditProxy, EditProxyProps } from './EditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormItemEditProxyProps extends EditProxyProps {

/**
 * See {@link isc.FormItemEditProxy.valueMapDisplaySeparatorChar FormItemEditProxy.valueMapDisplaySeparatorChar}.
 */
valueMapDisplaySeparatorChar?: string;

/**
 * See {@link isc.FormItemEditProxy.valueMapSelectedChar FormItemEditProxy.valueMapSelectedChar}.
 */
valueMapSelectedChar?: string;

/**
 * See {@link isc.FormItemEditProxy.valueMapEscapeChar FormItemEditProxy.valueMapEscapeChar}.
 */
valueMapEscapeChar?: string;

/**
 * See {@link isc.FormItemEditProxy.valueMapSeparatorChar FormItemEditProxy.valueMapSeparatorChar}.
 */
valueMapSeparatorChar?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormItemEditProxy wraps the SmartClient widget class
 * {@link isc.FormItemEditProxy FormItemEditProxy} for React, allowing you to import
 * FormItemEditProxy for use in React JS and JSX.
 * @class
 * @extends EditProxy
 */
declare class FormItemEditProxy extends EditProxy {
    props: AsComponentXML<FormItemEditProxyProps>;
}
