import React from 'react';
import { EditProxy, EditProxyProps } from './EditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface LayoutResizeBarEditProxyProps extends EditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LayoutResizeBarEditProxy wraps the SmartClient widget class
 * {@link isc.LayoutResizeBarEditProxy LayoutResizeBarEditProxy} for React, allowing you to import
 * LayoutResizeBarEditProxy for use in React JS and JSX.
 * @class
 * @extends EditProxy
 */
declare class LayoutResizeBarEditProxy extends EditProxy {
    props: AsComponentXML<LayoutResizeBarEditProxyProps>;
}
