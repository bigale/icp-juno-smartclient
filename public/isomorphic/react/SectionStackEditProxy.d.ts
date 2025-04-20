import React from 'react';
import { LayoutEditProxy, LayoutEditProxyProps } from './LayoutEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface SectionStackEditProxyProps extends LayoutEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SectionStackEditProxy wraps the SmartClient widget class
 * {@link isc.SectionStackEditProxy SectionStackEditProxy} for React, allowing you to import
 * SectionStackEditProxy for use in React JS and JSX.
 * @class
 * @extends LayoutEditProxy
 */
declare class SectionStackEditProxy extends LayoutEditProxy {
    props: AsComponentXML<SectionStackEditProxyProps>;
}
