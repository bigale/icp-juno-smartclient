import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SCStatefulImgConfigProps {

/**
 * See {@link isc.SCStatefulImgConfig.Selected SCStatefulImgConfig.Selected}.
 */
Selected?: string;

/**
 * See {@link isc.SCStatefulImgConfig.SelectedDown SCStatefulImgConfig.SelectedDown}.
 */
SelectedDown?: string;

/**
 * See {@link isc.SCStatefulImgConfig.SelectedOver SCStatefulImgConfig.SelectedOver}.
 */
SelectedOver?: string;

/**
 * See {@link isc.SCStatefulImgConfig.FocusedOver SCStatefulImgConfig.FocusedOver}.
 */
FocusedOver?: string;

/**
 * See {@link isc.SCStatefulImgConfig.Down SCStatefulImgConfig.Down}.
 */
Down?: string;

/**
 * See {@link isc.SCStatefulImgConfig.SelectedFocused SCStatefulImgConfig.SelectedFocused}.
 */
SelectedFocused?: string;

/**
 * See {@link isc.SCStatefulImgConfig.Over SCStatefulImgConfig.Over}.
 */
Over?: string;

/**
 * See {@link isc.SCStatefulImgConfig.SelectedFocusedOver SCStatefulImgConfig.SelectedFocusedOver}.
 */
SelectedFocusedOver?: string;

/**
 * See {@link isc.SCStatefulImgConfig.SelectedFocusedDown SCStatefulImgConfig.SelectedFocusedDown}.
 */
SelectedFocusedDown?: string;

/**
 * See {@link isc.SCStatefulImgConfig.Focused SCStatefulImgConfig.Focused}.
 */
Focused?: string;

/**
 * See {@link isc.SCStatefulImgConfig.FocusedDown SCStatefulImgConfig.FocusedDown}.
 */
FocusedDown?: string;

/**
 * See {@link isc.SCStatefulImgConfig.Disabled SCStatefulImgConfig.Disabled}.
 */
Disabled?: string;

/**
 * See {@link isc.SCStatefulImgConfig.SelectedDisabled SCStatefulImgConfig.SelectedDisabled}.
 */
SelectedDisabled?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SCStatefulImgConfig wraps the SmartClient object
 * {@link isc.SCStatefulImgConfig SCStatefulImgConfig} for React, allowing you to import
 * SCStatefulImgConfig for use in React JS and JSX.
 * @class
 */
declare class SCStatefulImgConfig extends ILogicalComponent {
    props: AsComponentXML<SCStatefulImgConfigProps>;
}
