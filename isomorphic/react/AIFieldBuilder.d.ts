import React from 'react';
import { SummaryBuilder, SummaryBuilderProps } from './SummaryBuilder';
import { AsComponentXML } from './core/ReactComponent';


declare interface AIFieldBuilderProps extends SummaryBuilderProps {

/**
 * See {@link isc.AIFieldBuilder.pendingSuggestTitleHint AIFieldBuilder.pendingSuggestTitleHint}.
 */
pendingSuggestTitleHint?: string;

/**
 * See {@link isc.AIFieldBuilder.nonSuccessfulSuggestTitleHint AIFieldBuilder.nonSuccessfulSuggestTitleHint}.
 */
nonSuccessfulSuggestTitleHint?: string;

/**
 * See {@link isc.AIFieldBuilder.testButtonHoverContents AIFieldBuilder.testButtonHoverContents}.
 */
testButtonHoverContents?: string;

/**
 * See {@link isc.AIFieldBuilder.initialAutoSuggestTitleHint AIFieldBuilder.initialAutoSuggestTitleHint}.
 */
initialAutoSuggestTitleHint?: string;

/**
 * See {@link isc.AIFieldBuilder.suggestTitleThreshold AIFieldBuilder.suggestTitleThreshold}.
 */
suggestTitleThreshold?: number;

/**
 * See {@link isc.AIFieldBuilder.instructionsTextStart AIFieldBuilder.instructionsTextStart}.
 */
instructionsTextStart?: string;

/**
 * See {@link isc.AIFieldBuilder.autoSuggestTitleDelay AIFieldBuilder.autoSuggestTitleDelay}.
 */
autoSuggestTitleDelay?: number;

/**
 * See {@link isc.AIFieldBuilder.anotherSuggestedTitleRequestedCancellationReason AIFieldBuilder.anotherSuggestedTitleRequestedCancellationReason}.
 */
anotherSuggestedTitleRequestedCancellationReason?: string;

/**
 * See {@link isc.AIFieldBuilder.suggestedTitleHint AIFieldBuilder.suggestedTitleHint}.
 */
suggestedTitleHint?: string;

/**
 * See {@link isc.AIFieldBuilder.setAutoSuggestTitle() AIFieldBuilder.setAutoSuggestTitle()}.
 */
setAutoSuggestTitle?: Function;

/**
 * See {@link isc.AIFieldBuilder.autoSuggestTitle AIFieldBuilder.autoSuggestTitle}.
 */
autoSuggestTitle?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * AIFieldBuilder wraps the SmartClient widget class
 * {@link isc.AIFieldBuilder AIFieldBuilder} for React, allowing you to import
 * AIFieldBuilder for use in React JS and JSX.
 * @class
 * @extends SummaryBuilder
 */
declare class AIFieldBuilder extends SummaryBuilder {
    props: AsComponentXML<AIFieldBuilderProps>;
}
