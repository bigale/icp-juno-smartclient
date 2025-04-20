import React from 'react';
import { FormItemEditProxy, FormItemEditProxyProps } from './FormItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolbarItemEditProxyProps extends FormItemEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolbarItemEditProxy wraps the SmartClient widget class
 * {@link isc.ToolbarItemEditProxy ToolbarItemEditProxy} for React, allowing you to import
 * ToolbarItemEditProxy for use in React JS and JSX.
 * @class
 * @extends FormItemEditProxy
 */
declare class ToolbarItemEditProxy extends FormItemEditProxy {
    props: AsComponentXML<ToolbarItemEditProxyProps>;
}
