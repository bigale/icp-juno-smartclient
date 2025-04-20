import React from 'react';
import { TextItemEditProxy, TextItemEditProxyProps } from './TextItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface TextAreaItemEditProxyProps extends TextItemEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TextAreaItemEditProxy wraps the SmartClient widget class
 * {@link isc.TextAreaItemEditProxy TextAreaItemEditProxy} for React, allowing you to import
 * TextAreaItemEditProxy for use in React JS and JSX.
 * @class
 * @extends TextItemEditProxy
 */
declare class TextAreaItemEditProxy extends TextItemEditProxy {
    props: AsComponentXML<TextAreaItemEditProxyProps>;
}
