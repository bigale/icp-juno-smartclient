import React from 'react';
import { FormItemEditProxy, FormItemEditProxyProps } from './FormItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface ButtonItemEditProxyProps extends FormItemEditProxyProps {

/**
 * See {@link isc.ButtonItemEditProxy.getInlineEditText() ButtonItemEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.ButtonItemEditProxy.setInlineEditText() ButtonItemEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ButtonItemEditProxy wraps the SmartClient widget class
 * {@link isc.ButtonItemEditProxy ButtonItemEditProxy} for React, allowing you to import
 * ButtonItemEditProxy for use in React JS and JSX.
 * @class
 * @extends FormItemEditProxy
 */
declare class ButtonItemEditProxy extends FormItemEditProxy {
    props: AsComponentXML<ButtonItemEditProxyProps>;
}
