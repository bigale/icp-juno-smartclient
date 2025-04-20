import React from 'react';
import { TextSettings, TextSettingsProps } from './TextSettings';
import { AsComponentXML } from './core/ReactComponent';


declare interface TextImportSettingsProps extends TextSettingsProps {

/**
 * See {@link isc.TextImportSettings.hasHeaderLine TextImportSettings.hasHeaderLine}.
 */
hasHeaderLine?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TextImportSettings wraps the SmartClient widget class
 * {@link isc.TextImportSettings TextImportSettings} for React, allowing you to import
 * TextImportSettings for use in React JS and JSX.
 * @class
 * @extends TextSettings
 */
declare class TextImportSettings extends TextSettings {
    props: AsComponentXML<TextImportSettingsProps>;
}
