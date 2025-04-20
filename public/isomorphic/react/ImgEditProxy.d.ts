import React from 'react';
import { StatefulCanvasEditProxy, StatefulCanvasEditProxyProps } from './StatefulCanvasEditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface ImgEditProxyProps extends StatefulCanvasEditProxyProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ImgEditProxy wraps the SmartClient widget class
 * {@link isc.ImgEditProxy ImgEditProxy} for React, allowing you to import
 * ImgEditProxy for use in React JS and JSX.
 * @class
 * @extends StatefulCanvasEditProxy
 */
declare class ImgEditProxy extends StatefulCanvasEditProxy {
    props: AsComponentXML<ImgEditProxyProps>;
}
