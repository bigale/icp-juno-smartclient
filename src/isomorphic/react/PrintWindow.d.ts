import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface PrintWindowProps extends WindowProps {

/**
 * See {@link isc.PrintWindow.printButtonTitle PrintWindow.printButtonTitle}.
 */
printButtonTitle?: string;

/**
 * See {@link isc.PrintWindow.title PrintWindow.title}.
 */
title?: string;

/**
 * See {@link isc.PrintWindow.externalStylesheet PrintWindow.externalStylesheet}.
 */
externalStylesheet?: string;

/**
 * See {@link isc.PrintWindow.setPrintButtonTitle() PrintWindow.setPrintButtonTitle()}.
 */
setPrintButtonTitle?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PrintWindow wraps the SmartClient widget class
 * {@link isc.PrintWindow PrintWindow} for React, allowing you to import
 * PrintWindow for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class PrintWindow extends Window {
    props: AsComponentXML<PrintWindowProps>;
}
