import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PointerSettingsProps {

/**
 * See {@link isc.PointerSettings.showShadow PointerSettings.showShadow}.
 */
showShadow?: boolean;

/**
 * See {@link isc.PointerSettings.cornerOffset PointerSettings.cornerOffset}.
 */
cornerOffset?: number;

/**
 * See {@link isc.PointerSettings.snapOffsetLeft PointerSettings.snapOffsetLeft}.
 */
snapOffsetLeft?: number;

/**
 * See {@link isc.PointerSettings.color PointerSettings.color}.
 */
color?: string;

/**
 * See {@link isc.PointerSettings.targetSnapTo PointerSettings.targetSnapTo}.
 */
targetSnapTo?: string;

/**
 * See {@link isc.PointerSettings.targetOffsetTop PointerSettings.targetOffsetTop}.
 */
targetOffsetTop?: number;

/**
 * See {@link isc.PointerSettings.snapOffsetTop PointerSettings.snapOffsetTop}.
 */
snapOffsetTop?: number;

/**
 * See {@link isc.PointerSettings.snapTo PointerSettings.snapTo}.
 */
snapTo?: string;

/**
 * See {@link isc.PointerSettings.targetOffsetInto PointerSettings.targetOffsetInto}.
 */
targetOffsetInto?: number;

/**
 * See {@link isc.PointerSettings.targetOffsetLeft PointerSettings.targetOffsetLeft}.
 */
targetOffsetLeft?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PointerSettings wraps the SmartClient object
 * {@link isc.PointerSettings PointerSettings} for React, allowing you to import
 * PointerSettings for use in React JS and JSX.
 * @class
 */
declare class PointerSettings extends ILogicalComponent {
    props: AsComponentXML<PointerSettingsProps>;
}
