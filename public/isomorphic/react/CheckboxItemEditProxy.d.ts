import React from 'react';
import { FormItemEditProxy, FormItemEditProxyProps } from './FormItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface CheckboxItemEditProxyProps extends FormItemEditProxyProps {

/**
 * See {@link isc.CheckboxItemEditProxy.getInlineEditText() CheckboxItemEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.CheckboxItemEditProxy.setInlineEditText() CheckboxItemEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CheckboxItemEditProxy wraps the SmartClient widget class
 * {@link isc.CheckboxItemEditProxy CheckboxItemEditProxy} for React, allowing you to import
 * CheckboxItemEditProxy for use in React JS and JSX.
 * @class
 * @extends FormItemEditProxy
 */
declare class CheckboxItemEditProxy extends FormItemEditProxy {
    props: AsComponentXML<CheckboxItemEditProxyProps>;
}
