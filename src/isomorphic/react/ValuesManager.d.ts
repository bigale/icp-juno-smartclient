import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface ValuesManagerProps {

/**
 * See {@link isc.ValuesManager.itemChanged() ValuesManager.itemChanged()}.
 */
itemChanged?: Function;

/**
 * See {@link isc.ValuesManager.editRecord() ValuesManager.editRecord()}.
 */
editRecord?: Function;

/**
 * See {@link isc.ValuesManager.showErrors() ValuesManager.showErrors()}.
 */
showErrors?: Function;

/**
 * See {@link isc.ValuesManager.isNewRecord() ValuesManager.isNewRecord()}.
 */
isNewRecord?: Function;

/**
 * See {@link isc.ValuesManager.getValuesAsCriteria() ValuesManager.getValuesAsCriteria()}.
 */
getValuesAsCriteria?: Function;

/**
 * See {@link isc.ValuesManager.updateOperation ValuesManager.updateOperation}.
 */
updateOperation?: string;

/**
 * See {@link isc.ValuesManager.getValuesAsAdvancedCriteria() ValuesManager.getValuesAsAdvancedCriteria()}.
 */
getValuesAsAdvancedCriteria?: Function;

/**
 * See {@link isc.ValuesManager.filterData() ValuesManager.filterData()}.
 */
filterData?: Function;

/**
 * See {@link isc.ValuesManager.getValidatedValues() ValuesManager.getValidatedValues()}.
 */
getValidatedValues?: Function;

/**
 * See {@link isc.ValuesManager.checkForValidationErrors() ValuesManager.checkForValidationErrors()}.
 */
checkForValidationErrors?: Function;

/**
 * See {@link isc.ValuesManager.synchronizeMember() ValuesManager.synchronizeMember()}.
 */
synchronizeMember?: Function;

/**
 * See {@link isc.ValuesManager.getItem() ValuesManager.getItem()}.
 */
getItem?: Function;

/**
 * See {@link isc.ValuesManager.hasFieldErrors() ValuesManager.hasFieldErrors()}.
 */
hasFieldErrors?: Function;

/**
 * See {@link isc.ValuesManager.addMember() ValuesManager.addMember()}.
 */
addMember?: Function;

/**
 * See {@link isc.ValuesManager.deepCloneNonFieldValuesOnEdit ValuesManager.deepCloneNonFieldValuesOnEdit}.
 */
deepCloneNonFieldValuesOnEdit?: boolean;

/**
 * See {@link isc.ValuesManager.fetchOperation ValuesManager.fetchOperation}.
 */
fetchOperation?: string;

/**
 * See {@link isc.ValuesManager.setDataSource() ValuesManager.setDataSource()}.
 */
setDataSource?: Function;

/**
 * See {@link isc.ValuesManager.memberSynchronized() ValuesManager.memberSynchronized()}.
 */
memberSynchronized?: Function;

/**
 * See {@link isc.ValuesManager.synchronizeMembers() ValuesManager.synchronizeMembers()}.
 */
synchronizeMembers?: Function;

/**
 * See {@link isc.ValuesManager.handleAsyncValidationReply() ValuesManager.handleAsyncValidationReply()}.
 */
handleAsyncValidationReply?: Function;

/**
 * See {@link isc.ValuesManager.autoSynchronize ValuesManager.autoSynchronize}.
 */
autoSynchronize?: boolean;

/**
 * See {@link isc.ValuesManager.synchronizeMembersOnDataPath() ValuesManager.synchronizeMembersOnDataPath()}.
 */
synchronizeMembersOnDataPath?: Function;

/**
 * See {@link isc.ValuesManager.getFieldErrors() ValuesManager.getFieldErrors()}.
 */
getFieldErrors?: Function;

/**
 * See {@link isc.ValuesManager.handleHiddenValidationErrors() ValuesManager.handleHiddenValidationErrors()}.
 */
handleHiddenValidationErrors?: Function;

/**
 * See {@link isc.ValuesManager.validate() ValuesManager.validate()}.
 */
validate?: Function;

/**
 * See {@link isc.ValuesManager.getMemberValues() ValuesManager.getMemberValues()}.
 */
getMemberValues?: Function;

/**
 * See {@link isc.ValuesManager.clearFieldErrors() ValuesManager.clearFieldErrors()}.
 */
clearFieldErrors?: Function;

/**
 * See {@link isc.ValuesManager.getValue() ValuesManager.getValue()}.
 */
getValue?: Function;

/**
 * See {@link isc.ValuesManager.getErrors() ValuesManager.getErrors()}.
 */
getErrors?: Function;

/**
 * See {@link isc.ValuesManager.clearErrors() ValuesManager.clearErrors()}.
 */
clearErrors?: Function;

/**
 * See {@link isc.ValuesManager.submitValues() ValuesManager.submitValues()}.
 */
submitValues?: Function;

/**
 * See {@link isc.ValuesManager.dataSource ValuesManager.dataSource}.
 */
dataSource?: DataSource | string;

/**
 * See {@link isc.ValuesManager.resetValues() ValuesManager.resetValues()}.
 */
resetValues?: Function;

/**
 * See {@link isc.ValuesManager.removeOperation ValuesManager.removeOperation}.
 */
removeOperation?: string;

/**
 * See {@link isc.ValuesManager.valuesHaveChanged() ValuesManager.valuesHaveChanged()}.
 */
valuesHaveChanged?: Function;

/**
 * See {@link isc.ValuesManager.getDataSource() ValuesManager.getDataSource()}.
 */
getDataSource?: Function;

/**
 * See {@link isc.ValuesManager.hasErrors() ValuesManager.hasErrors()}.
 */
hasErrors?: Function;

/**
 * See {@link isc.ValuesManager.removeMembers() ValuesManager.removeMembers()}.
 */
removeMembers?: Function;

/**
 * See {@link isc.ValuesManager.saveData() ValuesManager.saveData()}.
 */
saveData?: Function;

/**
 * See {@link isc.ValuesManager.getMembers() ValuesManager.getMembers()}.
 */
getMembers?: Function;

/**
 * See {@link isc.ValuesManager.getChangedValues() ValuesManager.getChangedValues()}.
 */
getChangedValues?: Function;

/**
 * See {@link isc.ValuesManager.fetchData() ValuesManager.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.ValuesManager.clearValue() ValuesManager.clearValue()}.
 */
clearValue?: Function;

/**
 * See {@link isc.ValuesManager.saveOperationType ValuesManager.saveOperationType}.
 */
saveOperationType?: string;

/**
 * See {@link isc.ValuesManager.getMember() ValuesManager.getMember()}.
 */
getMember?: Function;

/**
 * See {@link isc.ValuesManager.valuesAreValid() ValuesManager.valuesAreValid()}.
 */
valuesAreValid?: Function;

/**
 * See {@link isc.ValuesManager.suppressValidationErrorCallback ValuesManager.suppressValidationErrorCallback}.
 */
suppressValidationErrorCallback?: boolean;

/**
 * See {@link isc.ValuesManager.setMemberValues() ValuesManager.setMemberValues()}.
 */
setMemberValues?: Function;

/**
 * See {@link isc.ValuesManager.addOperation ValuesManager.addOperation}.
 */
addOperation?: string;

/**
 * See {@link isc.ValuesManager.editNewRecord() ValuesManager.editNewRecord()}.
 */
editNewRecord?: Function;

/**
 * See {@link isc.ValuesManager.setValue() ValuesManager.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.ValuesManager.editSelectedData() ValuesManager.editSelectedData()}.
 */
editSelectedData?: Function;

/**
 * See {@link isc.ValuesManager.submit() ValuesManager.submit()}.
 */
submit?: Function;

/**
 * See {@link isc.ValuesManager.removeMember() ValuesManager.removeMember()}.
 */
removeMember?: Function;

/**
 * See {@link isc.ValuesManager.disableValidation ValuesManager.disableValidation}.
 */
disableValidation?: boolean;

/**
 * See {@link isc.ValuesManager.getValues() ValuesManager.getValues()}.
 */
getValues?: Function;

/**
 * See {@link isc.ValuesManager.cancel() ValuesManager.cancel()}.
 */
cancel?: Function;

/**
 * See {@link isc.ValuesManager.clearValues() ValuesManager.clearValues()}.
 */
clearValues?: Function;

/**
 * See {@link isc.ValuesManager.addMembers() ValuesManager.addMembers()}.
 */
addMembers?: Function;

/**
 * See {@link isc.ValuesManager.isPendingAsyncValidation() ValuesManager.isPendingAsyncValidation()}.
 */
isPendingAsyncValidation?: Function;

/**
 * See {@link isc.ValuesManager.rememberValues() ValuesManager.rememberValues()}.
 */
rememberValues?: Function;

/**
 * See {@link isc.ValuesManager.setSaveOperationType() ValuesManager.setSaveOperationType()}.
 */
setSaveOperationType?: Function;

/**
 * See {@link isc.ValuesManager.deepCloneOnEdit ValuesManager.deepCloneOnEdit}.
 */
deepCloneOnEdit?: boolean;

/**
 * See {@link isc.ValuesManager.setValues() ValuesManager.setValues()}.
 */
setValues?: Function;

/**
 * See {@link isc.ValuesManager.getOldValues() ValuesManager.getOldValues()}.
 */
getOldValues?: Function;

/**
 * See {@link isc.ValuesManager.addFieldErrors() ValuesManager.addFieldErrors()}.
 */
addFieldErrors?: Function;

/**
 * See {@link isc.ValuesManager.members ValuesManager.members}.
 */
members?: DynamicForm[];

/**
 * See {@link isc.ValuesManager.getSaveOperationType() ValuesManager.getSaveOperationType()}.
 */
getSaveOperationType?: Function;

/**
 * See {@link isc.ValuesManager.showFieldErrors() ValuesManager.showFieldErrors()}.
 */
showFieldErrors?: Function;

/**
 * See {@link isc.ValuesManager.operator ValuesManager.operator}.
 */
operator?: string;

/**
 * See {@link isc.ValuesManager.setFieldErrors() ValuesManager.setFieldErrors()}.
 */
setFieldErrors?: Function;

/**
 * See {@link isc.ValuesManager.setErrors() ValuesManager.setErrors()}.
 */
setErrors?: Function;

/**
 * See {@link isc.ValuesManager.getMemberForField() ValuesManager.getMemberForField()}.
 */
getMemberForField?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ValuesManager wraps the non-rendered SmartClient class
 * {@link isc.ValuesManager ValuesManager} for React, allowing you to import
 *  ValuesManager for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class ValuesManager extends ILogicalComponent {
    props: AsComponentXML<ValuesManagerProps>;
}
