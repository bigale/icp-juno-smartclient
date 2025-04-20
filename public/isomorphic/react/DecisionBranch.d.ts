import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DecisionBranchProps {

/**
 * See {@link isc.DecisionBranch.targetTask DecisionBranch.targetTask}.
 */
targetTask?: string;

/**
 * See {@link isc.DecisionBranch.criteria DecisionBranch.criteria}.
 */
criteria?: Criteria;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DecisionBranch wraps the SmartClient object
 * {@link isc.DecisionBranch DecisionBranch} for React, allowing you to import
 * DecisionBranch for use in React JS and JSX.
 * @class
 */
declare class DecisionBranch extends ILogicalComponent {
    props: AsComponentXML<DecisionBranchProps>;
}
