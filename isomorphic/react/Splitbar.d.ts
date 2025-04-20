import React from 'react';
import { StretchImg, StretchImgProps } from './StretchImg';
import { AsComponentXML } from './core/ReactComponent';


declare interface SplitbarProps extends StretchImgProps {

/**
 * See {@link isc.Splitbar.showClosedGrip Splitbar.showClosedGrip}.
 */
showClosedGrip?: boolean;

/**
 * See {@link isc.Splitbar.canCollapse Splitbar.canCollapse}.
 */
canCollapse?: boolean;

/**
 * See {@link isc.Splitbar.vSrc Splitbar.vSrc}.
 */
vSrc?: string;

/**
 * See {@link isc.Splitbar.showDownGrip Splitbar.showDownGrip}.
 */
showDownGrip?: boolean;

/**
 * See {@link isc.Splitbar.vResizeCursor Splitbar.vResizeCursor}.
 */
vResizeCursor?: string;

/**
 * See {@link isc.Splitbar.targetAfter Splitbar.targetAfter}.
 */
targetAfter?: boolean;

/**
 * See {@link isc.Splitbar.canCollapseOnTap Splitbar.canCollapseOnTap}.
 */
canCollapseOnTap?: boolean;

/**
 * See {@link isc.Splitbar.capSize Splitbar.capSize}.
 */
capSize?: number;

/**
 * See {@link isc.Splitbar.src Splitbar.src}.
 */
src?: string;

/**
 * See {@link isc.Splitbar.skinImgDir Splitbar.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.Splitbar.vertical Splitbar.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.Splitbar.hResizeCursor Splitbar.hResizeCursor}.
 */
hResizeCursor?: string;

/**
 * See {@link isc.Splitbar.gripImgSuffix Splitbar.gripImgSuffix}.
 */
gripImgSuffix?: string;

/**
 * See {@link isc.Splitbar.showRollOverGrip Splitbar.showRollOverGrip}.
 */
showRollOverGrip?: boolean;

/**
 * See {@link isc.Splitbar.target Splitbar.target}.
 */
target?: Canvas;

/**
 * See {@link isc.Splitbar.showGrip Splitbar.showGrip}.
 */
showGrip?: boolean;

/**
 * See {@link isc.Splitbar.cursor Splitbar.cursor}.
 */
cursor?: string;

/**
 * See {@link isc.Splitbar.gripLength Splitbar.gripLength}.
 */
gripLength?: number;

/**
 * See {@link isc.Splitbar.invertClosedGripIfTargetAfter Splitbar.invertClosedGripIfTargetAfter}.
 */
invertClosedGripIfTargetAfter?: boolean;

/**
 * See {@link isc.Splitbar.gripBreadth Splitbar.gripBreadth}.
 */
gripBreadth?: number;

/**
 * See {@link isc.Splitbar.canDrag Splitbar.canDrag}.
 */
canDrag?: boolean;

/**
 * See {@link isc.Splitbar.hSrc Splitbar.hSrc}.
 */
hSrc?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Splitbar wraps the SmartClient widget class
 * {@link isc.Splitbar Splitbar} for React, allowing you to import
 * Splitbar for use in React JS and JSX.
 * @class
 * @extends StretchImg
 */
declare class Splitbar extends StretchImg {
    props: AsComponentXML<SplitbarProps>;
}
