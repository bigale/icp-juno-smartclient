import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SerializationContextProps {

/**
 * See {@link isc.SerializationContext.useFlatFields SerializationContext.useFlatFields}.
 */
useFlatFields?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SerializationContext wraps the SmartClient object
 * {@link isc.SerializationContext SerializationContext} for React, allowing you to import
 * SerializationContext for use in React JS and JSX.
 * @class
 */
declare class SerializationContext extends ILogicalComponent {
    props: AsComponentXML<SerializationContextProps>;
}
