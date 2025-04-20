import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface OperationBindingProps {

/**
 * See {@link isc.OperationBinding.requiredCriterion OperationBinding.requiredCriterion}.
 */
requiredCriterion?: string;

/**
 * See {@link isc.OperationBinding.recordName OperationBinding.recordName}.
 */
recordName?: string;

/**
 * See {@link isc.OperationBinding.outputs OperationBinding.outputs}.
 */
outputs?: string;

/**
 * See {@link isc.OperationBinding.dataTransport OperationBinding.dataTransport}.
 */
dataTransport?: string;

/**
 * See {@link isc.OperationBinding.preventHTTPCaching OperationBinding.preventHTTPCaching}.
 */
preventHTTPCaching?: boolean;

/**
 * See {@link isc.OperationBinding.transformResponseScript OperationBinding.transformResponseScript}.
 */
transformResponseScript?: string;

/**
 * See {@link isc.OperationBinding.qualifyColumnNames OperationBinding.qualifyColumnNames}.
 */
qualifyColumnNames?: boolean;

/**
 * See {@link isc.OperationBinding.description OperationBinding.description}.
 */
description?: string;

/**
 * See {@link isc.OperationBinding.groupBy OperationBinding.groupBy}.
 */
groupBy?: string[];

/**
 * See {@link isc.OperationBinding.lineBreakStyle OperationBinding.lineBreakStyle}.
 */
lineBreakStyle?: string;

/**
 * See {@link isc.OperationBinding.multiInsertNonMatchingStrategy OperationBinding.multiInsertNonMatchingStrategy}.
 */
multiInsertNonMatchingStrategy?: string;

/**
 * See {@link isc.OperationBinding.mail OperationBinding.mail}.
 */
mail?: Mail;

/**
 * See {@link isc.OperationBinding.dataProtocol OperationBinding.dataProtocol}.
 */
dataProtocol?: string;

/**
 * See {@link isc.OperationBinding.requiresAuthentication OperationBinding.requiresAuthentication}.
 */
requiresAuthentication?: boolean;

/**
 * See {@link isc.OperationBinding.useHavingClause OperationBinding.useHavingClause}.
 */
useHavingClause?: boolean;

/**
 * See {@link isc.OperationBinding.criteria OperationBinding.criteria}.
 */
criteria?: DSRequestModifier[];

/**
 * See {@link isc.OperationBinding.useHttpProxy OperationBinding.useHttpProxy}.
 */
useHttpProxy?: boolean;

/**
 * See {@link isc.OperationBinding.wsOperation OperationBinding.wsOperation}.
 */
wsOperation?: string;

/**
 * See {@link isc.OperationBinding.callbackParam OperationBinding.callbackParam}.
 */
callbackParam?: string;

/**
 * See {@link isc.OperationBinding.exportResults OperationBinding.exportResults}.
 */
exportResults?: boolean;

/**
 * See {@link isc.OperationBinding.serverObject OperationBinding.serverObject}.
 */
serverObject?: ServerObject;

/**
 * See {@link isc.OperationBinding.requestProperties OperationBinding.requestProperties}.
 */
requestProperties?: DSRequest;

/**
 * See {@link isc.OperationBinding.summaryFunctions OperationBinding.summaryFunctions}.
 */
summaryFunctions?: Object;

/**
 * See {@link isc.OperationBinding.methodArguments OperationBinding.methodArguments}.
 */
methodArguments?: string;

/**
 * See {@link isc.OperationBinding.requires OperationBinding.requires}.
 */
requires?: string;

/**
 * See {@link isc.OperationBinding.xmlNamespaces OperationBinding.xmlNamespaces}.
 */
xmlNamespaces?: Object;

/**
 * See {@link isc.OperationBinding.creatorOverrides OperationBinding.creatorOverrides}.
 */
creatorOverrides?: boolean;

/**
 * See {@link isc.OperationBinding.transformRequestScript OperationBinding.transformRequestScript}.
 */
transformRequestScript?: string;

/**
 * See {@link isc.OperationBinding.multiInsertBatchSize OperationBinding.multiInsertBatchSize}.
 */
multiInsertBatchSize?: number;

/**
 * See {@link isc.OperationBinding.exportFields OperationBinding.exportFields}.
 */
exportFields?: string[];

/**
 * See {@link isc.OperationBinding.responseDataSchema OperationBinding.responseDataSchema}.
 */
responseDataSchema?: DataSource;

/**
 * See {@link isc.OperationBinding.forceSort OperationBinding.forceSort}.
 */
forceSort?: string;

/**
 * See {@link isc.OperationBinding.allowAdvancedCriteria OperationBinding.allowAdvancedCriteria}.
 */
allowAdvancedCriteria?: boolean;

/**
 * See {@link isc.OperationBinding.invalidateCache OperationBinding.invalidateCache}.
 */
invalidateCache?: boolean;

/**
 * See {@link isc.OperationBinding.requiresRole OperationBinding.requiresRole}.
 */
requiresRole?: string;

/**
 * See {@link isc.OperationBinding.exportFilename OperationBinding.exportFilename}.
 */
exportFilename?: string;

/**
 * See {@link isc.OperationBinding.useFlatFields OperationBinding.useFlatFields}.
 */
useFlatFields?: boolean;

/**
 * See {@link isc.OperationBinding.script OperationBinding.script}.
 */
script?: string;

/**
 * See {@link isc.OperationBinding.progressiveLoading OperationBinding.progressiveLoading}.
 */
progressiveLoading?: boolean;

/**
 * See {@link isc.OperationBinding.operationType OperationBinding.operationType}.
 */
operationType?: string;

/**
 * See {@link isc.OperationBinding.useSubselectForRowCount OperationBinding.useSubselectForRowCount}.
 */
useSubselectForRowCount?: boolean;

/**
 * See {@link isc.OperationBinding.multiInsertStrategy OperationBinding.multiInsertStrategy}.
 */
multiInsertStrategy?: string;

/**
 * See {@link isc.OperationBinding.isDDL OperationBinding.isDDL}.
 */
isDDL?: boolean;

/**
 * See {@link isc.OperationBinding.transformMultipleFields OperationBinding.transformMultipleFields}.
 */
transformMultipleFields?: boolean;

/**
 * See {@link isc.OperationBinding.skipAudit OperationBinding.skipAudit}.
 */
skipAudit?: boolean;

/**
 * See {@link isc.OperationBinding.beanClassName OperationBinding.beanClassName}.
 */
beanClassName?: string;

/**
 * See {@link isc.OperationBinding.serverMethod OperationBinding.serverMethod}.
 */
serverMethod?: string;

/**
 * See {@link isc.OperationBinding.applyCriteriaBeforeAggregation OperationBinding.applyCriteriaBeforeAggregation}.
 */
applyCriteriaBeforeAggregation?: boolean;

/**
 * See {@link isc.OperationBinding.exportAs OperationBinding.exportAs}.
 */
exportAs?: string;

/**
 * See {@link isc.OperationBinding.defaultParams OperationBinding.defaultParams}.
 */
defaultParams?: Object;

/**
 * See {@link isc.OperationBinding.values OperationBinding.values}.
 */
values?: DSRequestModifier[];

/**
 * See {@link isc.OperationBinding.guestUserId OperationBinding.guestUserId}.
 */
guestUserId?: string;

/**
 * See {@link isc.OperationBinding.recordXPath OperationBinding.recordXPath}.
 */
recordXPath?: string;

/**
 * See {@link isc.OperationBinding.allowMultiUpdate OperationBinding.allowMultiUpdate}.
 */
allowMultiUpdate?: boolean;

/**
 * See {@link isc.OperationBinding.spoofResponses OperationBinding.spoofResponses}.
 */
spoofResponses?: boolean;

/**
 * See {@link isc.OperationBinding.sqlUsePagingHint OperationBinding.sqlUsePagingHint}.
 */
sqlUsePagingHint?: boolean;

/**
 * See {@link isc.OperationBinding.dataURL OperationBinding.dataURL}.
 */
dataURL?: string;

/**
 * See {@link isc.OperationBinding.operationId OperationBinding.operationId}.
 */
operationId?: string;

/**
 * See {@link isc.OperationBinding.dataFormat OperationBinding.dataFormat}.
 */
dataFormat?: string;

/**
 * See {@link isc.OperationBinding.ownerIdField OperationBinding.ownerIdField}.
 */
ownerIdField?: string;

/**
 * See {@link isc.OperationBinding.providesMissingKeys OperationBinding.providesMissingKeys}.
 */
providesMissingKeys?: boolean;

/**
 * See {@link isc.OperationBinding.arrayCriteriaForceExact OperationBinding.arrayCriteriaForceExact}.
 */
arrayCriteriaForceExact?: boolean;

/**
 * See {@link isc.OperationBinding.sqlPaging OperationBinding.sqlPaging}.
 */
sqlPaging?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * OperationBinding wraps the non-rendered SmartClient class
 * {@link isc.OperationBinding OperationBinding} for React, allowing you to import
 *  OperationBinding for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class OperationBinding extends ILogicalComponent {
    props: AsComponentXML<OperationBindingProps>;
}
