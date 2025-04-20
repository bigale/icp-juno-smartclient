import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SummaryConfigurationProps {

/**
 * See {@link isc.SummaryConfiguration.badFormulaResultValue SummaryConfiguration.badFormulaResultValue}.
 */
badFormulaResultValue?: string;

/**
 * See {@link isc.SummaryConfiguration.invalidSummaryValue SummaryConfiguration.invalidSummaryValue}.
 */
invalidSummaryValue?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SummaryConfiguration wraps the SmartClient object
 * {@link isc.SummaryConfiguration SummaryConfiguration} for React, allowing you to import
 * SummaryConfiguration for use in React JS and JSX.
 * @class
 */
declare class SummaryConfiguration extends ILogicalComponent {
    props: AsComponentXML<SummaryConfigurationProps>;
}
