import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CriteriaOutputSettingsProps {

/**
 * See {@link isc.CriteriaOutputSettings.suffix CriteriaOutputSettings.suffix}.
 */
suffix?: string;

/**
 * See {@link isc.CriteriaOutputSettings.textMatchStyle CriteriaOutputSettings.textMatchStyle}.
 */
textMatchStyle?: string;

/**
 * See {@link isc.CriteriaOutputSettings.prefix CriteriaOutputSettings.prefix}.
 */
prefix?: string;

/**
 * See {@link isc.CriteriaOutputSettings.escapeHTML CriteriaOutputSettings.escapeHTML}.
 */
escapeHTML?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CriteriaOutputSettings wraps the SmartClient object
 * {@link isc.CriteriaOutputSettings CriteriaOutputSettings} for React, allowing you to import
 * CriteriaOutputSettings for use in React JS and JSX.
 * @class
 */
declare class CriteriaOutputSettings extends ILogicalComponent {
    props: AsComponentXML<CriteriaOutputSettingsProps>;
}
