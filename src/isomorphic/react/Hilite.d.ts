import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface HiliteProps {

/**
 * See {@link isc.Hilite.fieldName Hilite.fieldName}.
 */
fieldName?: string | string[];

/**
 * See {@link isc.Hilite.id Hilite.id}.
 */
id?: string;

/**
 * See {@link isc.Hilite.icon Hilite.icon}.
 */
icon?: string;

/**
 * See {@link isc.Hilite.replacementValue Hilite.replacementValue}.
 */
replacementValue?: string;

/**
 * See {@link isc.Hilite.cssText Hilite.cssText}.
 */
cssText?: string;

/**
 * See {@link isc.Hilite.htmlAfter Hilite.htmlAfter}.
 */
htmlAfter?: string;

/**
 * See {@link isc.Hilite.title Hilite.title}.
 */
title?: string;

/**
 * See {@link isc.Hilite.disabled Hilite.disabled}.
 */
disabled?: boolean;

/**
 * See {@link isc.Hilite.htmlValue Hilite.htmlValue}.
 */
htmlValue?: string;

/**
 * See {@link isc.Hilite.backgroundColor Hilite.backgroundColor}.
 */
backgroundColor?: string;

/**
 * See {@link isc.Hilite.canEdit Hilite.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.Hilite.textColor Hilite.textColor}.
 */
textColor?: string;

/**
 * See {@link isc.Hilite.htmlBefore Hilite.htmlBefore}.
 */
htmlBefore?: string;

/**
 * See {@link isc.Hilite.criteria Hilite.criteria}.
 */
criteria?: Criteria | AdvancedCriteria;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Hilite wraps the SmartClient object
 * {@link isc.Hilite Hilite} for React, allowing you to import
 * Hilite for use in React JS and JSX.
 * @class
 */
declare class Hilite extends ILogicalComponent {
    props: AsComponentXML<HiliteProps>;
}
