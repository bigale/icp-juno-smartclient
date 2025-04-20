import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ValidatorDefinitionProps {

/**
 * See {@link isc.ValidatorDefinition.action ValidatorDefinition.action}.
 */
action?: string;

/**
 * See {@link isc.ValidatorDefinition.condition ValidatorDefinition.condition}.
 */
condition?: string;

/**
 * See {@link isc.ValidatorDefinition.shortName ValidatorDefinition.shortName}.
 */
shortName?: string;

/**
 * See {@link isc.ValidatorDefinition.type ValidatorDefinition.type}.
 */
type?: string;

/**
 * See {@link isc.ValidatorDefinition.requiresServer ValidatorDefinition.requiresServer}.
 */
requiresServer?: boolean;

/**
 * See {@link isc.ValidatorDefinition.defaultErrorMessage ValidatorDefinition.defaultErrorMessage}.
 */
defaultErrorMessage?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ValidatorDefinition wraps the SmartClient object
 * {@link isc.ValidatorDefinition ValidatorDefinition} for React, allowing you to import
 * ValidatorDefinition for use in React JS and JSX.
 * @class
 */
declare class ValidatorDefinition extends ILogicalComponent {
    props: AsComponentXML<ValidatorDefinitionProps>;
}
