import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface InlineWindowProps extends WindowProps {

/**
 * See {@link isc.InlineWindow.editProxyConstructor InlineWindow.editProxyConstructor}.
 */
editProxyConstructor?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * InlineWindow wraps the SmartClient widget class
 * {@link isc.InlineWindow InlineWindow} for React, allowing you to import
 * InlineWindow for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class InlineWindow extends Window {
    props: AsComponentXML<InlineWindowProps>;
}
