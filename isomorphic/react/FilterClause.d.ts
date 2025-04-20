import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface FilterClauseProps extends LayoutProps {

/**
 * See {@link isc.FilterClause.getCriterion() FilterClause.getCriterion()}.
 */
getCriterion?: Function;

/**
 * See {@link isc.FilterClause.fieldPickerProperties FilterClause.fieldPickerProperties}.
 */
fieldPickerProperties?: FormItem;

/**
 * See {@link isc.FilterClause.fieldPickerTitle FilterClause.fieldPickerTitle}.
 */
fieldPickerTitle?: string;

/**
 * See {@link isc.FilterClause.operatorPickerTitle FilterClause.operatorPickerTitle}.
 */
operatorPickerTitle?: string;

/**
 * See {@link isc.FilterClause.operatorPickerProperties FilterClause.operatorPickerProperties}.
 */
operatorPickerProperties?: FormItem | SelectItem;

/**
 * See {@link isc.FilterClause.validateOnChange FilterClause.validateOnChange}.
 */
validateOnChange?: boolean;

/**
 * See {@link isc.FilterClause.valueSetHint FilterClause.valueSetHint}.
 */
valueSetHint?: string;

/**
 * See {@link isc.FilterClause.showFieldTitles FilterClause.showFieldTitles}.
 */
showFieldTitles?: boolean;

/**
 * See {@link isc.FilterClause.valueItemListHint FilterClause.valueItemListHint}.
 */
valueItemListHint?: string;

/**
 * See {@link isc.FilterClause.valueItemTitle FilterClause.valueItemTitle}.
 */
valueItemTitle?: string;

/**
 * See {@link isc.FilterClause.getFilterBuilder() FilterClause.getFilterBuilder()}.
 */
getFilterBuilder?: Function;

/**
 * See {@link isc.FilterClause.removeButtonProperties FilterClause.removeButtonProperties}.
 */
removeButtonProperties?: ImgButton;

/**
 * See {@link isc.FilterClause.getValueFieldProperties() FilterClause.getValueFieldProperties()}.
 */
getValueFieldProperties?: Function;

/**
 * See {@link isc.FilterClause.validate() FilterClause.validate()}.
 */
validate?: Function;

/**
 * See {@link isc.FilterClause.removeButtonPrompt FilterClause.removeButtonPrompt}.
 */
removeButtonPrompt?: string;

/**
 * See {@link isc.FilterClause.clauseProperties FilterClause.clauseProperties}.
 */
clauseProperties?: SearchForm;

/**
 * See {@link isc.FilterClause.showRemoveButton FilterClause.showRemoveButton}.
 */
showRemoveButton?: boolean;

/**
 * See {@link isc.FilterClause.valueItemTextHint FilterClause.valueItemTextHint}.
 */
valueItemTextHint?: string;

/**
 * See {@link isc.FilterClause.remove() FilterClause.remove()}.
 */
remove?: Function;

/**
 * See {@link isc.FilterClause.criterion FilterClause.criterion}.
 */
criterion?: Criteria;

/**
 * See {@link isc.FilterClause.valueItemFieldHint FilterClause.valueItemFieldHint}.
 */
valueItemFieldHint?: string;

/**
 * See {@link isc.FilterClause.getFieldOperators() FilterClause.getFieldOperators()}.
 */
getFieldOperators?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FilterClause wraps the SmartClient widget class
 * {@link isc.FilterClause FilterClause} for React, allowing you to import
 * FilterClause for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class FilterClause extends Layout {
    props: AsComponentXML<FilterClauseProps>;
}
