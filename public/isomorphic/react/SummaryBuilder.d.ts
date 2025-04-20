import React from 'react';
import { FormulaBuilder, FormulaBuilderProps } from './FormulaBuilder';
import { AsComponentXML } from './core/ReactComponent';


declare interface SummaryBuilderProps extends FormulaBuilderProps {

/**
 * See {@link isc.SummaryBuilder.fireOnClose() SummaryBuilder.fireOnClose()}.
 */
fireOnClose?: Function;

/**
 * See {@link isc.SummaryBuilder.showHelpIcon SummaryBuilder.showHelpIcon}.
 */
showHelpIcon?: boolean;

/**
 * See {@link isc.SummaryBuilder.setSummary() SummaryBuilder.setSummary()}.
 */
setSummary?: Function;

/**
 * See {@link isc.SummaryBuilder.getHelpText() SummaryBuilder.getHelpText()}.
 */
getHelpText?: Function;

/**
 * See {@link isc.SummaryBuilder.testButtonHoverContents SummaryBuilder.testButtonHoverContents}.
 */
testButtonHoverContents?: string;

/**
 * See {@link isc.SummaryBuilder.save() SummaryBuilder.save()}.
 */
save?: Function;

/**
 * See {@link isc.SummaryBuilder.fields SummaryBuilder.fields}.
 */
fields?: Field[];

/**
 * See {@link isc.SummaryBuilder.builderTypeText SummaryBuilder.builderTypeText}.
 */
builderTypeText?: string;

/**
 * See {@link isc.SummaryBuilder.formulaFieldProperties SummaryBuilder.formulaFieldProperties}.
 */
formulaFieldProperties?: TextItem;

/**
 * See {@link isc.SummaryBuilder.helpIconProperties SummaryBuilder.helpIconProperties}.
 */
helpIconProperties?: FormItemIcon;

/**
 * See {@link isc.SummaryBuilder.editMode SummaryBuilder.editMode}.
 */
editMode?: boolean;

/**
 * See {@link isc.SummaryBuilder.dataSource SummaryBuilder.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.SummaryBuilder.helpTextIntro SummaryBuilder.helpTextIntro}.
 */
helpTextIntro?: string;

/**
 * See {@link isc.SummaryBuilder.autoHideCheckBoxLabel SummaryBuilder.autoHideCheckBoxLabel}.
 */
autoHideCheckBoxLabel?: string;

/**
 * See {@link isc.SummaryBuilder.field SummaryBuilder.field}.
 */
field?: Field;

/**
 * See {@link isc.SummaryBuilder.showAutoHideCheckBox SummaryBuilder.showAutoHideCheckBox}.
 */
showAutoHideCheckBox?: boolean;

/**
 * See {@link isc.SummaryBuilder.autoHideCheckBoxProperties SummaryBuilder.autoHideCheckBoxProperties}.
 */
autoHideCheckBoxProperties?: TextItem;

/**
 * See {@link isc.SummaryBuilder.titleFieldProperties SummaryBuilder.titleFieldProperties}.
 */
titleFieldProperties?: TextItem;

/**
 * See {@link isc.SummaryBuilder.testRecord SummaryBuilder.testRecord}.
 */
testRecord?: Record;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SummaryBuilder wraps the SmartClient widget class
 * {@link isc.SummaryBuilder SummaryBuilder} for React, allowing you to import
 * SummaryBuilder for use in React JS and JSX.
 * @class
 * @extends FormulaBuilder
 */
declare class SummaryBuilder extends FormulaBuilder {
    props: AsComponentXML<SummaryBuilderProps>;
}
