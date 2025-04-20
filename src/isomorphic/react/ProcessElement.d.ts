import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ProcessElementProps {

/**
 * See {@link isc.ProcessElement.updateGlobalIDReferences() ProcessElement.updateGlobalIDReferences()}.
 */
updateGlobalIDReferences?: Function;

/**
 * See {@link isc.ProcessElement.forceSingle ProcessElement.forceSingle}.
 */
forceSingle?: boolean;

/**
 * See {@link isc.ProcessElement.updateGlobalIDInCriteria() ProcessElement.updateGlobalIDInCriteria()}.
 */
updateGlobalIDInCriteria?: Function;

/**
 * See {@link isc.ProcessElement.getEditorType() ProcessElement.getEditorType()}.
 */
getEditorType?: Function;

/**
 * See {@link isc.ProcessElement.updateLastElementInValueProperty() ProcessElement.updateLastElementInValueProperty()}.
 */
updateLastElementInValueProperty?: Function;

/**
 * See {@link isc.ProcessElement.passThruOutput ProcessElement.passThruOutput}.
 */
passThruOutput?: boolean;

/**
 * See {@link isc.ProcessElement.updateLastElementInCriteria() ProcessElement.updateLastElementInCriteria()}.
 */
updateLastElementInCriteria?: Function;

/**
 * See {@link isc.ProcessElement.typeTitle ProcessElement.typeTitle}.
 */
typeTitle?: string;

/**
 * See {@link isc.ProcessElement.waitLocator ProcessElement.waitLocator}.
 */
waitLocator?: string;

/**
 * See {@link isc.ProcessElement.getTextFormulaValue() ProcessElement.getTextFormulaValue()}.
 */
getTextFormulaValue?: Function;

/**
 * See {@link isc.ProcessElement.description ProcessElement.description}.
 */
description?: string;

/**
 * See {@link isc.ProcessElement.undefinedComponentMessage ProcessElement.undefinedComponentMessage}.
 */
undefinedComponentMessage?: string;

/**
 * See {@link isc.ProcessElement.getDynamicValue() ProcessElement.getDynamicValue()}.
 */
getDynamicValue?: Function;

/**
 * See {@link isc.ProcessElement.mockMode ProcessElement.mockMode}.
 */
mockMode?: boolean;

/**
 * See {@link isc.ProcessElement.supportsMultipleInputRecords ProcessElement.supportsMultipleInputRecords}.
 */
supportsMultipleInputRecords?: boolean;

/**
 * See {@link isc.ProcessElement.waitFor ProcessElement.waitFor}.
 */
waitFor?: string;

/**
 * See {@link isc.ProcessElement.classDescription ProcessElement.classDescription}.
 */
classDescription?: string;

/**
 * See {@link isc.ProcessElement.updateGlobalIDInValues() ProcessElement.updateGlobalIDInValues()}.
 */
updateGlobalIDInValues?: Function;

/**
 * See {@link isc.ProcessElement.objectReferencesLastTaskOutput() ProcessElement.objectReferencesLastTaskOutput()}.
 */
objectReferencesLastTaskOutput?: Function;

/**
 * See {@link isc.ProcessElement.reset() ProcessElement.reset()}.
 */
reset?: Function;

/**
 * See {@link isc.ProcessElement.getInvalidTaskMessage() ProcessElement.getInvalidTaskMessage()}.
 */
getInvalidTaskMessage?: Function;

/**
 * See {@link isc.ProcessElement.executeElement() ProcessElement.executeElement()}.
 */
executeElement?: Function;

/**
 * See {@link isc.ProcessElement.isValid() ProcessElement.isValid()}.
 */
isValid?: Function;

/**
 * See {@link isc.ProcessElement.updateGlobalIDInValueProperty() ProcessElement.updateGlobalIDInValueProperty()}.
 */
updateGlobalIDInValueProperty?: Function;

/**
 * See {@link isc.ProcessElement.getElementDescription() ProcessElement.getElementDescription()}.
 */
getElementDescription?: Function;

/**
 * See {@link isc.ProcessElement.editorType ProcessElement.editorType}.
 */
editorType?: string;

/**
 * See {@link isc.ProcessElement.waitDuration ProcessElement.waitDuration}.
 */
waitDuration?: number;

/**
 * See {@link isc.ProcessElement.getComponentReferences() ProcessElement.getComponentReferences()}.
 */
getComponentReferences?: Function;

/**
 * See {@link isc.ProcessElement.bindOutput ProcessElement.bindOutput}.
 */
bindOutput?: string;

/**
 * See {@link isc.ProcessElement.updateLastElementInValues() ProcessElement.updateLastElementInValues()}.
 */
updateLastElementInValues?: Function;

/**
 * See {@link isc.ProcessElement.ID ProcessElement.ID}.
 */
ID?: string;

/**
 * See {@link isc.ProcessElement.completeElement() ProcessElement.completeElement()}.
 */
completeElement?: Function;

/**
 * See {@link isc.ProcessElement.nextElement ProcessElement.nextElement}.
 */
nextElement?: string;

/**
 * See {@link isc.ProcessElement.updateLastElementBindingReferences() ProcessElement.updateLastElementBindingReferences()}.
 */
updateLastElementBindingReferences?: Function;

/**
 * See {@link isc.ProcessElement.unresolvedComponentMessage ProcessElement.unresolvedComponentMessage}.
 */
unresolvedComponentMessage?: string;

/**
 * See {@link isc.ProcessElement.updateGlobalIDInTextFormula() ProcessElement.updateGlobalIDInTextFormula()}.
 */
updateGlobalIDInTextFormula?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ProcessElement wraps the non-rendered SmartClient class
 * {@link isc.ProcessElement ProcessElement} for React, allowing you to import
 *  ProcessElement for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class ProcessElement extends ILogicalComponent {
    props: AsComponentXML<ProcessElementProps>;
}
