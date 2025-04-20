import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface LoadingIndicatorSettingsProps {

/**
 * See {@link isc.LoadingIndicatorSettings.imageStyle LoadingIndicatorSettings.imageStyle}.
 */
imageStyle?: string;

/**
 * See {@link isc.LoadingIndicatorSettings.textStyle LoadingIndicatorSettings.textStyle}.
 */
textStyle?: string;

/**
 * See {@link isc.LoadingIndicatorSettings.imageHeight LoadingIndicatorSettings.imageHeight}.
 */
imageHeight?: number;

/**
 * See {@link isc.LoadingIndicatorSettings.image LoadingIndicatorSettings.image}.
 */
image?: string;

/**
 * See {@link isc.LoadingIndicatorSettings.style LoadingIndicatorSettings.style}.
 */
style?: string;

/**
 * See {@link isc.LoadingIndicatorSettings.target LoadingIndicatorSettings.target}.
 */
target?: number[];

/**
 * See {@link isc.LoadingIndicatorSettings.zIndex LoadingIndicatorSettings.zIndex}.
 */
zIndex?: number;

/**
 * See {@link isc.LoadingIndicatorSettings.imageWidth LoadingIndicatorSettings.imageWidth}.
 */
imageWidth?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * LoadingIndicatorSettings wraps the SmartClient object
 * {@link isc.LoadingIndicatorSettings LoadingIndicatorSettings} for React, allowing you to import
 * LoadingIndicatorSettings for use in React JS and JSX.
 * @class
 */
declare class LoadingIndicatorSettings extends ILogicalComponent {
    props: AsComponentXML<LoadingIndicatorSettingsProps>;
}
