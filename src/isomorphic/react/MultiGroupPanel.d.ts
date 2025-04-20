import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface MultiGroupPanelProps extends LayoutProps {

/**
 * See {@link isc.MultiGroupPanel.invalidListPrompt MultiGroupPanel.invalidListPrompt}.
 */
invalidListPrompt?: string;

/**
 * See {@link isc.MultiGroupPanel.levelUpButtonTitle MultiGroupPanel.levelUpButtonTitle}.
 */
levelUpButtonTitle?: string;

/**
 * See {@link isc.MultiGroupPanel.groupingFieldTitle MultiGroupPanel.groupingFieldTitle}.
 */
groupingFieldTitle?: string;

/**
 * See {@link isc.MultiGroupPanel.deleteLevelButtonProperties MultiGroupPanel.deleteLevelButtonProperties}.
 */
deleteLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiGroupPanel.otherGroupLevelTitle MultiGroupPanel.otherGroupLevelTitle}.
 */
otherGroupLevelTitle?: string;

/**
 * See {@link isc.MultiGroupPanel.firstGroupLevelTitle MultiGroupPanel.firstGroupLevelTitle}.
 */
firstGroupLevelTitle?: string;

/**
 * See {@link isc.MultiGroupPanel.iconBaseStyle MultiGroupPanel.iconBaseStyle}.
 */
iconBaseStyle?: string;

/**
 * See {@link isc.MultiGroupPanel.propertyFieldTitle MultiGroupPanel.propertyFieldTitle}.
 */
propertyFieldTitle?: string;

/**
 * See {@link isc.MultiGroupPanel.initialGrouping MultiGroupPanel.initialGrouping}.
 */
initialGrouping?: string[];

/**
 * See {@link isc.MultiGroupPanel.iconSize MultiGroupPanel.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.MultiGroupPanel.addLevelButtonTitle MultiGroupPanel.addLevelButtonTitle}.
 */
addLevelButtonTitle?: string;

/**
 * See {@link isc.MultiGroupPanel.fields MultiGroupPanel.fields}.
 */
fields?: DataSourceField[];

/**
 * See {@link isc.MultiGroupPanel.copyLevelButtonProperties MultiGroupPanel.copyLevelButtonProperties}.
 */
copyLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiGroupPanel.groupChanged() MultiGroupPanel.groupChanged()}.
 */
groupChanged?: Function;

/**
 * See {@link isc.MultiGroupPanel.levelDownButtonTitle MultiGroupPanel.levelDownButtonTitle}.
 */
levelDownButtonTitle?: string;

/**
 * See {@link isc.MultiGroupPanel.levelDownButtonProperties MultiGroupPanel.levelDownButtonProperties}.
 */
levelDownButtonProperties?: ImgButton;

/**
 * See {@link isc.MultiGroupPanel.copyLevelButtonTitle MultiGroupPanel.copyLevelButtonTitle}.
 */
copyLevelButtonTitle?: string;

/**
 * See {@link isc.MultiGroupPanel.maxLevels MultiGroupPanel.maxLevels}.
 */
maxLevels?: number;

/**
 * See {@link isc.MultiGroupPanel.addLevelButtonProperties MultiGroupPanel.addLevelButtonProperties}.
 */
addLevelButtonProperties?: IButton;

/**
 * See {@link isc.MultiGroupPanel.validate() MultiGroupPanel.validate()}.
 */
validate?: Function;

/**
 * See {@link isc.MultiGroupPanel.deleteLevelButtonTitle MultiGroupPanel.deleteLevelButtonTitle}.
 */
deleteLevelButtonTitle?: string;

/**
 * See {@link isc.MultiGroupPanel.getGroup() MultiGroupPanel.getGroup()}.
 */
getGroup?: Function;

/**
 * See {@link isc.MultiGroupPanel.getNumLevels() MultiGroupPanel.getNumLevels()}.
 */
getNumLevels?: Function;

/**
 * See {@link isc.MultiGroupPanel.optionsGridProperties MultiGroupPanel.optionsGridProperties}.
 */
optionsGridProperties?: ListGrid;

/**
 * See {@link isc.MultiGroupPanel.levelUpButtonProperties MultiGroupPanel.levelUpButtonProperties}.
 */
levelUpButtonProperties?: ImgButton;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MultiGroupPanel wraps the SmartClient widget class
 * {@link isc.MultiGroupPanel MultiGroupPanel} for React, allowing you to import
 * MultiGroupPanel for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class MultiGroupPanel extends Layout {
    props: AsComponentXML<MultiGroupPanelProps>;
}
