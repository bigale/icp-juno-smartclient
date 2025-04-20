import React from 'react';
import { Splitbar, SplitbarProps } from './Splitbar';
import { AsComponentXML } from './core/ReactComponent';


declare interface SnapbarProps extends SplitbarProps {

/**
 * See {@link isc.Snapbar.showDown Snapbar.showDown}.
 */
showDown?: boolean;

/**
 * See {@link isc.Snapbar.showRollOver Snapbar.showRollOver}.
 */
showRollOver?: boolean;

/**
 * See {@link isc.Snapbar.showClosedGrip Snapbar.showClosedGrip}.
 */
showClosedGrip?: boolean;

/**
 * See {@link isc.Snapbar.gripImgSuffix Snapbar.gripImgSuffix}.
 */
gripImgSuffix?: string;

/**
 * See {@link isc.Snapbar.showGrip Snapbar.showGrip}.
 */
showGrip?: boolean;

/**
 * See {@link isc.Snapbar.showRollOverGrip Snapbar.showRollOverGrip}.
 */
showRollOverGrip?: boolean;

/**
 * See {@link isc.Snapbar.showDownGrip Snapbar.showDownGrip}.
 */
showDownGrip?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Snapbar wraps the SmartClient widget class
 * {@link isc.Snapbar Snapbar} for React, allowing you to import
 * Snapbar for use in React JS and JSX.
 * @class
 * @extends Splitbar
 */
declare class Snapbar extends Splitbar {
    props: AsComponentXML<SnapbarProps>;
}
