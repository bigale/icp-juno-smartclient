import React from 'react';
import { LayoutEditProxy, LayoutEditProxyProps } from './LayoutEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface SplitPaneEditProxyProps extends LayoutEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SplitPaneEditProxy wraps the SmartClient widget class
 * {@link isc.SplitPaneEditProxy SplitPaneEditProxy} for React, allowing you to import
 * SplitPaneEditProxy for use in React JS and JSX.
 * @class
 * @extends LayoutEditProxy
 */
declare class SplitPaneEditProxy extends LayoutEditProxy {
    props: AsComponentXML<SplitPaneEditProxyProps>;
}
