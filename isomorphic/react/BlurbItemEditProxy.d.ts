import React from 'react';
import { TextItemEditProxy, TextItemEditProxyProps } from './TextItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface BlurbItemEditProxyProps extends TextItemEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * BlurbItemEditProxy wraps the SmartClient widget class
 * {@link isc.BlurbItemEditProxy BlurbItemEditProxy} for React, allowing you to import
 * BlurbItemEditProxy for use in React JS and JSX.
 * @class
 * @extends TextItemEditProxy
 */
declare class BlurbItemEditProxy extends TextItemEditProxy {
    props: AsComponentXML<BlurbItemEditProxyProps>;
}
