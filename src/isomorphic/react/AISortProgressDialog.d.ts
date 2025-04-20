import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface AISortProgressDialogProps extends WindowProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AISortProgressDialog wraps the SmartClient widget class
 * {@link isc.AISortProgressDialog AISortProgressDialog} for React, allowing you to import
 * AISortProgressDialog for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class AISortProgressDialog extends Window {
    props: AsComponentXML<AISortProgressDialogProps>;
}
