import React from 'react';
import { CanvasEditProxy, CanvasEditProxyProps } from './CanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormEditProxyProps extends CanvasEditProxyProps {

/**
 * See {@link isc.FormEditProxy.selectItemsMode FormEditProxy.selectItemsMode}.
 */
selectItemsMode?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormEditProxy wraps the SmartClient widget class
 * {@link isc.FormEditProxy FormEditProxy} for React, allowing you to import
 * FormEditProxy for use in React JS and JSX.
 * @class
 * @extends CanvasEditProxy
 */
declare class FormEditProxy extends CanvasEditProxy {
    props: AsComponentXML<FormEditProxyProps>;
}
