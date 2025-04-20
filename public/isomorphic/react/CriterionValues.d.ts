import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CriterionValuesProps {

/**
 * See {@link isc.CriterionValues.otherValue CriterionValues.otherValue}.
 */
otherValue?: any;

/**
 * See {@link isc.CriterionValues.end CriterionValues.end}.
 */
end?: any;

/**
 * See {@link isc.CriterionValues.value CriterionValues.value}.
 */
value?: any;

/**
 * See {@link isc.CriterionValues.start CriterionValues.start}.
 */
start?: any;

/**
 * See {@link isc.CriterionValues.criterion CriterionValues.criterion}.
 */
criterion?: Criterion;

/**
 * See {@link isc.CriterionValues.record CriterionValues.record}.
 */
record?: Record;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CriterionValues wraps the SmartClient object
 * {@link isc.CriterionValues CriterionValues} for React, allowing you to import
 * CriterionValues for use in React JS and JSX.
 * @class
 */
declare class CriterionValues extends ILogicalComponent {
    props: AsComponentXML<CriterionValuesProps>;
}
