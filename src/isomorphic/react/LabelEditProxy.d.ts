import React from 'react';
import { StatefulCanvasEditProxy, StatefulCanvasEditProxyProps } from './StatefulCanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface LabelEditProxyProps extends StatefulCanvasEditProxyProps {

/**
 * See {@link isc.LabelEditProxy.getInlineEditText() LabelEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;

/**
 * See {@link isc.LabelEditProxy.setInlineEditText() LabelEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LabelEditProxy wraps the SmartClient widget class
 * {@link isc.LabelEditProxy LabelEditProxy} for React, allowing you to import
 * LabelEditProxy for use in React JS and JSX.
 * @class
 * @extends StatefulCanvasEditProxy
 */
declare class LabelEditProxy extends StatefulCanvasEditProxy {
    props: AsComponentXML<LabelEditProxyProps>;
}
