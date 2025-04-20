import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface OperatorProps {

/**
 * See {@link isc.Operator.hidden Operator.hidden}.
 */
hidden?: boolean;

/**
 * See {@link isc.Operator.fieldTypes Operator.fieldTypes}.
 */
fieldTypes?: string[];

/**
 * See {@link isc.Operator.titleProperty Operator.titleProperty}.
 */
titleProperty?: string;

/**
 * See {@link isc.Operator.ID Operator.ID}.
 */
ID?: string;

/**
 * See {@link isc.Operator.textTitle Operator.textTitle}.
 */
textTitle?: string;

/**
 * See {@link isc.Operator.title Operator.title}.
 */
title?: string;

/**
 * See {@link isc.Operator.compareCriteria() Operator.compareCriteria()}.
 */
compareCriteria?: Function;

/**
 * See {@link isc.Operator.getCriterion() Operator.getCriterion()}.
 */
getCriterion?: Function;

/**
 * See {@link isc.Operator.editorType Operator.editorType}.
 */
editorType?: string;

/**
 * See {@link isc.Operator.symbol Operator.symbol}.
 */
symbol?: string;

/**
 * See {@link isc.Operator.requiresServer Operator.requiresServer}.
 */
requiresServer?: boolean;

/**
 * See {@link isc.Operator.valueType Operator.valueType}.
 */
valueType?: string;

/**
 * See {@link isc.Operator.usageHint Operator.usageHint}.
 */
usageHint?: string;

/**
 * See {@link isc.Operator.textTitleProperty Operator.textTitleProperty}.
 */
textTitleProperty?: string;

/**
 * See {@link isc.Operator.condition() Operator.condition()}.
 */
condition?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Operator wraps the SmartClient object
 * {@link isc.Operator Operator} for React, allowing you to import
 * Operator for use in React JS and JSX.
 * @class
 */
declare class Operator extends ILogicalComponent {
    props: AsComponentXML<OperatorProps>;
}
