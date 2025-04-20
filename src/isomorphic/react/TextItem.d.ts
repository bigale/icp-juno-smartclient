import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface TextItemProps extends FormItemProps {

/**
 * See {@link isc.TextItem.width TextItem.width}.
 */
width?: number;

/**
 * See {@link isc.TextItem.escapeHTML TextItem.escapeHTML}.
 */
escapeHTML?: boolean;

/**
 * See {@link isc.TextItem.maskOverwriteMode TextItem.maskOverwriteMode}.
 */
maskOverwriteMode?: boolean;

/**
 * See {@link isc.TextItem.selectOnClick TextItem.selectOnClick}.
 */
selectOnClick?: boolean;

/**
 * See {@link isc.TextItem.textBoxStyle TextItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.TextItem.length TextItem.length}.
 */
length?: number;

/**
 * See {@link isc.TextItem.keyPressFilter TextItem.keyPressFilter}.
 */
keyPressFilter?: string;

/**
 * See {@link isc.TextItem.maskSaveLiterals TextItem.maskSaveLiterals}.
 */
maskSaveLiterals?: boolean;

/**
 * See {@link isc.TextItem.shouldFetchMissingValue() TextItem.shouldFetchMissingValue()}.
 */
shouldFetchMissingValue?: Function;

/**
 * See {@link isc.TextItem.formatOnBlur TextItem.formatOnBlur}.
 */
formatOnBlur?: boolean;

/**
 * See {@link isc.TextItem.browserAutoCapitalize TextItem.browserAutoCapitalize}.
 */
browserAutoCapitalize?: boolean;

/**
 * See {@link isc.TextItem.selectValue() TextItem.selectValue()}.
 */
selectValue?: Function;

/**
 * See {@link isc.TextItem.changeOnKeypress TextItem.changeOnKeypress}.
 */
changeOnKeypress?: boolean;

/**
 * See {@link isc.TextItem.mask TextItem.mask}.
 */
mask?: string;

/**
 * See {@link isc.TextItem.showInputElement TextItem.showInputElement}.
 */
showInputElement?: boolean;

/**
 * See {@link isc.TextItem.getEnteredValue() TextItem.getEnteredValue()}.
 */
getEnteredValue?: Function;

/**
 * See {@link isc.TextItem.setSuppressBrowserClearIcon() TextItem.setSuppressBrowserClearIcon()}.
 */
setSuppressBrowserClearIcon?: Function;

/**
 * See {@link isc.TextItem.suppressBrowserClearIcon TextItem.suppressBrowserClearIcon}.
 */
suppressBrowserClearIcon?: boolean;

/**
 * See {@link isc.TextItem.printFullText TextItem.printFullText}.
 */
printFullText?: boolean;

/**
 * See {@link isc.TextItem.enforceLength TextItem.enforceLength}.
 */
enforceLength?: boolean;

/**
 * See {@link isc.TextItem.selectOnFocus TextItem.selectOnFocus}.
 */
selectOnFocus?: boolean;

/**
 * See {@link isc.TextItem.height TextItem.height}.
 */
height?: number;

/**
 * See {@link isc.TextItem.setKeyPressFilter() TextItem.setKeyPressFilter()}.
 */
setKeyPressFilter?: Function;

/**
 * See {@link isc.TextItem.setSelectionRange() TextItem.setSelectionRange()}.
 */
setSelectionRange?: Function;

/**
 * See {@link isc.TextItem.setMask() TextItem.setMask()}.
 */
setMask?: Function;

/**
 * See {@link isc.TextItem.maskPadChar TextItem.maskPadChar}.
 */
maskPadChar?: string;

/**
 * See {@link isc.TextItem.usePlaceholderForHint TextItem.usePlaceholderForHint}.
 */
usePlaceholderForHint?: boolean;

/**
 * See {@link isc.TextItem.fetchMissingValues TextItem.fetchMissingValues}.
 */
fetchMissingValues?: boolean;

/**
 * See {@link isc.TextItem.browserAutoCorrect TextItem.browserAutoCorrect}.
 */
browserAutoCorrect?: boolean;

/**
 * See {@link isc.TextItem.getSelectionRange() TextItem.getSelectionRange()}.
 */
getSelectionRange?: Function;

/**
 * See {@link isc.TextItem.deselectValue() TextItem.deselectValue()}.
 */
deselectValue?: Function;

/**
 * See {@link isc.TextItem.maskPromptChar TextItem.maskPromptChar}.
 */
maskPromptChar?: string;

/**
 * See {@link isc.TextItem.getHint() TextItem.getHint()}.
 */
getHint?: Function;

/**
 * See {@link isc.TextItem.formatOnFocusChange TextItem.formatOnFocusChange}.
 */
formatOnFocusChange?: boolean;

/**
 * See {@link isc.TextItem.supportsCutPasteEvents TextItem.supportsCutPasteEvents}.
 */
supportsCutPasteEvents?: boolean;

/**
 * See {@link isc.TextItem.characterCasing TextItem.characterCasing}.
 */
characterCasing?: string;

/**
 * See {@link isc.TextItem.pendingStatusChanged() TextItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.TextItem.showHintInField TextItem.showHintInField}.
 */
showHintInField?: boolean;

/**
 * See {@link isc.TextItem.editProxyConstructor TextItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.TextItem.saveOnEnter TextItem.saveOnEnter}.
 */
saveOnEnter?: boolean;

/**
 * See {@link isc.TextItem.browserInputType TextItem.browserInputType}.
 */
browserInputType?: string;

/**
 * See {@link isc.TextItem.emptyStringValue TextItem.emptyStringValue}.
 */
emptyStringValue?: any;

/**
 * See {@link isc.TextItem.transformPastedValue() TextItem.transformPastedValue()}.
 */
transformPastedValue?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TextItem wraps the SmartClient widget class
 * {@link isc.TextItem TextItem} for React, allowing you to import
 * TextItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class TextItem extends FormItem {
    props: AsComponentXML<TextItemProps>;
}
