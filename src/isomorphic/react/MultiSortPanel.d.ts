import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiSortPanelProps extends LayoutProps {

/**
 * See {@link isc.MultiSortPanel.otherSortLevelTitle MultiSortPanel.otherSortLevelTitle}.
 */
otherSortLevelTitle?: string;

/**
 * See {@link isc.MultiSortPanel.getSortLevel() MultiSortPanel.getSortLevel()}.
 */
getSortLevel?: Function;

/**
 * See {@link isc.MultiSortPanel.iconSize MultiSortPanel.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.MultiSortPanel.addLevelButtonProperties MultiSortPanel.addLevelButtonProperties}.
 */
addLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiSortPanel.levelDownButtonProperties MultiSortPanel.levelDownButtonProperties}.
 */
levelDownButtonProperties?: ImgButton;

/**
 * See {@link isc.MultiSortPanel.invalidListPrompt MultiSortPanel.invalidListPrompt}.
 */
invalidListPrompt?: string;

/**
 * See {@link isc.MultiSortPanel.maxLevels MultiSortPanel.maxLevels}.
 */
maxLevels?: number;

/**
 * See {@link isc.MultiSortPanel.fields MultiSortPanel.fields}.
 */
fields?: DataSourceField[];

/**
 * See {@link isc.MultiSortPanel.firstSortLevelTitle MultiSortPanel.firstSortLevelTitle}.
 */
firstSortLevelTitle?: string;

/**
 * See {@link isc.MultiSortPanel.levelUpButtonTitle MultiSortPanel.levelUpButtonTitle}.
 */
levelUpButtonTitle?: string;

/**
 * See {@link isc.MultiSortPanel.propertyFieldTitle MultiSortPanel.propertyFieldTitle}.
 */
propertyFieldTitle?: string;

/**
 * See {@link isc.MultiSortPanel.deleteLevelButtonProperties MultiSortPanel.deleteLevelButtonProperties}.
 */
deleteLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiSortPanel.descendingTitle MultiSortPanel.descendingTitle}.
 */
descendingTitle?: string;

/**
 * See {@link isc.MultiSortPanel.sortChanged() MultiSortPanel.sortChanged()}.
 */
sortChanged?: Function;

/**
 * See {@link isc.MultiSortPanel.copyLevelButtonTitle MultiSortPanel.copyLevelButtonTitle}.
 */
copyLevelButtonTitle?: string;

/**
 * See {@link isc.MultiSortPanel.getNumLevels() MultiSortPanel.getNumLevels()}.
 */
getNumLevels?: Function;

/**
 * See {@link isc.MultiSortPanel.optionsGridProperties MultiSortPanel.optionsGridProperties}.
 */
optionsGridProperties?: ListGrid;

/**
 * See {@link isc.MultiSortPanel.ascendingTitle MultiSortPanel.ascendingTitle}.
 */
ascendingTitle?: string;

/**
 * See {@link isc.MultiSortPanel.copyLevelButtonProperties MultiSortPanel.copyLevelButtonProperties}.
 */
copyLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiSortPanel.levelDownButtonTitle MultiSortPanel.levelDownButtonTitle}.
 */
levelDownButtonTitle?: string;

/**
 * See {@link isc.MultiSortPanel.levelUpButtonProperties MultiSortPanel.levelUpButtonProperties}.
 */
levelUpButtonProperties?: ImgButton;

/**
 * See {@link isc.MultiSortPanel.getSort() MultiSortPanel.getSort()}.
 */
getSort?: Function;

/**
 * See {@link isc.MultiSortPanel.addLevelButtonTitle MultiSortPanel.addLevelButtonTitle}.
 */
addLevelButtonTitle?: string;

/**
 * See {@link isc.MultiSortPanel.directionFieldTitle MultiSortPanel.directionFieldTitle}.
 */
directionFieldTitle?: string;

/**
 * See {@link isc.MultiSortPanel.initialSort MultiSortPanel.initialSort}.
 */
initialSort?: SortSpecifier[];

/**
 * See {@link isc.MultiSortPanel.validate() MultiSortPanel.validate()}.
 */
validate?: Function;

/**
 * See {@link isc.MultiSortPanel.deleteLevelButtonTitle MultiSortPanel.deleteLevelButtonTitle}.
 */
deleteLevelButtonTitle?: string;

/**
 * See {@link isc.MultiSortPanel.iconBaseStyle MultiSortPanel.iconBaseStyle}.
 */
iconBaseStyle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiSortPanel wraps the SmartClient widget class
 * {@link isc.MultiSortPanel MultiSortPanel} for React, allowing you to import
 * MultiSortPanel for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class MultiSortPanel extends Layout {
    props: AsComponentXML<MultiSortPanelProps>;
}
