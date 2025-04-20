import React from 'react';
import { DecisionTask, DecisionTaskProps } from './DecisionTask';
import { AsComponentXML } from './core/ReactComponent';


declare interface XORGatewayProps extends DecisionTaskProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * XORGateway wraps the SmartClient widget class
 * {@link isc.XORGateway XORGateway} for React, allowing you to import
 * XORGateway for use in React JS and JSX.
 * @class
 * @extends DecisionTask
 */
declare class XORGateway extends DecisionTask {
    props: AsComponentXML<XORGatewayProps>;
}
