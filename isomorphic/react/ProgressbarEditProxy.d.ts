import React from 'react';
import { StatefulCanvasEditProxy, StatefulCanvasEditProxyProps } from './StatefulCanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface ProgressbarEditProxyProps extends StatefulCanvasEditProxyProps {

/**
 * See {@link isc.ProgressbarEditProxy.setInlineEditText() ProgressbarEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.ProgressbarEditProxy.getInlineEditText() ProgressbarEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ProgressbarEditProxy wraps the SmartClient widget class
 * {@link isc.ProgressbarEditProxy ProgressbarEditProxy} for React, allowing you to import
 * ProgressbarEditProxy for use in React JS and JSX.
 * @class
 * @extends StatefulCanvasEditProxy
 */
declare class ProgressbarEditProxy extends StatefulCanvasEditProxy {
    props: AsComponentXML<ProgressbarEditProxyProps>;
}
