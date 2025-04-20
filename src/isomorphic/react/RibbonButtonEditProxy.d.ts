import React from 'react';
import { StatefulCanvasEditProxy, StatefulCanvasEditProxyProps } from './StatefulCanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface RibbonButtonEditProxyProps extends StatefulCanvasEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RibbonButtonEditProxy wraps the SmartClient widget class
 * {@link isc.RibbonButtonEditProxy RibbonButtonEditProxy} for React, allowing you to import
 * RibbonButtonEditProxy for use in React JS and JSX.
 * @class
 * @extends StatefulCanvasEditProxy
 */
declare class RibbonButtonEditProxy extends StatefulCanvasEditProxy {
    props: AsComponentXML<RibbonButtonEditProxyProps>;
}
