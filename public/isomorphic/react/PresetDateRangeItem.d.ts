import React from 'react';
import { PresetCriteriaItem, PresetCriteriaItemProps } from './PresetCriteriaItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface PresetDateRangeItemProps extends PresetCriteriaItemProps {

/**
 * See {@link isc.PresetDateRangeItem.getCriterion() PresetDateRangeItem.getCriterion()}.
 */
getCriterion?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * PresetDateRangeItem wraps the SmartClient widget class
 * {@link isc.PresetDateRangeItem PresetDateRangeItem} for React, allowing you to import
 * PresetDateRangeItem for use in React JS and JSX.
 * @class
 * @extends PresetCriteriaItem
 */
declare class PresetDateRangeItem extends PresetCriteriaItem {
    props: AsComponentXML<PresetDateRangeItemProps>;
}
