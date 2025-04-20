import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface AutoTestLocatorConfigurationProps {

/**
 * See {@link isc.AutoTestLocatorConfiguration.searchSegmentsIncludeHidden AutoTestLocatorConfiguration.searchSegmentsIncludeHidden}.
 */
searchSegmentsIncludeHidden?: boolean;

/**
 * See {@link isc.AutoTestLocatorConfiguration.useMinimalFallbackAttributes AutoTestLocatorConfiguration.useMinimalFallbackAttributes}.
 */
useMinimalFallbackAttributes?: boolean;

/**
 * See {@link isc.AutoTestLocatorConfiguration.useIDsAsLocators AutoTestLocatorConfiguration.useIDsAsLocators}.
 */
useIDsAsLocators?: boolean;

/**
 * See {@link isc.AutoTestLocatorConfiguration.useSearchSegments AutoTestLocatorConfiguration.useSearchSegments}.
 */
useSearchSegments?: boolean;

/**
 * See {@link isc.AutoTestLocatorConfiguration.useCompactFallbackSyntax AutoTestLocatorConfiguration.useCompactFallbackSyntax}.
 */
useCompactFallbackSyntax?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AutoTestLocatorConfiguration wraps the SmartClient object
 * {@link isc.AutoTestLocatorConfiguration AutoTestLocatorConfiguration} for React, allowing you to import
 * AutoTestLocatorConfiguration for use in React JS and JSX.
 * @class
 */
declare class AutoTestLocatorConfiguration extends ILogicalComponent {
    props: AsComponentXML<AutoTestLocatorConfigurationProps>;
}
