import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ValidatorProps {

/**
 * See {@link isc.Validator.caseSensitive Validator.caseSensitive}.
 */
caseSensitive?: boolean;

/**
 * See {@link isc.Validator.errorMessage Validator.errorMessage}.
 */
errorMessage?: string;

/**
 * See {@link isc.Validator.validateOnChange Validator.validateOnChange}.
 */
validateOnChange?: boolean;

/**
 * See {@link isc.Validator.stopOnError Validator.stopOnError}.
 */
stopOnError?: boolean;

/**
 * See {@link isc.Validator.applyWhen Validator.applyWhen}.
 */
applyWhen?: AdvancedCriteria;

/**
 * See {@link isc.Validator.serverCondition Validator.serverCondition}.
 */
serverCondition?: string;

/**
 * See {@link isc.Validator.checkComponentData Validator.checkComponentData}.
 */
checkComponentData?: string;

/**
 * See {@link isc.Validator.stopIfFalse Validator.stopIfFalse}.
 */
stopIfFalse?: boolean;

/**
 * See {@link isc.Validator.exclusive Validator.exclusive}.
 */
exclusive?: boolean;

/**
 * See {@link isc.Validator.type Validator.type}.
 */
type?: string | string;

/**
 * See {@link isc.Validator.serverOnly Validator.serverOnly}.
 */
serverOnly?: boolean;

/**
 * See {@link isc.Validator.clientOnly Validator.clientOnly}.
 */
clientOnly?: boolean;

/**
 * See {@link isc.Validator.condition Validator.condition}.
 */
condition?: string;

/**
 * See {@link isc.Validator.min Validator.min}.
 */
min?: any;

/**
 * See {@link isc.Validator.serverObject Validator.serverObject}.
 */
serverObject?: ServerObject;

/**
 * See {@link isc.Validator.operationId Validator.operationId}.
 */
operationId?: string;

/**
 * See {@link isc.Validator.max Validator.max}.
 */
max?: any;

/**
 * See {@link isc.Validator.resultingValue Validator.resultingValue}.
 */
resultingValue?: Object;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Validator wraps the non-rendered SmartClient class
 * {@link isc.Validator Validator} for React, allowing you to import
 *  Validator for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class Validator extends ILogicalComponent {
    props: AsComponentXML<ValidatorProps>;
}
