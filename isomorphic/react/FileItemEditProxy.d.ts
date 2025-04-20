import React from 'react';
import { FormItemEditProxy, FormItemEditProxyProps } from './FormItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface FileItemEditProxyProps extends FormItemEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FileItemEditProxy wraps the SmartClient widget class
 * {@link isc.FileItemEditProxy FileItemEditProxy} for React, allowing you to import
 * FileItemEditProxy for use in React JS and JSX.
 * @class
 * @extends FormItemEditProxy
 */
declare class FileItemEditProxy extends FormItemEditProxy {
    props: AsComponentXML<FileItemEditProxyProps>;
}
