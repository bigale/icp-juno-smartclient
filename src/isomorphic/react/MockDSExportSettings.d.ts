import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MockDSExportSettingsProps {

/**
 * See {@link isc.MockDSExportSettings.includeCustomSimpleTypes MockDSExportSettings.includeCustomSimpleTypes}.
 */
includeCustomSimpleTypes?: boolean;

/**
 * See {@link isc.MockDSExportSettings.requestProperties MockDSExportSettings.requestProperties}.
 */
requestProperties?: DSRequest[] | DSRequest;

/**
 * See {@link isc.MockDSExportSettings.numLevels MockDSExportSettings.numLevels}.
 */
numLevels?: number;

/**
 * See {@link isc.MockDSExportSettings.includeImageFields MockDSExportSettings.includeImageFields}.
 */
includeImageFields?: boolean;

/**
 * See {@link isc.MockDSExportSettings.criteria MockDSExportSettings.criteria}.
 */
criteria?: Criteria;

/**
 * See {@link isc.MockDSExportSettings.validatorMode MockDSExportSettings.validatorMode}.
 */
validatorMode?: string;

/**
 * See {@link isc.MockDSExportSettings.format MockDSExportSettings.format}.
 */
format?: string;

/**
 * See {@link isc.MockDSExportSettings.rootCriteriaOnly MockDSExportSettings.rootCriteriaOnly}.
 */
rootCriteriaOnly?: boolean;

/**
 * See {@link isc.MockDSExportSettings.omitRelations MockDSExportSettings.omitRelations}.
 */
omitRelations?: string[];

/**
 * See {@link isc.MockDSExportSettings.numRows MockDSExportSettings.numRows}.
 */
numRows?: number;

/**
 * See {@link isc.MockDSExportSettings.includeFKs MockDSExportSettings.includeFKs}.
 */
includeFKs?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MockDSExportSettings wraps the SmartClient object
 * {@link isc.MockDSExportSettings MockDSExportSettings} for React, allowing you to import
 * MockDSExportSettings for use in React JS and JSX.
 * @class
 */
declare class MockDSExportSettings extends ILogicalComponent {
    props: AsComponentXML<MockDSExportSettingsProps>;
}
