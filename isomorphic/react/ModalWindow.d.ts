import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface ModalWindowProps extends WindowProps {

/**
 * See {@link isc.ModalWindow.autoCenter ModalWindow.autoCenter}.
 */
autoCenter?: boolean;

/**
 * See {@link isc.ModalWindow.width ModalWindow.width}.
 */
width?: number | string;

/**
 * See {@link isc.ModalWindow.height ModalWindow.height}.
 */
height?: number | string;

/**
 * See {@link isc.ModalWindow.visibility ModalWindow.visibility}.
 */
visibility?: string;

/**
 * See {@link isc.ModalWindow.editProxyConstructor ModalWindow.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.ModalWindow.maxHeight ModalWindow.maxHeight}.
 */
maxHeight?: number;

/**
 * See {@link isc.ModalWindow.isModal ModalWindow.isModal}.
 */
isModal?: boolean;

/**
 * See {@link isc.ModalWindow.maxWidth ModalWindow.maxWidth}.
 */
maxWidth?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ModalWindow wraps the SmartClient widget class
 * {@link isc.ModalWindow ModalWindow} for React, allowing you to import
 * ModalWindow for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class ModalWindow extends Window {
    props: AsComponentXML<ModalWindowProps>;
}
