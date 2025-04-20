import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CriteriaProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Criteria wraps the SmartClient object
 * {@link isc.Criteria Criteria} for React, allowing you to import
 * Criteria for use in React JS and JSX.
 * @class
 */
declare class Criteria extends ILogicalComponent {
    props: AsComponentXML<CriteriaProps>;
}
