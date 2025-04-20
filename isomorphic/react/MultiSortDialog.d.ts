import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiSortDialogProps extends WindowProps {

/**
 * See {@link isc.MultiSortDialog.deleteLevelButtonProperties MultiSortDialog.deleteLevelButtonProperties}.
 */
deleteLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiSortDialog.fields MultiSortDialog.fields}.
 */
fields?: DataSourceField[];

/**
 * See {@link isc.MultiSortDialog.title MultiSortDialog.title}.
 */
title?: string;

/**
 * See {@link isc.MultiSortDialog.getNumLevels() MultiSortDialog.getNumLevels()}.
 */
getNumLevels?: Function;

/**
 * See {@link isc.MultiSortDialog.levelDownButtonProperties MultiSortDialog.levelDownButtonProperties}.
 */
levelDownButtonProperties?: ImgButton;

/**
 * See {@link isc.MultiSortDialog.firstSortLevelTitle MultiSortDialog.firstSortLevelTitle}.
 */
firstSortLevelTitle?: string;

/**
 * See {@link isc.MultiSortDialog.applyButtonTitle MultiSortDialog.applyButtonTitle}.
 */
applyButtonTitle?: string;

/**
 * See {@link isc.MultiSortDialog.invalidListPrompt MultiSortDialog.invalidListPrompt}.
 */
invalidListPrompt?: string;

/**
 * See {@link isc.MultiSortDialog.validate() MultiSortDialog.validate()}.
 */
validate?: Function;

/**
 * See {@link isc.MultiSortDialog.applyButtonProperties MultiSortDialog.applyButtonProperties}.
 */
applyButtonProperties?: IButton;

/**
 * See {@link isc.MultiSortDialog.levelUpButtonProperties MultiSortDialog.levelUpButtonProperties}.
 */
levelUpButtonProperties?: ImgButton;

/**
 * See {@link isc.MultiSortDialog.copyLevelButtonTitle MultiSortDialog.copyLevelButtonTitle}.
 */
copyLevelButtonTitle?: string;

/**
 * See {@link isc.MultiSortDialog.optionsGridProperties MultiSortDialog.optionsGridProperties}.
 */
optionsGridProperties?: ListGrid;

/**
 * See {@link isc.MultiSortDialog.propertyFieldTitle MultiSortDialog.propertyFieldTitle}.
 */
propertyFieldTitle?: string;

/**
 * See {@link isc.MultiSortDialog.otherSortLevelTitle MultiSortDialog.otherSortLevelTitle}.
 */
otherSortLevelTitle?: string;

/**
 * See {@link isc.MultiSortDialog.initialSort MultiSortDialog.initialSort}.
 */
initialSort?: SortSpecifier[];

/**
 * See {@link isc.MultiSortDialog.maxLevels MultiSortDialog.maxLevels}.
 */
maxLevels?: number;

/**
 * See {@link isc.MultiSortDialog.copyLevelButtonProperties MultiSortDialog.copyLevelButtonProperties}.
 */
copyLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiSortDialog.multiSortPanelProperties MultiSortDialog.multiSortPanelProperties}.
 */
multiSortPanelProperties?: MultiSortPanel;

/**
 * See {@link isc.MultiSortDialog.cancelButtonProperties MultiSortDialog.cancelButtonProperties}.
 */
cancelButtonProperties?: IButton;

/**
 * See {@link isc.MultiSortDialog.addLevelButtonTitle MultiSortDialog.addLevelButtonTitle}.
 */
addLevelButtonTitle?: string;

/**
 * See {@link isc.MultiSortDialog.cancelButtonTitle MultiSortDialog.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.MultiSortDialog.descendingTitle MultiSortDialog.descendingTitle}.
 */
descendingTitle?: string;

/**
 * See {@link isc.MultiSortDialog.deleteLevelButtonTitle MultiSortDialog.deleteLevelButtonTitle}.
 */
deleteLevelButtonTitle?: string;

/**
 * See {@link isc.MultiSortDialog.levelUpButtonTitle MultiSortDialog.levelUpButtonTitle}.
 */
levelUpButtonTitle?: string;

/**
 * See {@link isc.MultiSortDialog.directionFieldTitle MultiSortDialog.directionFieldTitle}.
 */
directionFieldTitle?: string;

/**
 * See {@link isc.MultiSortDialog.levelDownButtonTitle MultiSortDialog.levelDownButtonTitle}.
 */
levelDownButtonTitle?: string;

/**
 * See {@link isc.MultiSortDialog.getSortLevel() MultiSortDialog.getSortLevel()}.
 */
getSortLevel?: Function;

/**
 * See {@link isc.MultiSortDialog.getSort() MultiSortDialog.getSort()}.
 */
getSort?: Function;

/**
 * See {@link isc.MultiSortDialog.ascendingTitle MultiSortDialog.ascendingTitle}.
 */
ascendingTitle?: string;

/**
 * See {@link isc.MultiSortDialog.addLevelButtonProperties MultiSortDialog.addLevelButtonProperties}.
 */
addLevelButtonProperties?: IButton;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiSortDialog wraps the SmartClient widget class
 * {@link isc.MultiSortDialog MultiSortDialog} for React, allowing you to import
 * MultiSortDialog for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class MultiSortDialog extends Window {
    props: AsComponentXML<MultiSortDialogProps>;
}
