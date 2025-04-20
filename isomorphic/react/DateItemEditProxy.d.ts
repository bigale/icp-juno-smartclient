import React from 'react';
import { FormItemEditProxy, FormItemEditProxyProps } from './FormItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateItemEditProxyProps extends FormItemEditProxyProps {

/**
 * See {@link isc.DateItemEditProxy.getInlineEditText() DateItemEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.DateItemEditProxy.setInlineEditText() DateItemEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DateItemEditProxy wraps the SmartClient widget class
 * {@link isc.DateItemEditProxy DateItemEditProxy} for React, allowing you to import
 * DateItemEditProxy for use in React JS and JSX.
 * @class
 * @extends FormItemEditProxy
 */
declare class DateItemEditProxy extends FormItemEditProxy {
    props: AsComponentXML<DateItemEditProxyProps>;
}
