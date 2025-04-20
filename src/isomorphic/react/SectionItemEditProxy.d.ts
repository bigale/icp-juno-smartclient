import React from 'react';
import { TextItemEditProxy, TextItemEditProxyProps } from './TextItemEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface SectionItemEditProxyProps extends TextItemEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SectionItemEditProxy wraps the SmartClient widget class
 * {@link isc.SectionItemEditProxy SectionItemEditProxy} for React, allowing you to import
 * SectionItemEditProxy for use in React JS and JSX.
 * @class
 * @extends TextItemEditProxy
 */
declare class SectionItemEditProxy extends TextItemEditProxy {
    props: AsComponentXML<SectionItemEditProxyProps>;
}
