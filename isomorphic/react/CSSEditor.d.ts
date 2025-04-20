import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface CSSEditorProps extends VLayoutProps {

/**
 * See {@link isc.CSSEditor.editCancelled() CSSEditor.editCancelled()}.
 */
editCancelled?: Function;

/**
 * See {@link isc.CSSEditor.getCSSText() CSSEditor.getCSSText()}.
 */
getCSSText?: Function;

/**
 * See {@link isc.CSSEditor.getCSSProperties() CSSEditor.getCSSProperties()}.
 */
getCSSProperties?: Function;

/**
 * See {@link isc.CSSEditor.groups CSSEditor.groups}.
 */
groups?: StyleGroup[];

/**
 * See {@link isc.CSSEditor.editComplete() CSSEditor.editComplete()}.
 */
editComplete?: Function;

/**
 * See {@link isc.CSSEditor.values CSSEditor.values}.
 */
values?: Object;

/**
 * See {@link isc.CSSEditor.valuesChanged() CSSEditor.valuesChanged()}.
 */
valuesChanged?: Function;

/**
 * See {@link isc.CSSEditor.setGroups() CSSEditor.setGroups()}.
 */
setGroups?: Function;

/**
 * See {@link isc.CSSEditor.clearGroups() CSSEditor.clearGroups()}.
 */
clearGroups?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CSSEditor wraps the SmartClient widget class
 * {@link isc.CSSEditor CSSEditor} for React, allowing you to import
 * CSSEditor for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class CSSEditor extends VLayout {
    props: AsComponentXML<CSSEditorProps>;
}
