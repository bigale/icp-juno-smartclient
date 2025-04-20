import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIWindowProps extends WindowProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIWindow wraps the SmartClient widget class
 * {@link isc.AIWindow AIWindow} for React, allowing you to import
 * AIWindow for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class AIWindow extends Window {
    props: AsComponentXML<AIWindowProps>;
}
