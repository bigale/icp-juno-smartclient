import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FormItemIconProps {

/**
 * See {@link isc.FormItemIcon.click() FormItemIcon.click()}.
 */
click?: Function;

/**
 * See {@link isc.FormItemIcon.neverDisable FormItemIcon.neverDisable}.
 */
neverDisable?: boolean;

/**
 * See {@link isc.FormItemIcon.text FormItemIcon.text}.
 */
text?: string;

/**
 * See {@link isc.FormItemIcon.inline FormItemIcon.inline}.
 */
inline?: boolean;

/**
 * See {@link isc.FormItemIcon.baseStyle FormItemIcon.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.FormItemIcon.showError FormItemIcon.showError}.
 */
showError?: boolean;

/**
 * See {@link isc.FormItemIcon.showRTL FormItemIcon.showRTL}.
 */
showRTL?: boolean;

/**
 * See {@link isc.FormItemIcon.cursor FormItemIcon.cursor}.
 */
cursor?: string;

/**
 * See {@link isc.FormItemIcon.src FormItemIcon.src}.
 */
src?: string | SCStatefulImgConfig;

/**
 * See {@link isc.FormItemIcon.showDisabledOnFocus FormItemIcon.showDisabledOnFocus}.
 */
showDisabledOnFocus?: boolean;

/**
 * See {@link isc.FormItemIcon.showFocused FormItemIcon.showFocused}.
 */
showFocused?: boolean;

/**
 * See {@link isc.FormItemIcon.visibleWhen FormItemIcon.visibleWhen}.
 */
visibleWhen?: AdvancedCriteria;

/**
 * See {@link isc.FormItemIcon.tabIndex FormItemIcon.tabIndex}.
 */
tabIndex?: number;

/**
 * See {@link isc.FormItemIcon.showOverWhen FormItemIcon.showOverWhen}.
 */
showOverWhen?: string;

/**
 * See {@link isc.FormItemIcon.keyPress() FormItemIcon.keyPress()}.
 */
keyPress?: Function;

/**
 * See {@link isc.FormItemIcon.prompt FormItemIcon.prompt}.
 */
prompt?: string;

/**
 * See {@link isc.FormItemIcon.hspace FormItemIcon.hspace}.
 */
hspace?: number;

/**
 * See {@link isc.FormItemIcon.enableWhen FormItemIcon.enableWhen}.
 */
enableWhen?: AdvancedCriteria;

/**
 * See {@link isc.FormItemIcon.inlineIconAlign FormItemIcon.inlineIconAlign}.
 */
inlineIconAlign?: string;

/**
 * See {@link isc.FormItemIcon.width FormItemIcon.width}.
 */
width?: number;

/**
 * See {@link isc.FormItemIcon.disabled FormItemIcon.disabled}.
 */
disabled?: boolean;

/**
 * See {@link isc.FormItemIcon.disabledCursor FormItemIcon.disabledCursor}.
 */
disabledCursor?: string;

/**
 * See {@link isc.FormItemIcon.height FormItemIcon.height}.
 */
height?: number;

/**
 * See {@link isc.FormItemIcon.iconPlacement FormItemIcon.iconPlacement}.
 */
iconPlacement?: string;

/**
 * See {@link isc.FormItemIcon.showIf() FormItemIcon.showIf()}.
 */
showIf?: Function;

/**
 * See {@link isc.FormItemIcon.showOnFocus FormItemIcon.showOnFocus}.
 */
showOnFocus?: boolean;

/**
 * See {@link isc.FormItemIcon.disableOnReadOnly FormItemIcon.disableOnReadOnly}.
 */
disableOnReadOnly?: boolean;

/**
 * See {@link isc.FormItemIcon.showFocusedWithItem FormItemIcon.showFocusedWithItem}.
 */
showFocusedWithItem?: boolean;

/**
 * See {@link isc.FormItemIcon.canFocus FormItemIcon.canFocus}.
 */
canFocus?: boolean;

/**
 * See {@link isc.FormItemIcon.name FormItemIcon.name}.
 */
name?: string;

/**
 * See {@link isc.FormItemIcon.showOver FormItemIcon.showOver}.
 */
showOver?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FormItemIcon wraps the SmartClient object
 * {@link isc.FormItemIcon FormItemIcon} for React, allowing you to import
 * FormItemIcon for use in React JS and JSX.
 * @class
 */
declare class FormItemIcon extends ILogicalComponent {
    props: AsComponentXML<FormItemIconProps>;
}
