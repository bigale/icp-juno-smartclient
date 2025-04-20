import React from 'react';
import { HLayout, HLayoutProps } from './HLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface HiliteRuleProps extends HLayoutProps {

/**
 * See {@link isc.HiliteRule.hiliteFormProperties HiliteRule.hiliteFormProperties}.
 */
hiliteFormProperties?: DynamicForm;

/**
 * See {@link isc.HiliteRule.removeIconSize HiliteRule.removeIconSize}.
 */
removeIconSize?: number;

/**
 * See {@link isc.HiliteRule.backgroundColorTitle HiliteRule.backgroundColorTitle}.
 */
backgroundColorTitle?: string;

/**
 * See {@link isc.HiliteRule.colorFieldTitle HiliteRule.colorFieldTitle}.
 */
colorFieldTitle?: string;

/**
 * See {@link isc.HiliteRule.clauseProperties HiliteRule.clauseProperties}.
 */
clauseProperties?: FilterClause;

/**
 * See {@link isc.HiliteRule.remove() HiliteRule.remove()}.
 */
remove?: Function;

/**
 * See {@link isc.HiliteRule.removeIconBaseStyle HiliteRule.removeIconBaseStyle}.
 */
removeIconBaseStyle?: string;

/**
 * See {@link isc.HiliteRule.showRemoveButton HiliteRule.showRemoveButton}.
 */
showRemoveButton?: boolean;

/**
 * See {@link isc.HiliteRule.removeButtonProperties HiliteRule.removeButtonProperties}.
 */
removeButtonProperties?: ImgButton;

/**
 * See {@link isc.HiliteRule.removeButtonPrompt HiliteRule.removeButtonPrompt}.
 */
removeButtonPrompt?: string;

/**
 * See {@link isc.HiliteRule.advancedClauseEditButtonProperties HiliteRule.advancedClauseEditButtonProperties}.
 */
advancedClauseEditButtonProperties?: ImgButton;

/**
 * See {@link isc.HiliteRule.iconFieldTitle HiliteRule.iconFieldTitle}.
 */
iconFieldTitle?: string;

/**
 * See {@link isc.HiliteRule.foregroundColorTitle HiliteRule.foregroundColorTitle}.
 */
foregroundColorTitle?: string;

/**
 * See {@link isc.HiliteRule.advancedClauseLabelProperties HiliteRule.advancedClauseLabelProperties}.
 */
advancedClauseLabelProperties?: Label;

/**
 * See {@link isc.HiliteRule.getHilite() HiliteRule.getHilite()}.
 */
getHilite?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HiliteRule wraps the SmartClient widget class
 * {@link isc.HiliteRule HiliteRule} for React, allowing you to import
 * HiliteRule for use in React JS and JSX.
 * @class
 * @extends HLayout
 */
declare class HiliteRule extends HLayout {
    props: AsComponentXML<HiliteRuleProps>;
}
