import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface PlaceholderDefaultsProps {

/**
 * See {@link isc.PlaceholderDefaults.placeholderFor PlaceholderDefaults.placeholderFor}.
 */
placeholderFor?: string;

/**
 * See {@link isc.PlaceholderDefaults.requiredProperties PlaceholderDefaults.requiredProperties}.
 */
requiredProperties?: string;

/**
 * See {@link isc.PlaceholderDefaults.image PlaceholderDefaults.image}.
 */
image?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PlaceholderDefaults wraps the SmartClient object
 * {@link isc.PlaceholderDefaults PlaceholderDefaults} for React, allowing you to import
 * PlaceholderDefaults for use in React JS and JSX.
 * @class
 */
declare class PlaceholderDefaults extends ILogicalComponent {
    props: AsComponentXML<PlaceholderDefaultsProps>;
}
