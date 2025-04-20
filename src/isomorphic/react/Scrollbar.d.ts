import React from 'react';
import { StretchImg, StretchImgProps } from './StretchImg';
import { AsComponentXML } from './core/ReactComponent';


declare interface ScrollbarProps extends StretchImgProps {

/**
 * See {@link isc.Scrollbar.cornerSize Scrollbar.cornerSize}.
 */
cornerSize?: number;

/**
 * See {@link isc.Scrollbar.trackStartImg Scrollbar.trackStartImg}.
 */
trackStartImg?: StretchItem;

/**
 * See {@link isc.Scrollbar.skinImgDir Scrollbar.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.Scrollbar.endImg Scrollbar.endImg}.
 */
endImg?: StretchItem;

/**
 * See {@link isc.Scrollbar.scrollTarget Scrollbar.scrollTarget}.
 */
scrollTarget?: Canvas;

/**
 * See {@link isc.Scrollbar.btnSize Scrollbar.btnSize}.
 */
btnSize?: number;

/**
 * See {@link isc.Scrollbar.trackImg Scrollbar.trackImg}.
 */
trackImg?: StretchItem;

/**
 * See {@link isc.Scrollbar.cornerImg Scrollbar.cornerImg}.
 */
cornerImg?: StretchItem;

/**
 * See {@link isc.Scrollbar.trackEndWidth Scrollbar.trackEndWidth}.
 */
trackEndWidth?: number;

/**
 * See {@link isc.Scrollbar.autoEnable Scrollbar.autoEnable}.
 */
autoEnable?: boolean;

/**
 * See {@link isc.Scrollbar.showCorner Scrollbar.showCorner}.
 */
showCorner?: boolean;

/**
 * See {@link isc.Scrollbar.trackEndHeight Scrollbar.trackEndHeight}.
 */
trackEndHeight?: number;

/**
 * See {@link isc.Scrollbar.allowThumbDownState Scrollbar.allowThumbDownState}.
 */
allowThumbDownState?: boolean;

/**
 * See {@link isc.Scrollbar.allowThumbOverState Scrollbar.allowThumbOverState}.
 */
allowThumbOverState?: boolean;

/**
 * See {@link isc.Scrollbar.trackEndImg Scrollbar.trackEndImg}.
 */
trackEndImg?: StretchItem;

/**
 * See {@link isc.Scrollbar.thumbInset Scrollbar.thumbInset}.
 */
thumbInset?: number;

/**
 * See {@link isc.Scrollbar.showTrackEnds Scrollbar.showTrackEnds}.
 */
showTrackEnds?: boolean;

/**
 * See {@link isc.Scrollbar.showTrackButtons Scrollbar.showTrackButtons}.
 */
showTrackButtons?: boolean;

/**
 * See {@link isc.Scrollbar.cornerSrc Scrollbar.cornerSrc}.
 */
cornerSrc?: string;

/**
 * See {@link isc.Scrollbar.startThumbOverlap Scrollbar.startThumbOverlap}.
 */
startThumbOverlap?: number;

/**
 * See {@link isc.Scrollbar.endThumbOverlap Scrollbar.endThumbOverlap}.
 */
endThumbOverlap?: number;

/**
 * See {@link isc.Scrollbar.startImg Scrollbar.startImg}.
 */
startImg?: StretchItem;

/**
 * See {@link isc.Scrollbar.hSrc Scrollbar.hSrc}.
 */
hSrc?: string;

/**
 * See {@link isc.Scrollbar.vSrc Scrollbar.vSrc}.
 */
vSrc?: string;

/**
 * See {@link isc.Scrollbar.thumbOverlap Scrollbar.thumbOverlap}.
 */
thumbOverlap?: number;

/**
 * See {@link isc.Scrollbar.thumbMinSize Scrollbar.thumbMinSize}.
 */
thumbMinSize?: number;

/**
 * See {@link isc.Scrollbar.setScrollTarget() Scrollbar.setScrollTarget()}.
 */
setScrollTarget?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Scrollbar wraps the SmartClient widget class
 * {@link isc.Scrollbar Scrollbar} for React, allowing you to import
 * Scrollbar for use in React JS and JSX.
 * @class
 * @extends StretchImg
 */
declare class Scrollbar extends StretchImg {
    props: AsComponentXML<ScrollbarProps>;
}
