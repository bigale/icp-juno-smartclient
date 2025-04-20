import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CriterionProps {

/**
 * See {@link isc.Criterion.operator Criterion.operator}.
 */
operator?: string;

/**
 * See {@link isc.Criterion.fieldName Criterion.fieldName}.
 */
fieldName?: string;

/**
 * See {@link isc.Criterion.valuePath Criterion.valuePath}.
 */
valuePath?: string;

/**
 * See {@link isc.Criterion.end Criterion.end}.
 */
end?: any;

/**
 * See {@link isc.Criterion.start Criterion.start}.
 */
start?: any;

/**
 * See {@link isc.Criterion.criteria Criterion.criteria}.
 */
criteria?: Criterion[];

/**
 * See {@link isc.Criterion.value Criterion.value}.
 */
value?: any;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Criterion wraps the SmartClient object
 * {@link isc.Criterion Criterion} for React, allowing you to import
 * Criterion for use in React JS and JSX.
 * @class
 */
declare class Criterion extends ILogicalComponent {
    props: AsComponentXML<CriterionProps>;
}
