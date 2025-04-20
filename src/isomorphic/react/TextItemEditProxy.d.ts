import React from 'react';
import { FormItemEditProxy, FormItemEditProxyProps } from './FormItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface TextItemEditProxyProps extends FormItemEditProxyProps {

/**
 * See {@link isc.TextItemEditProxy.setInlineEditText() TextItemEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.TextItemEditProxy.getInlineEditText() TextItemEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TextItemEditProxy wraps the SmartClient widget class
 * {@link isc.TextItemEditProxy TextItemEditProxy} for React, allowing you to import
 * TextItemEditProxy for use in React JS and JSX.
 * @class
 * @extends FormItemEditProxy
 */
declare class TextItemEditProxy extends FormItemEditProxy {
    props: AsComponentXML<TextItemEditProxyProps>;
}
