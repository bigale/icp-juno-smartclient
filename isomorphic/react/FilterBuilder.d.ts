import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface FilterBuilderProps extends LayoutProps {

/**
 * See {@link isc.FilterBuilder.operatorPickerWidth FilterBuilder.operatorPickerWidth}.
 */
operatorPickerWidth?: number | string;

/**
 * See {@link isc.FilterBuilder.operatorPickerProperties FilterBuilder.operatorPickerProperties}.
 */
operatorPickerProperties?: FormItem | SelectItem;

/**
 * See {@link isc.FilterBuilder.clearCriteria() FilterBuilder.clearCriteria()}.
 */
clearCriteria?: Function;

/**
 * See {@link isc.FilterBuilder.fieldDataSource FilterBuilder.fieldDataSource}.
 */
fieldDataSource?: DataSource;

/**
 * See {@link isc.FilterBuilder.filterChanged() FilterBuilder.filterChanged()}.
 */
filterChanged?: Function;

/**
 * See {@link isc.FilterBuilder.addCriterion() FilterBuilder.addCriterion()}.
 */
addCriterion?: Function;

/**
 * See {@link isc.FilterBuilder.showLastRemoveButton FilterBuilder.showLastRemoveButton}.
 */
showLastRemoveButton?: boolean;

/**
 * See {@link isc.FilterBuilder.inlineAndTitle FilterBuilder.inlineAndTitle}.
 */
inlineAndTitle?: string;

/**
 * See {@link isc.FilterBuilder.defaultSubClauseOperator FilterBuilder.defaultSubClauseOperator}.
 */
defaultSubClauseOperator?: string;

/**
 * See {@link isc.FilterBuilder.radioOptions FilterBuilder.radioOptions}.
 */
radioOptions?: string[];

/**
 * See {@link isc.FilterBuilder.radioOperatorTitle FilterBuilder.radioOperatorTitle}.
 */
radioOperatorTitle?: string;

/**
 * See {@link isc.FilterBuilder.topOperatorAppearance FilterBuilder.topOperatorAppearance}.
 */
topOperatorAppearance?: string;

/**
 * See {@link isc.FilterBuilder.showHiddenFields FilterBuilder.showHiddenFields}.
 */
showHiddenFields?: boolean;

/**
 * See {@link isc.FilterBuilder.removeButtonProperties FilterBuilder.removeButtonProperties}.
 */
removeButtonProperties?: ImgButton;

/**
 * See {@link isc.FilterBuilder.allowedFields FilterBuilder.allowedFields}.
 */
allowedFields?: string[];

/**
 * See {@link isc.FilterBuilder.rangeSeparator FilterBuilder.rangeSeparator}.
 */
rangeSeparator?: string;

/**
 * See {@link isc.FilterBuilder.topOperator FilterBuilder.topOperator}.
 */
topOperator?: string;

/**
 * See {@link isc.FilterBuilder.search() FilterBuilder.search()}.
 */
search?: Function;

/**
 * See {@link isc.FilterBuilder.getFieldOperators() FilterBuilder.getFieldOperators()}.
 */
getFieldOperators?: Function;

/**
 * See {@link isc.FilterBuilder.getCriteria() FilterBuilder.getCriteria()}.
 */
getCriteria?: Function;

/**
 * See {@link isc.FilterBuilder.topOperatorOptions FilterBuilder.topOperatorOptions}.
 */
topOperatorOptions?: string[];

/**
 * See {@link isc.FilterBuilder.operatorPickerTitle FilterBuilder.operatorPickerTitle}.
 */
operatorPickerTitle?: string;

/**
 * See {@link isc.FilterBuilder.showSubClauseButton FilterBuilder.showSubClauseButton}.
 */
showSubClauseButton?: boolean;

/**
 * See {@link isc.FilterBuilder.fieldPickerTitle FilterBuilder.fieldPickerTitle}.
 */
fieldPickerTitle?: string;

/**
 * See {@link isc.FilterBuilder.missingFieldPrompt FilterBuilder.missingFieldPrompt}.
 */
missingFieldPrompt?: string;

/**
 * See {@link isc.FilterBuilder.getEditorType() FilterBuilder.getEditorType()}.
 */
getEditorType?: Function;

/**
 * See {@link isc.FilterBuilder.modeSwitcherSimpleMessage FilterBuilder.modeSwitcherSimpleMessage}.
 */
modeSwitcherSimpleMessage?: string;

/**
 * See {@link isc.FilterBuilder.clauseStackProperties FilterBuilder.clauseStackProperties}.
 */
clauseStackProperties?: VStack;

/**
 * See {@link isc.FilterBuilder.setTopOperator() FilterBuilder.setTopOperator()}.
 */
setTopOperator?: Function;

/**
 * See {@link isc.FilterBuilder.showAddButton FilterBuilder.showAddButton}.
 */
showAddButton?: boolean;

/**
 * See {@link isc.FilterBuilder.saveOnEnter FilterBuilder.saveOnEnter}.
 */
saveOnEnter?: boolean;

/**
 * See {@link isc.FilterBuilder.addClause() FilterBuilder.addClause()}.
 */
addClause?: Function;

/**
 * See {@link isc.FilterBuilder.addButtonPrompt FilterBuilder.addButtonPrompt}.
 */
addButtonPrompt?: string;

/**
 * See {@link isc.FilterBuilder.validateOnChange FilterBuilder.validateOnChange}.
 */
validateOnChange?: boolean;

/**
 * See {@link isc.FilterBuilder.showSelectionCheckbox FilterBuilder.showSelectionCheckbox}.
 */
showSelectionCheckbox?: boolean;

/**
 * See {@link isc.FilterBuilder.lastClausePrompt FilterBuilder.lastClausePrompt}.
 */
lastClausePrompt?: string;

/**
 * See {@link isc.FilterBuilder.getFilterDescription() FilterBuilder.getFilterDescription()}.
 */
getFilterDescription?: Function;

/**
 * See {@link isc.FilterBuilder.setCriteria() FilterBuilder.setCriteria()}.
 */
setCriteria?: Function;

/**
 * See {@link isc.FilterBuilder.subClauseButtonTitle FilterBuilder.subClauseButtonTitle}.
 */
subClauseButtonTitle?: string;

/**
 * See {@link isc.FilterBuilder.allowEmpty FilterBuilder.allowEmpty}.
 */
allowEmpty?: boolean;

/**
 * See {@link isc.FilterBuilder.modeSwitcherProperties FilterBuilder.modeSwitcherProperties}.
 */
modeSwitcherProperties?: Label;

/**
 * See {@link isc.FilterBuilder.dataSource FilterBuilder.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.FilterBuilder.iconBaseStyle FilterBuilder.iconBaseStyle}.
 */
iconBaseStyle?: string;

/**
 * See {@link isc.FilterBuilder.setTopOperatorAppearance() FilterBuilder.setTopOperatorAppearance()}.
 */
setTopOperatorAppearance?: Function;

/**
 * See {@link isc.FilterBuilder.modeSwitcherAdvancedMessage FilterBuilder.modeSwitcherAdvancedMessage}.
 */
modeSwitcherAdvancedMessage?: string;

/**
 * See {@link isc.FilterBuilder.modeSwitcherFlattenWarningMessage FilterBuilder.modeSwitcherFlattenWarningMessage}.
 */
modeSwitcherFlattenWarningMessage?: string;

/**
 * See {@link isc.FilterBuilder.matchNoneTitle FilterBuilder.matchNoneTitle}.
 */
matchNoneTitle?: string;

/**
 * See {@link isc.FilterBuilder.bracketProperties FilterBuilder.bracketProperties}.
 */
bracketProperties?: Canvas;

/**
 * See {@link isc.FilterBuilder.criteria FilterBuilder.criteria}.
 */
criteria?: AdvancedCriteria;

/**
 * See {@link isc.FilterBuilder.validate() FilterBuilder.validate()}.
 */
validate?: Function;

/**
 * See {@link isc.FilterBuilder.topOperatorItemWidth FilterBuilder.topOperatorItemWidth}.
 */
topOperatorItemWidth?: number | string;

/**
 * See {@link isc.FilterBuilder.subClauseButtonProperties FilterBuilder.subClauseButtonProperties}.
 */
subClauseButtonProperties?: IButton;

/**
 * See {@link isc.FilterBuilder.addButtonProperties FilterBuilder.addButtonProperties}.
 */
addButtonProperties?: ImgButton;

/**
 * See {@link isc.FilterBuilder.sortFields FilterBuilder.sortFields}.
 */
sortFields?: boolean;

/**
 * See {@link isc.FilterBuilder.radioOperatorFormProperties FilterBuilder.radioOperatorFormProperties}.
 */
radioOperatorFormProperties?: DynamicForm;

/**
 * See {@link isc.FilterBuilder.removeClause() FilterBuilder.removeClause()}.
 */
removeClause?: Function;

/**
 * See {@link isc.FilterBuilder.fieldPickerProperties FilterBuilder.fieldPickerProperties}.
 */
fieldPickerProperties?: FormItem;

/**
 * See {@link isc.FilterBuilder.radioOperatorLayoutProperties FilterBuilder.radioOperatorLayoutProperties}.
 */
radioOperatorLayoutProperties?: HLayout;

/**
 * See {@link isc.FilterBuilder.topOperatorTitle FilterBuilder.topOperatorTitle}.
 */
topOperatorTitle?: string;

/**
 * See {@link isc.FilterBuilder.matchAllTitle FilterBuilder.matchAllTitle}.
 */
matchAllTitle?: string;

/**
 * See {@link isc.FilterBuilder.showModeSwitcher FilterBuilder.showModeSwitcher}.
 */
showModeSwitcher?: boolean;

/**
 * See {@link isc.FilterBuilder.inlineOrTitle FilterBuilder.inlineOrTitle}.
 */
inlineOrTitle?: string;

/**
 * See {@link isc.FilterBuilder.getSelectedClauses() FilterBuilder.getSelectedClauses()}.
 */
getSelectedClauses?: Function;

/**
 * See {@link isc.FilterBuilder.showRemoveButton FilterBuilder.showRemoveButton}.
 */
showRemoveButton?: boolean;

/**
 * See {@link isc.FilterBuilder.retainValuesAcrossFields FilterBuilder.retainValuesAcrossFields}.
 */
retainValuesAcrossFields?: boolean;

/**
 * See {@link isc.FilterBuilder.matchAnyTitle FilterBuilder.matchAnyTitle}.
 */
matchAnyTitle?: string;

/**
 * See {@link isc.FilterBuilder.iconSize FilterBuilder.iconSize}.
 */
iconSize?: number;

/**
 * See {@link isc.FilterBuilder.topOperatorFormProperties FilterBuilder.topOperatorFormProperties}.
 */
topOperatorFormProperties?: DynamicForm;

/**
 * See {@link isc.FilterBuilder.showFieldTitles FilterBuilder.showFieldTitles}.
 */
showFieldTitles?: boolean;

/**
 * See {@link isc.FilterBuilder.fieldPickerWidth FilterBuilder.fieldPickerWidth}.
 */
fieldPickerWidth?: number | string;

/**
 * See {@link isc.FilterBuilder.topOperatorItemProperties FilterBuilder.topOperatorItemProperties}.
 */
topOperatorItemProperties?: SelectItem;

/**
 * See {@link isc.FilterBuilder.inlineAndNotTitle FilterBuilder.inlineAndNotTitle}.
 */
inlineAndNotTitle?: string;

/**
 * See {@link isc.FilterBuilder.removeButtonPrompt FilterBuilder.removeButtonPrompt}.
 */
removeButtonPrompt?: string;

/**
 * See {@link isc.FilterBuilder.getChildFilters() FilterBuilder.getChildFilters()}.
 */
getChildFilters?: Function;

/**
 * See {@link isc.FilterBuilder.getValueFieldProperties() FilterBuilder.getValueFieldProperties()}.
 */
getValueFieldProperties?: Function;

/**
 * See {@link isc.FilterBuilder.subClauseButtonPrompt FilterBuilder.subClauseButtonPrompt}.
 */
subClauseButtonPrompt?: string;

/**
 * See {@link isc.FilterBuilder.valueItemWidth FilterBuilder.valueItemWidth}.
 */
valueItemWidth?: number | string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FilterBuilder wraps the SmartClient widget class
 * {@link isc.FilterBuilder FilterBuilder} for React, allowing you to import
 * FilterBuilder for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class FilterBuilder extends Layout {
    props: AsComponentXML<FilterBuilderProps>;
}
