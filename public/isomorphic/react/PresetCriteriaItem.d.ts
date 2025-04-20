import React from 'react';
import { SelectItem, SelectItemProps } from './SelectItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface PresetCriteriaItemProps extends SelectItemProps {

/**
 * See {@link isc.PresetCriteriaItem.shouldSaveValue PresetCriteriaItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.PresetCriteriaItem.options PresetCriteriaItem.options}.
 */
options?: Object;

/**
 * See {@link isc.PresetCriteriaItem.valueMap PresetCriteriaItem.valueMap}.
 */
valueMap?: Object;

/**
 * See {@link isc.PresetCriteriaItem.getCriterion() PresetCriteriaItem.getCriterion()}.
 */
getCriterion?: Function;

/**
 * See {@link isc.PresetCriteriaItem.showCustomOption PresetCriteriaItem.showCustomOption}.
 */
showCustomOption?: boolean;

/**
 * See {@link isc.PresetCriteriaItem.getCustomCriteria() PresetCriteriaItem.getCustomCriteria()}.
 */
getCustomCriteria?: Function;

/**
 * See {@link isc.PresetCriteriaItem.customOptionTitle PresetCriteriaItem.customOptionTitle}.
 */
customOptionTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PresetCriteriaItem wraps the SmartClient widget class
 * {@link isc.PresetCriteriaItem PresetCriteriaItem} for React, allowing you to import
 * PresetCriteriaItem for use in React JS and JSX.
 * @class
 * @extends SelectItem
 */
declare class PresetCriteriaItem extends SelectItem {
    props: AsComponentXML<PresetCriteriaItemProps>;
}
