import React from 'react';
import { Criterion, CriterionProps } from './Criterion';
import { AsComponentXML } from './core/ReactComponent';


declare interface AdvancedCriteriaProps extends CriterionProps {

/**
 * See {@link isc.AdvancedCriteria.strictSQLFiltering AdvancedCriteria.strictSQLFiltering}.
 */
strictSQLFiltering?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AdvancedCriteria wraps the SmartClient object
 * {@link isc.AdvancedCriteria AdvancedCriteria} for React, allowing you to import
 * AdvancedCriteria for use in React JS and JSX.
 * @class
 */
declare class AdvancedCriteria extends Criterion {
    props: AsComponentXML<AdvancedCriteriaProps>;
}
