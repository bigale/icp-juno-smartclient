import React from 'react';
import { DrawItemEditProxy, DrawItemEditProxyProps } from './DrawItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawLabelEditProxyProps extends DrawItemEditProxyProps {

/**
 * See {@link isc.DrawLabelEditProxy.setInlineEditText() DrawLabelEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.DrawLabelEditProxy.getInlineEditText() DrawLabelEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawLabelEditProxy wraps the SmartClient widget class
 * {@link isc.DrawLabelEditProxy DrawLabelEditProxy} for React, allowing you to import
 * DrawLabelEditProxy for use in React JS and JSX.
 * @class
 * @extends DrawItemEditProxy
 */
declare class DrawLabelEditProxy extends DrawItemEditProxy {
    props: AsComponentXML<DrawLabelEditProxyProps>;
}
