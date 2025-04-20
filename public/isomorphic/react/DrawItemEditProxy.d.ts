import React from 'react';
import { EditProxy, EditProxyProps } from './EditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawItemEditProxyProps extends EditProxyProps {

/**
 * See {@link isc.DrawItemEditProxy.getInlineEditText() DrawItemEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.DrawItemEditProxy.setInlineEditText() DrawItemEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawItemEditProxy wraps the SmartClient widget class
 * {@link isc.DrawItemEditProxy DrawItemEditProxy} for React, allowing you to import
 * DrawItemEditProxy for use in React JS and JSX.
 * @class
 * @extends EditProxy
 */
declare class DrawItemEditProxy extends EditProxy {
    props: AsComponentXML<DrawItemEditProxyProps>;
}
