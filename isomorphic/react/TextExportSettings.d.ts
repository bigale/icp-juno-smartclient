import React from 'react';
import { TextSettings, TextSettingsProps } from './TextSettings';
import { AsComponentXML } from './core/ReactComponent';


declare interface TextExportSettingsProps extends TextSettingsProps {

/**
 * See {@link isc.TextExportSettings.lineSeparator TextExportSettings.lineSeparator}.
 */
lineSeparator?: string;

/**
 * See {@link isc.TextExportSettings.quoteValues TextExportSettings.quoteValues}.
 */
quoteValues?: boolean;

/**
 * See {@link isc.TextExportSettings.timeFormat TextExportSettings.timeFormat}.
 */
timeFormat?: string;

/**
 * See {@link isc.TextExportSettings.useDisplayValue TextExportSettings.useDisplayValue}.
 */
useDisplayValue?: boolean;

/**
 * See {@link isc.TextExportSettings.forceText TextExportSettings.forceText}.
 */
forceText?: string;

/**
 * See {@link isc.TextExportSettings.dateTimeFormat TextExportSettings.dateTimeFormat}.
 */
dateTimeFormat?: string;

/**
 * See {@link isc.TextExportSettings.nullValueText TextExportSettings.nullValueText}.
 */
nullValueText?: string;

/**
 * See {@link isc.TextExportSettings.dateFormat TextExportSettings.dateFormat}.
 */
dateFormat?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TextExportSettings wraps the SmartClient widget class
 * {@link isc.TextExportSettings TextExportSettings} for React, allowing you to import
 * TextExportSettings for use in React JS and JSX.
 * @class
 * @extends TextSettings
 */
declare class TextExportSettings extends TextSettings {
    props: AsComponentXML<TextExportSettingsProps>;
}
