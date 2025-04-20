import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DSRequestModifierProps {

/**
 * See {@link isc.DSRequestModifier.fieldName DSRequestModifier.fieldName}.
 */
fieldName?: string;

/**
 * See {@link isc.DSRequestModifier.operator DSRequestModifier.operator}.
 */
operator?: string;

/**
 * See {@link isc.DSRequestModifier.start DSRequestModifier.start}.
 */
start?: string;

/**
 * See {@link isc.DSRequestModifier.end DSRequestModifier.end}.
 */
end?: string;

/**
 * See {@link isc.DSRequestModifier.value DSRequestModifier.value}.
 */
value?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DSRequestModifier wraps the SmartClient object
 * {@link isc.DSRequestModifier DSRequestModifier} for React, allowing you to import
 * DSRequestModifier for use in React JS and JSX.
 * @class
 */
declare class DSRequestModifier extends ILogicalComponent {
    props: AsComponentXML<DSRequestModifierProps>;
}
