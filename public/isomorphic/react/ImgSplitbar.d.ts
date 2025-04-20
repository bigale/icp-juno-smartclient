import React from 'react';
import { Img, ImgProps } from './Img';
import { AsComponentXML } from './core/ReactComponent';


declare interface ImgSplitbarProps extends ImgProps {

/**
 * See {@link isc.ImgSplitbar.src ImgSplitbar.src}.
 */
src?: string;

/**
 * See {@link isc.ImgSplitbar.vSrc ImgSplitbar.vSrc}.
 */
vSrc?: string;

/**
 * See {@link isc.ImgSplitbar.canCollapse ImgSplitbar.canCollapse}.
 */
canCollapse?: boolean;

/**
 * See {@link isc.ImgSplitbar.hSrc ImgSplitbar.hSrc}.
 */
hSrc?: string;

/**
 * See {@link isc.ImgSplitbar.canDrag ImgSplitbar.canDrag}.
 */
canDrag?: boolean;

/**
 * See {@link isc.ImgSplitbar.skinImgDir ImgSplitbar.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.ImgSplitbar.vertical ImgSplitbar.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.ImgSplitbar.target ImgSplitbar.target}.
 */
target?: Canvas;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ImgSplitbar wraps the SmartClient widget class
 * {@link isc.ImgSplitbar ImgSplitbar} for React, allowing you to import
 * ImgSplitbar for use in React JS and JSX.
 * @class
 * @extends Img
 */
declare class ImgSplitbar extends Img {
    props: AsComponentXML<ImgSplitbarProps>;
}
