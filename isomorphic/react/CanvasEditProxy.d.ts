import React from 'react';
import { EditProxy, EditProxyProps } from './EditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface CanvasEditProxyProps extends EditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CanvasEditProxy wraps the SmartClient widget class
 * {@link isc.CanvasEditProxy CanvasEditProxy} for React, allowing you to import
 * CanvasEditProxy for use in React JS and JSX.
 * @class
 * @extends EditProxy
 */
declare class CanvasEditProxy extends EditProxy {
    props: AsComponentXML<CanvasEditProxyProps>;
}
