import React from 'react';
import { RemoteWindow, RemoteWindowProps } from './RemoteWindow';
import { AsComponentXML } from './core/ReactComponent';


declare interface OpenFinWindowProps extends RemoteWindowProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * OpenFinWindow wraps the SmartClient widget class
 * {@link isc.OpenFinWindow OpenFinWindow} for React, allowing you to import
 * OpenFinWindow for use in React JS and JSX.
 * @class
 * @extends RemoteWindow
 */
declare class OpenFinWindow extends RemoteWindow {
    props: AsComponentXML<OpenFinWindowProps>;
}
