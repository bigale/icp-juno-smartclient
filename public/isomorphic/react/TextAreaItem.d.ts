import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface TextAreaItemProps extends FormItemProps {

/**
 * See {@link isc.TextAreaItem.selectOnFocus TextAreaItem.selectOnFocus}.
 */
selectOnFocus?: boolean;

/**
 * See {@link isc.TextAreaItem.textBoxStyle TextAreaItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.TextAreaItem.supportsCutPasteEvents TextAreaItem.supportsCutPasteEvents}.
 */
supportsCutPasteEvents?: boolean;

/**
 * See {@link isc.TextAreaItem.defaultValue TextAreaItem.defaultValue}.
 */
defaultValue?: string;

/**
 * See {@link isc.TextAreaItem.transformPastedValue() TextAreaItem.transformPastedValue()}.
 */
transformPastedValue?: Function;

/**
 * See {@link isc.TextAreaItem.selectOnClick TextAreaItem.selectOnClick}.
 */
selectOnClick?: boolean;

/**
 * See {@link isc.TextAreaItem.selectValue() TextAreaItem.selectValue()}.
 */
selectValue?: Function;

/**
 * See {@link isc.TextAreaItem.formatOnBlur TextAreaItem.formatOnBlur}.
 */
formatOnBlur?: boolean;

/**
 * See {@link isc.TextAreaItem.wrap TextAreaItem.wrap}.
 */
wrap?: string;

/**
 * See {@link isc.TextAreaItem.pickerIconHeight TextAreaItem.pickerIconHeight}.
 */
pickerIconHeight?: number;

/**
 * See {@link isc.TextAreaItem.height TextAreaItem.height}.
 */
height?: number;

/**
 * See {@link isc.TextAreaItem.width TextAreaItem.width}.
 */
width?: number;

/**
 * See {@link isc.TextAreaItem.enforceLength TextAreaItem.enforceLength}.
 */
enforceLength?: boolean;

/**
 * See {@link isc.TextAreaItem.emptyStringValue TextAreaItem.emptyStringValue}.
 */
emptyStringValue?: any;

/**
 * See {@link isc.TextAreaItem.staticHeight TextAreaItem.staticHeight}.
 */
staticHeight?: number;

/**
 * See {@link isc.TextAreaItem.iconVAlign TextAreaItem.iconVAlign}.
 */
iconVAlign?: string;

/**
 * See {@link isc.TextAreaItem.usePlaceholderForHint TextAreaItem.usePlaceholderForHint}.
 */
usePlaceholderForHint?: boolean;

/**
 * See {@link isc.TextAreaItem.showHintInField TextAreaItem.showHintInField}.
 */
showHintInField?: boolean;

/**
 * See {@link isc.TextAreaItem.editProxyConstructor TextAreaItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.TextAreaItem.changeOnKeypress TextAreaItem.changeOnKeypress}.
 */
changeOnKeypress?: boolean;

/**
 * See {@link isc.TextAreaItem.browserAutoCorrect TextAreaItem.browserAutoCorrect}.
 */
browserAutoCorrect?: boolean;

/**
 * See {@link isc.TextAreaItem.escapeHTML TextAreaItem.escapeHTML}.
 */
escapeHTML?: boolean;

/**
 * See {@link isc.TextAreaItem.setSelectionRange() TextAreaItem.setSelectionRange()}.
 */
setSelectionRange?: Function;

/**
 * See {@link isc.TextAreaItem.minHeight TextAreaItem.minHeight}.
 */
minHeight?: number;

/**
 * See {@link isc.TextAreaItem.length TextAreaItem.length}.
 */
length?: number;

/**
 * See {@link isc.TextAreaItem.printFullText TextAreaItem.printFullText}.
 */
printFullText?: boolean;

/**
 * See {@link isc.TextAreaItem.browserAutoCapitalize TextAreaItem.browserAutoCapitalize}.
 */
browserAutoCapitalize?: boolean;

/**
 * See {@link isc.TextAreaItem.deselectValue() TextAreaItem.deselectValue()}.
 */
deselectValue?: Function;

/**
 * See {@link isc.TextAreaItem.getEnteredValue() TextAreaItem.getEnteredValue()}.
 */
getEnteredValue?: Function;

/**
 * See {@link isc.TextAreaItem.getSelectionRange() TextAreaItem.getSelectionRange()}.
 */
getSelectionRange?: Function;

/**
 * See {@link isc.TextAreaItem.showInputElement TextAreaItem.showInputElement}.
 */
showInputElement?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TextAreaItem wraps the SmartClient widget class
 * {@link isc.TextAreaItem TextAreaItem} for React, allowing you to import
 * TextAreaItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class TextAreaItem extends FormItem {
    props: AsComponentXML<TextAreaItemProps>;
}
