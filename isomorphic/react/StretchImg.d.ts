import React from 'react';
import { StatefulCanvas, StatefulCanvasProps } from './StatefulCanvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface StretchImgProps extends StatefulCanvasProps {

/**
 * See {@link isc.StretchImg.ignoreRTL StretchImg.ignoreRTL}.
 */
ignoreRTL?: boolean;

/**
 * See {@link isc.StretchImg.setIgnoreRTL() StretchImg.setIgnoreRTL()}.
 */
setIgnoreRTL?: Function;

/**
 * See {@link isc.StretchImg.src StretchImg.src}.
 */
src?: string;

/**
 * See {@link isc.StretchImg.gripImgSuffix StretchImg.gripImgSuffix}.
 */
gripImgSuffix?: string;

/**
 * See {@link isc.StretchImg.capSize StretchImg.capSize}.
 */
capSize?: number;

/**
 * See {@link isc.StretchImg.setItems() StretchImg.setItems()}.
 */
setItems?: Function;

/**
 * See {@link isc.StretchImg.showRollOverGrip StretchImg.showRollOverGrip}.
 */
showRollOverGrip?: boolean;

/**
 * See {@link isc.StretchImg.showGrip StretchImg.showGrip}.
 */
showGrip?: boolean;

/**
 * See {@link isc.StretchImg.items StretchImg.items}.
 */
items?: StretchItem[];

/**
 * See {@link isc.StretchImg.setState() StretchImg.setState()}.
 */
setState?: Function;

/**
 * See {@link isc.StretchImg.itemBaseStyle StretchImg.itemBaseStyle}.
 */
itemBaseStyle?: string;

/**
 * See {@link isc.StretchImg.showDownGrip StretchImg.showDownGrip}.
 */
showDownGrip?: boolean;

/**
 * See {@link isc.StretchImg.vSrc StretchImg.vSrc}.
 */
vSrc?: string;

/**
 * See {@link isc.StretchImg.setSrc() StretchImg.setSrc()}.
 */
setSrc?: Function;

/**
 * See {@link isc.StretchImg.showTitle StretchImg.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.StretchImg.imageType StretchImg.imageType}.
 */
imageType?: string;

/**
 * See {@link isc.StretchImg.hSrc StretchImg.hSrc}.
 */
hSrc?: string;

/**
 * See {@link isc.StretchImg.vertical StretchImg.vertical}.
 */
vertical?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StretchImg wraps the SmartClient widget class
 * {@link isc.StretchImg StretchImg} for React, allowing you to import
 * StretchImg for use in React JS and JSX.
 * @class
 * @extends StatefulCanvas
 */
declare class StretchImg extends StatefulCanvas {
    props: AsComponentXML<StretchImgProps>;
}
