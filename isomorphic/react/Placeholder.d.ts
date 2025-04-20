import React from 'react';
import { Label, LabelProps } from './Label';
import { AsComponentXML } from './core/ReactComponent';


declare interface PlaceholderProps extends LabelProps {

/**
 * See {@link isc.Placeholder.placeholderDefaults Placeholder.placeholderDefaults}.
 */
placeholderDefaults?: PlaceholderDefaults;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Placeholder wraps the SmartClient widget class
 * {@link isc.Placeholder Placeholder} for React, allowing you to import
 * Placeholder for use in React JS and JSX.
 * @class
 * @extends Label
 */
declare class Placeholder extends Label {
    props: AsComponentXML<PlaceholderProps>;
}
