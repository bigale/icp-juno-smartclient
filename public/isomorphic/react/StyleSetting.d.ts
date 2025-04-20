import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface StyleSettingProps {

/**
 * See {@link isc.StyleSetting.editorProperties StyleSetting.editorProperties}.
 */
editorProperties?: FormItem;

/**
 * See {@link isc.StyleSetting.settingName StyleSetting.settingName}.
 */
settingName?: string;

/**
 * See {@link isc.StyleSetting.defaultEditorType StyleSetting.defaultEditorType}.
 */
defaultEditorType?: string;

/**
 * See {@link isc.StyleSetting.name StyleSetting.name}.
 */
name?: string;

/**
 * See {@link isc.StyleSetting.title StyleSetting.title}.
 */
title?: string;

/**
 * See {@link isc.StyleSetting.groupName StyleSetting.groupName}.
 */
groupName?: string;

/**
 * See {@link isc.StyleSetting.showAsymmetry StyleSetting.showAsymmetry}.
 */
showAsymmetry?: boolean;

/**
 * See {@link isc.StyleSetting.allowAsymmetry StyleSetting.allowAsymmetry}.
 */
allowAsymmetry?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * StyleSetting wraps the SmartClient object
 * {@link isc.StyleSetting StyleSetting} for React, allowing you to import
 * StyleSetting for use in React JS and JSX.
 * @class
 */
declare class StyleSetting extends ILogicalComponent {
    props: AsComponentXML<StyleSettingProps>;
}
