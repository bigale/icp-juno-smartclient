import React from 'react';
import { StatefulCanvas, StatefulCanvasProps } from './StatefulCanvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface ImgProps extends StatefulCanvasProps {

/**
 * See {@link isc.Img.usePNGFix Img.usePNGFix}.
 */
usePNGFix?: boolean;

/**
 * See {@link isc.Img.prompt Img.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.Img.imageSize Img.imageSize}.
 */
imageSize?: number;

/**
 * See {@link isc.Img.src Img.src}.
 */
src?: string | SCStatefulImgConfig;

/**
 * See {@link isc.Img.imageType Img.imageType}.
 */
imageType?: string;

/**
 * See {@link isc.Img.setImageType() Img.setImageType()}.
 */
setImageType?: Function;

/**
 * See {@link isc.Img.size Img.size}.
 */
size?: number;

/**
 * See {@link isc.Img.showImageDown Img.showImageDown}.
 */
showImageDown?: boolean;

/**
 * See {@link isc.Img.showDisabled Img.showDisabled}.
 */
showDisabled?: boolean;

/**
 * See {@link isc.Img.showImageDisabled Img.showImageDisabled}.
 */
showImageDisabled?: boolean;

/**
 * See {@link isc.Img.showRollOver Img.showRollOver}.
 */
showRollOver?: boolean;

/**
 * See {@link isc.Img.showDown Img.showDown}.
 */
showDown?: boolean;

/**
 * See {@link isc.Img.editProxyConstructor Img.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.Img.altText Img.altText}.
 */
altText?: string;

/**
 * See {@link isc.Img.getHoverHTML() Img.getHoverHTML()}.
 */
getHoverHTML?: Function;

/**
 * See {@link isc.Img.imageWidth Img.imageWidth}.
 */
imageWidth?: number;

/**
 * See {@link isc.Img.showImageRollOver Img.showImageRollOver}.
 */
showImageRollOver?: boolean;

/**
 * See {@link isc.Img.showTitle Img.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.Img.showFocused Img.showFocused}.
 */
showFocused?: boolean;

/**
 * See {@link isc.Img.showImageFocused Img.showImageFocused}.
 */
showImageFocused?: boolean;

/**
 * See {@link isc.Img.name Img.name}.
 */
name?: string;

/**
 * See {@link isc.Img.setSrc() Img.setSrc()}.
 */
setSrc?: Function;

/**
 * See {@link isc.Img.imageHeight Img.imageHeight}.
 */
imageHeight?: number;

/**
 * See {@link isc.Img.showFocusedAsOver Img.showFocusedAsOver}.
 */
showFocusedAsOver?: boolean;

/**
 * See {@link isc.Img.resetSrc() Img.resetSrc()}.
 */
resetSrc?: Function;

/**
 * See {@link isc.Img.showImageFocusedAsOver Img.showImageFocusedAsOver}.
 */
showImageFocusedAsOver?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Img wraps the SmartClient widget class
 * {@link isc.Img Img} for React, allowing you to import
 * Img for use in React JS and JSX.
 * @class
 * @extends StatefulCanvas
 */
declare class Img extends StatefulCanvas {
    props: AsComponentXML<ImgProps>;
}
