import React from 'react';
import { FormItemEditProxy, FormItemEditProxyProps } from './FormItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface SelectItemEditProxyProps extends FormItemEditProxyProps {

/**
 * See {@link isc.SelectItemEditProxy.getInlineEditText() SelectItemEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.SelectItemEditProxy.setInlineEditText() SelectItemEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SelectItemEditProxy wraps the SmartClient widget class
 * {@link isc.SelectItemEditProxy SelectItemEditProxy} for React, allowing you to import
 * SelectItemEditProxy for use in React JS and JSX.
 * @class
 * @extends FormItemEditProxy
 */
declare class SelectItemEditProxy extends FormItemEditProxy {
    props: AsComponentXML<SelectItemEditProxyProps>;
}
