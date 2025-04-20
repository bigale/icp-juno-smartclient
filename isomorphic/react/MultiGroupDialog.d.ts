import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiGroupDialogProps extends WindowProps {

/**
 * See {@link isc.MultiGroupDialog.getNumLevels() MultiGroupDialog.getNumLevels()}.
 */
getNumLevels?: Function;

/**
 * See {@link isc.MultiGroupDialog.addLevelButtonTitle MultiGroupDialog.addLevelButtonTitle}.
 */
addLevelButtonTitle?: string;

/**
 * See {@link isc.MultiGroupDialog.addLevelButtonProperties MultiGroupDialog.addLevelButtonProperties}.
 */
addLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiGroupDialog.validate() MultiGroupDialog.validate()}.
 */
validate?: Function;

/**
 * See {@link isc.MultiGroupDialog.deleteLevelButtonProperties MultiGroupDialog.deleteLevelButtonProperties}.
 */
deleteLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiGroupDialog.title MultiGroupDialog.title}.
 */
title?: string;

/**
 * See {@link isc.MultiGroupDialog.levelDownButtonProperties MultiGroupDialog.levelDownButtonProperties}.
 */
levelDownButtonProperties?: ImgButton;

/**
 * See {@link isc.MultiGroupDialog.optionsGridProperties MultiGroupDialog.optionsGridProperties}.
 */
optionsGridProperties?: ListGrid;

/**
 * See {@link isc.MultiGroupDialog.propertyFieldTitle MultiGroupDialog.propertyFieldTitle}.
 */
propertyFieldTitle?: string;

/**
 * See {@link isc.MultiGroupDialog.levelUpButtonTitle MultiGroupDialog.levelUpButtonTitle}.
 */
levelUpButtonTitle?: string;

/**
 * See {@link isc.MultiGroupDialog.deleteLevelButtonTitle MultiGroupDialog.deleteLevelButtonTitle}.
 */
deleteLevelButtonTitle?: string;

/**
 * See {@link isc.MultiGroupDialog.getGroup() MultiGroupDialog.getGroup()}.
 */
getGroup?: Function;

/**
 * See {@link isc.MultiGroupDialog.fields MultiGroupDialog.fields}.
 */
fields?: DataSourceField[];

/**
 * See {@link isc.MultiGroupDialog.applyButtonTitle MultiGroupDialog.applyButtonTitle}.
 */
applyButtonTitle?: string;

/**
 * See {@link isc.MultiGroupDialog.applyButtonProperties MultiGroupDialog.applyButtonProperties}.
 */
applyButtonProperties?: IButton;

/**
 * See {@link isc.MultiGroupDialog.copyLevelButtonProperties MultiGroupDialog.copyLevelButtonProperties}.
 */
copyLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiGroupDialog.maxLevels MultiGroupDialog.maxLevels}.
 */
maxLevels?: number;

/**
 * See {@link isc.MultiGroupDialog.invalidListPrompt MultiGroupDialog.invalidListPrompt}.
 */
invalidListPrompt?: string;

/**
 * See {@link isc.MultiGroupDialog.levelDownButtonTitle MultiGroupDialog.levelDownButtonTitle}.
 */
levelDownButtonTitle?: string;

/**
 * See {@link isc.MultiGroupDialog.initialGrouping MultiGroupDialog.initialGrouping}.
 */
initialGrouping?: string[];

/**
 * See {@link isc.MultiGroupDialog.cancelButtonProperties MultiGroupDialog.cancelButtonProperties}.
 */
cancelButtonProperties?: IButton;

/**
 * See {@link isc.MultiGroupDialog.copyLevelButtonTitle MultiGroupDialog.copyLevelButtonTitle}.
 */
copyLevelButtonTitle?: string;

/**
 * See {@link isc.MultiGroupDialog.levelUpButtonProperties MultiGroupDialog.levelUpButtonProperties}.
 */
levelUpButtonProperties?: ImgButton;

/**
 * See {@link isc.MultiGroupDialog.cancelButtonTitle MultiGroupDialog.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.MultiGroupDialog.groupingFieldTitle MultiGroupDialog.groupingFieldTitle}.
 */
groupingFieldTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiGroupDialog wraps the SmartClient widget class
 * {@link isc.MultiGroupDialog MultiGroupDialog} for React, allowing you to import
 * MultiGroupDialog for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class MultiGroupDialog extends Window {
    props: AsComponentXML<MultiGroupDialogProps>;
}
