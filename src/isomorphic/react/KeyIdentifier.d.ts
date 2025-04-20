import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface KeyIdentifierProps {

/**
 * See {@link isc.KeyIdentifier.altKey KeyIdentifier.altKey}.
 */
altKey?: boolean;

/**
 * See {@link isc.KeyIdentifier.shiftKey KeyIdentifier.shiftKey}.
 */
shiftKey?: boolean;

/**
 * See {@link isc.KeyIdentifier.keyName KeyIdentifier.keyName}.
 */
keyName?: string;

/**
 * See {@link isc.KeyIdentifier.ctrlKey KeyIdentifier.ctrlKey}.
 */
ctrlKey?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * KeyIdentifier wraps the SmartClient object
 * {@link isc.KeyIdentifier KeyIdentifier} for React, allowing you to import
 * KeyIdentifier for use in React JS and JSX.
 * @class
 */
declare class KeyIdentifier extends ILogicalComponent {
    props: AsComponentXML<KeyIdentifierProps>;
}
