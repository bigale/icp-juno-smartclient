import React from 'react';
import { MultiDecisionTask, MultiDecisionTaskProps } from './MultiDecisionTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface DecisionGatewayProps extends MultiDecisionTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DecisionGateway wraps the SmartClient widget class
 * {@link isc.DecisionGateway DecisionGateway} for React, allowing you to import
 * DecisionGateway for use in React JS and JSX.
 * @class
 * @extends MultiDecisionTask
 */
declare class DecisionGateway extends MultiDecisionTask {
    props: AsComponentXML<DecisionGatewayProps>;
}
