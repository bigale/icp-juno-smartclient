import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DataSourceProps {

/**
 * See {@link isc.DataSource.getFieldOperators() DataSource.getFieldOperators()}.
 */
getFieldOperators?: Function;

/**
 * See {@link isc.DataSource.sqlUsePagingHint DataSource.sqlUsePagingHint}.
 */
sqlUsePagingHint?: boolean;

/**
 * See {@link isc.DataSource.createAlias() DataSource.createAlias()}.
 */
createAlias?: Function;

/**
 * See {@link isc.DataSource.autoDiscoverTree DataSource.autoDiscoverTree}.
 */
autoDiscoverTree?: boolean;

/**
 * See {@link isc.DataSource.xmlSerialize() DataSource.xmlSerialize()}.
 */
xmlSerialize?: Function;

/**
 * See {@link isc.DataSource.resultBatchSize DataSource.resultBatchSize}.
 */
resultBatchSize?: number;

/**
 * See {@link isc.DataSource.beanClassName DataSource.beanClassName}.
 */
beanClassName?: string;

/**
 * See {@link isc.DataSource.auditDataSourceID DataSource.auditDataSourceID}.
 */
auditDataSourceID?: string;

/**
 * See {@link isc.DataSource.serverConstructor DataSource.serverConstructor}.
 */
serverConstructor?: string;

/**
 * See {@link isc.DataSource.dataFormat DataSource.dataFormat}.
 */
dataFormat?: string;

/**
 * See {@link isc.DataSource.renameFile() DataSource.renameFile()}.
 */
renameFile?: Function;

/**
 * See {@link isc.DataSource.recordsAreEqual() DataSource.recordsAreEqual()}.
 */
recordsAreEqual?: Function;

/**
 * See {@link isc.DataSource.autoCacheAllData DataSource.autoCacheAllData}.
 */
autoCacheAllData?: boolean;

/**
 * See {@link isc.DataSource.jsonSuffix DataSource.jsonSuffix}.
 */
jsonSuffix?: string;

/**
 * See {@link isc.DataSource.sequenceMode DataSource.sequenceMode}.
 */
sequenceMode?: string;

/**
 * See {@link isc.DataSource.formatFieldValue() DataSource.formatFieldValue()}.
 */
formatFieldValue?: Function;

/**
 * See {@link isc.DataSource.sqlPaging DataSource.sqlPaging}.
 */
sqlPaging?: string;

/**
 * See {@link isc.DataSource.script DataSource.script}.
 */
script?: string;

/**
 * See {@link isc.DataSource.fileNameField DataSource.fileNameField}.
 */
fileNameField?: string;

/**
 * See {@link isc.DataSource.updateData() DataSource.updateData()}.
 */
updateData?: Function;

/**
 * See {@link isc.DataSource.getDataProtocol() DataSource.getDataProtocol()}.
 */
getDataProtocol?: Function;

/**
 * See {@link isc.DataSource.getSearchOperator() DataSource.getSearchOperator()}.
 */
getSearchOperator?: Function;

/**
 * See {@link isc.DataSource.viewFile() DataSource.viewFile()}.
 */
viewFile?: Function;

/**
 * See {@link isc.DataSource.auditUserFieldName DataSource.auditUserFieldName}.
 */
auditUserFieldName?: string;

/**
 * See {@link isc.DataSource.getFieldOperatorMap() DataSource.getFieldOperatorMap()}.
 */
getFieldOperatorMap?: Function;

/**
 * See {@link isc.DataSource.compareDates() DataSource.compareDates()}.
 */
compareDates?: Function;

/**
 * See {@link isc.DataSource.setCacheAllData() DataSource.setCacheAllData()}.
 */
setCacheAllData?: Function;

/**
 * See {@link isc.DataSource.operationBindings DataSource.operationBindings}.
 */
operationBindings?: OperationBinding[];

/**
 * See {@link isc.DataSource.logSlowRemove DataSource.logSlowRemove}.
 */
logSlowRemove?: number;

/**
 * See {@link isc.DataSource.fileTypeField DataSource.fileTypeField}.
 */
fileTypeField?: string;

/**
 * See {@link isc.DataSource.getCacheData() DataSource.getCacheData()}.
 */
getCacheData?: Function;

/**
 * See {@link isc.DataSource.useFlatFields DataSource.useFlatFields}.
 */
useFlatFields?: boolean;

/**
 * See {@link isc.DataSource.infoField DataSource.infoField}.
 */
infoField?: string;

/**
 * See {@link isc.DataSource.hasAllData() DataSource.hasAllData()}.
 */
hasAllData?: Function;

/**
 * See {@link isc.DataSource.xmlNamespaces DataSource.xmlNamespaces}.
 */
xmlNamespaces?: Object;

/**
 * See {@link isc.DataSource.multiInsertNonMatchingStrategy DataSource.multiInsertNonMatchingStrategy}.
 */
multiInsertNonMatchingStrategy?: string;

/**
 * See {@link isc.DataSource.requires DataSource.requires}.
 */
requires?: string;

/**
 * See {@link isc.DataSource.cacheData DataSource.cacheData}.
 */
cacheData?: Record[];

/**
 * See {@link isc.DataSource.getXMLRequestBody() DataSource.getXMLRequestBody()}.
 */
getXMLRequestBody?: Function;

/**
 * See {@link isc.DataSource.ID DataSource.ID}.
 */
ID?: string;

/**
 * See {@link isc.DataSource.exportData() DataSource.exportData()}.
 */
exportData?: Function;

/**
 * See {@link isc.DataSource.getFieldNames() DataSource.getFieldNames()}.
 */
getFieldNames?: Function;

/**
 * See {@link isc.DataSource.maxFileVersions DataSource.maxFileVersions}.
 */
maxFileVersions?: number;

/**
 * See {@link isc.DataSource.tagName DataSource.tagName}.
 */
tagName?: string;

/**
 * See {@link isc.DataSource.generateAuditDS DataSource.generateAuditDS}.
 */
generateAuditDS?: boolean;

/**
 * See {@link isc.DataSource.useStrictJSON DataSource.useStrictJSON}.
 */
useStrictJSON?: boolean;

/**
 * See {@link isc.DataSource.validateData() DataSource.validateData()}.
 */
validateData?: Function;

/**
 * See {@link isc.DataSource.convertDataSourceCriteria() DataSource.convertDataSourceCriteria()}.
 */
convertDataSourceCriteria?: Function;

/**
 * See {@link isc.DataSource.allowClientRequestedSummaries DataSource.allowClientRequestedSummaries}.
 */
allowClientRequestedSummaries?: boolean;

/**
 * See {@link isc.DataSource.testData DataSource.testData}.
 */
testData?: Record[];

/**
 * See {@link isc.DataSource.enforceSecurityOnClient DataSource.enforceSecurityOnClient}.
 */
enforceSecurityOnClient?: boolean;

/**
 * See {@link isc.DataSource.useLocalValidators DataSource.useLocalValidators}.
 */
useLocalValidators?: boolean;

/**
 * See {@link isc.DataSource.enumTranslateStrategy DataSource.enumTranslateStrategy}.
 */
enumTranslateStrategy?: string;

/**
 * See {@link isc.DataSource.clientOnly DataSource.clientOnly}.
 */
clientOnly?: boolean;

/**
 * See {@link isc.DataSource.ignoreTextMatchStyleCaseSensitive DataSource.ignoreTextMatchStyleCaseSensitive}.
 */
ignoreTextMatchStyleCaseSensitive?: boolean;

/**
 * See {@link isc.DataSource.cacheAllData DataSource.cacheAllData}.
 */
cacheAllData?: boolean;

/**
 * See {@link isc.DataSource.cloneDSResponse() DataSource.cloneDSResponse()}.
 */
cloneDSResponse?: Function;

/**
 * See {@link isc.DataSource.criteriaPolicy DataSource.criteriaPolicy}.
 */
criteriaPolicy?: string;

/**
 * See {@link isc.DataSource.recordsFromText() DataSource.recordsFromText()}.
 */
recordsFromText?: Function;

/**
 * See {@link isc.DataSource.logSlowAdd DataSource.logSlowAdd}.
 */
logSlowAdd?: number;

/**
 * See {@link isc.DataSource.callbackParam DataSource.callbackParam}.
 */
callbackParam?: string;

/**
 * See {@link isc.DataSource.auditTimeStampFieldName DataSource.auditTimeStampFieldName}.
 */
auditTimeStampFieldName?: string;

/**
 * See {@link isc.DataSource.mockDataCriteria DataSource.mockDataCriteria}.
 */
mockDataCriteria?: Criteria;

/**
 * See {@link isc.DataSource.progressiveLoadingThreshold DataSource.progressiveLoadingThreshold}.
 */
progressiveLoadingThreshold?: number;

/**
 * See {@link isc.DataSource.showLocalFieldsOnly DataSource.showLocalFieldsOnly}.
 */
showLocalFieldsOnly?: boolean;

/**
 * See {@link isc.DataSource.addGlobalId DataSource.addGlobalId}.
 */
addGlobalId?: boolean;

/**
 * See {@link isc.DataSource.deepCloneNonFieldValuesOnEdit DataSource.deepCloneNonFieldValuesOnEdit}.
 */
deepCloneNonFieldValuesOnEdit?: boolean;

/**
 * See {@link isc.DataSource.cacheAllOperationId DataSource.cacheAllOperationId}.
 */
cacheAllOperationId?: string;

/**
 * See {@link isc.DataSource.dataChanged() DataSource.dataChanged()}.
 */
dataChanged?: Function;

/**
 * See {@link isc.DataSource.exportClientData() DataSource.exportClientData()}.
 */
exportClientData?: Function;

/**
 * See {@link isc.DataSource.useTestDataFetch DataSource.useTestDataFetch}.
 */
useTestDataFetch?: boolean;

/**
 * See {@link isc.DataSource.applyFilter() DataSource.applyFilter()}.
 */
applyFilter?: Function;

/**
 * See {@link isc.DataSource.fileVersionField DataSource.fileVersionField}.
 */
fileVersionField?: string;

/**
 * See {@link isc.DataSource.removeFile() DataSource.removeFile()}.
 */
removeFile?: Function;

/**
 * See {@link isc.DataSource.noNullUpdates DataSource.noNullUpdates}.
 */
noNullUpdates?: boolean;

/**
 * See {@link isc.DataSource.transformMultipleFields DataSource.transformMultipleFields}.
 */
transformMultipleFields?: boolean;

/**
 * See {@link isc.DataSource.suppressManualAggregation DataSource.suppressManualAggregation}.
 */
suppressManualAggregation?: string;

/**
 * See {@link isc.DataSource.getFieldDefaultOperator() DataSource.getFieldDefaultOperator()}.
 */
getFieldDefaultOperator?: Function;

/**
 * See {@link isc.DataSource.getFile() DataSource.getFile()}.
 */
getFile?: Function;

/**
 * See {@link isc.DataSource.enumConstantProperty DataSource.enumConstantProperty}.
 */
enumConstantProperty?: string;

/**
 * See {@link isc.DataSource.copyRecord() DataSource.copyRecord()}.
 */
copyRecord?: Function;

/**
 * See {@link isc.DataSource.recordName DataSource.recordName}.
 */
recordName?: string;

/**
 * See {@link isc.DataSource.sendParentNode DataSource.sendParentNode}.
 */
sendParentNode?: boolean;

/**
 * See {@link isc.DataSource.processResponse() DataSource.processResponse()}.
 */
processResponse?: Function;

/**
 * See {@link isc.DataSource.clientRequestMaxRows DataSource.clientRequestMaxRows}.
 */
clientRequestMaxRows?: number;

/**
 * See {@link isc.DataSource.dataTransport DataSource.dataTransport}.
 */
dataTransport?: string;

/**
 * See {@link isc.DataSource.dropExtraFields DataSource.dropExtraFields}.
 */
dropExtraFields?: boolean;

/**
 * See {@link isc.DataSource.dbName DataSource.dbName}.
 */
dbName?: string;

/**
 * See {@link isc.DataSource.quoteTableName DataSource.quoteTableName}.
 */
quoteTableName?: boolean;

/**
 * See {@link isc.DataSource.fileLastModifiedField DataSource.fileLastModifiedField}.
 */
fileLastModifiedField?: string;

/**
 * See {@link isc.DataSource.descriptionField DataSource.descriptionField}.
 */
descriptionField?: string;

/**
 * See {@link isc.DataSource.getFileVersion() DataSource.getFileVersion()}.
 */
getFileVersion?: Function;

/**
 * See {@link isc.DataSource.serverObject DataSource.serverObject}.
 */
serverObject?: ServerObject;

/**
 * See {@link isc.DataSource.validateRelatedRecords DataSource.validateRelatedRecords}.
 */
validateRelatedRecords?: boolean;

/**
 * See {@link isc.DataSource.getFieldForDataPath() DataSource.getFieldForDataPath()}.
 */
getFieldForDataPath?: Function;

/**
 * See {@link isc.DataSource.getPrimaryKeyFieldName() DataSource.getPrimaryKeyFieldName()}.
 */
getPrimaryKeyFieldName?: Function;

/**
 * See {@link isc.DataSource.logSlowCustom DataSource.logSlowCustom}.
 */
logSlowCustom?: number;

/**
 * See {@link isc.DataSource.autoDeriveTitles DataSource.autoDeriveTitles}.
 */
autoDeriveTitles?: boolean;

/**
 * See {@link isc.DataSource.sparseUpdates DataSource.sparseUpdates}.
 */
sparseUpdates?: boolean;

/**
 * See {@link isc.DataSource.strictSQLFiltering DataSource.strictSQLFiltering}.
 */
strictSQLFiltering?: boolean;

/**
 * See {@link isc.DataSource.supportsTextMatchStyle() DataSource.supportsTextMatchStyle()}.
 */
supportsTextMatchStyle?: Function;

/**
 * See {@link isc.DataSource.progressiveLoading DataSource.progressiveLoading}.
 */
progressiveLoading?: boolean;

/**
 * See {@link isc.DataSource.configBean DataSource.configBean}.
 */
configBean?: string;

/**
 * See {@link isc.DataSource.schemaBean DataSource.schemaBean}.
 */
schemaBean?: string;

/**
 * See {@link isc.DataSource.discoverTreeSettings DataSource.discoverTreeSettings}.
 */
discoverTreeSettings?: DiscoverTreeSettings;

/**
 * See {@link isc.DataSource.listFileVersions() DataSource.listFileVersions()}.
 */
listFileVersions?: Function;

/**
 * See {@link isc.DataSource.setTestData() DataSource.setTestData()}.
 */
setTestData?: Function;

/**
 * See {@link isc.DataSource.auditDSConstructor DataSource.auditDSConstructor}.
 */
auditDSConstructor?: string;

/**
 * See {@link isc.DataSource.enumOrdinalProperty DataSource.enumOrdinalProperty}.
 */
enumOrdinalProperty?: string;

/**
 * See {@link isc.DataSource.useAnsiJoins DataSource.useAnsiJoins}.
 */
useAnsiJoins?: boolean;

/**
 * See {@link isc.DataSource.showPrompt DataSource.showPrompt}.
 */
showPrompt?: boolean;

/**
 * See {@link isc.DataSource.getAutoTitle() DataSource.getAutoTitle()}.
 */
getAutoTitle?: Function;

/**
 * See {@link isc.DataSource.defaultTextMatchStyle DataSource.defaultTextMatchStyle}.
 */
defaultTextMatchStyle?: string;

/**
 * See {@link isc.DataSource.saveFile() DataSource.saveFile()}.
 */
saveFile?: Function;

/**
 * See {@link isc.DataSource.patternSingleWildcard DataSource.patternSingleWildcard}.
 */
patternSingleWildcard?: string | string[];

/**
 * See {@link isc.DataSource.mockDataRows DataSource.mockDataRows}.
 */
mockDataRows?: number;

/**
 * See {@link isc.DataSource.requiredMessage DataSource.requiredMessage}.
 */
requiredMessage?: string;

/**
 * See {@link isc.DataSource.autoConvertRelativeDates DataSource.autoConvertRelativeDates}.
 */
autoConvertRelativeDates?: boolean;

/**
 * See {@link isc.DataSource.title DataSource.title}.
 */
title?: string;

/**
 * See {@link isc.DataSource.splitCriteria() DataSource.splitCriteria()}.
 */
splitCriteria?: Function;

/**
 * See {@link isc.DataSource.globalNamespaces DataSource.globalNamespaces}.
 */
globalNamespaces?: Object;

/**
 * See {@link isc.DataSource.sendExtraFields DataSource.sendExtraFields}.
 */
sendExtraFields?: boolean;

/**
 * See {@link isc.DataSource.getUpdatedData() DataSource.getUpdatedData()}.
 */
getUpdatedData?: Function;

/**
 * See {@link isc.DataSource.implicitCriteria DataSource.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.DataSource.pluralTitle DataSource.pluralTitle}.
 */
pluralTitle?: string;

/**
 * See {@link isc.DataSource.fetchData() DataSource.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.DataSource.tableName DataSource.tableName}.
 */
tableName?: string;

/**
 * See {@link isc.DataSource.recordXPath DataSource.recordXPath}.
 */
recordXPath?: string;

/**
 * See {@link isc.DataSource.useSubselectForRowCount DataSource.useSubselectForRowCount}.
 */
useSubselectForRowCount?: boolean;

/**
 * See {@link isc.DataSource.fileContentsField DataSource.fileContentsField}.
 */
fileContentsField?: string;

/**
 * See {@link isc.DataSource.serverType DataSource.serverType}.
 */
serverType?: string;

/**
 * See {@link isc.DataSource.dataProtocol DataSource.dataProtocol}.
 */
dataProtocol?: string;

/**
 * See {@link isc.DataSource.setTypeOperators() DataSource.setTypeOperators()}.
 */
setTypeOperators?: Function;

/**
 * See {@link isc.DataSource.requestMaxRows DataSource.requestMaxRows}.
 */
requestMaxRows?: number;

/**
 * See {@link isc.DataSource.skipJSONValidation DataSource.skipJSONValidation}.
 */
skipJSONValidation?: string;

/**
 * See {@link isc.DataSource.preventHTTPCaching DataSource.preventHTTPCaching}.
 */
preventHTTPCaching?: boolean;

/**
 * See {@link isc.DataSource.canMultiSort DataSource.canMultiSort}.
 */
canMultiSort?: boolean;

/**
 * See {@link isc.DataSource.setClientOnly() DataSource.setClientOnly()}.
 */
setClientOnly?: Function;

/**
 * See {@link isc.DataSource.getDefaultPathToRelation() DataSource.getDefaultPathToRelation()}.
 */
getDefaultPathToRelation?: Function;

/**
 * See {@link isc.DataSource.transformRequest() DataSource.transformRequest()}.
 */
transformRequest?: Function;

/**
 * See {@link isc.DataSource.requiresAuthentication DataSource.requiresAuthentication}.
 */
requiresAuthentication?: boolean;

/**
 * See {@link isc.DataSource.logSlowFetch DataSource.logSlowFetch}.
 */
logSlowFetch?: number;

/**
 * See {@link isc.DataSource.updateCaches() DataSource.updateCaches()}.
 */
updateCaches?: Function;

/**
 * See {@link isc.DataSource.transformResponse() DataSource.transformResponse()}.
 */
transformResponse?: Function;

/**
 * See {@link isc.DataSource.isSampleDS DataSource.isSampleDS}.
 */
isSampleDS?: boolean;

/**
 * See {@link isc.DataSource.filterData() DataSource.filterData()}.
 */
filterData?: Function;

/**
 * See {@link isc.DataSource.translatePatternOperators DataSource.translatePatternOperators}.
 */
translatePatternOperators?: boolean;

/**
 * See {@link isc.DataSource.removeData() DataSource.removeData()}.
 */
removeData?: Function;

/**
 * See {@link isc.DataSource.addData() DataSource.addData()}.
 */
addData?: Function;

/**
 * See {@link isc.DataSource.cloneDSRequest() DataSource.cloneDSRequest()}.
 */
cloneDSRequest?: Function;

/**
 * See {@link isc.DataSource.titleField DataSource.titleField}.
 */
titleField?: string;

/**
 * See {@link isc.DataSource.execute() DataSource.execute()}.
 */
execute?: Function;

/**
 * See {@link isc.DataSource.multiInsertBatchSize DataSource.multiInsertBatchSize}.
 */
multiInsertBatchSize?: number;

/**
 * See {@link isc.DataSource.allowAggregation DataSource.allowAggregation}.
 */
allowAggregation?: boolean;

/**
 * See {@link isc.DataSource.getFieldCriterion() DataSource.getFieldCriterion()}.
 */
getFieldCriterion?: Function;

/**
 * See {@link isc.DataSource.creatorOverrides DataSource.creatorOverrides}.
 */
creatorOverrides?: boolean;

/**
 * See {@link isc.DataSource.copyRecords() DataSource.copyRecords()}.
 */
copyRecords?: Function;

/**
 * See {@link isc.DataSource.useOfflineResponse() DataSource.useOfflineResponse()}.
 */
useOfflineResponse?: Function;

/**
 * See {@link isc.DataSource.hasFileVersion() DataSource.hasFileVersion()}.
 */
hasFileVersion?: Function;

/**
 * See {@link isc.DataSource.getClientOnlyResponse() DataSource.getClientOnlyResponse()}.
 */
getClientOnlyResponse?: Function;

/**
 * See {@link isc.DataSource.logSlowSQL DataSource.logSlowSQL}.
 */
logSlowSQL?: number;

/**
 * See {@link isc.DataSource.ownerIdNullAccess DataSource.ownerIdNullAccess}.
 */
ownerIdNullAccess?: string;

/**
 * See {@link isc.DataSource.iconField DataSource.iconField}.
 */
iconField?: string;

/**
 * See {@link isc.DataSource.useHttpProxy DataSource.useHttpProxy}.
 */
useHttpProxy?: boolean;

/**
 * See {@link isc.DataSource.fieldMatchesFilter() DataSource.fieldMatchesFilter()}.
 */
fieldMatchesFilter?: Function;

/**
 * See {@link isc.DataSource.forceSort DataSource.forceSort}.
 */
forceSort?: string;

/**
 * See {@link isc.DataSource.addedAuditFields DataSource.addedAuditFields}.
 */
addedAuditFields?: DataSourceField[];

/**
 * See {@link isc.DataSource.setCacheData() DataSource.setCacheData()}.
 */
setCacheData?: Function;

/**
 * See {@link isc.DataSource.performCustomOperation() DataSource.performCustomOperation()}.
 */
performCustomOperation?: Function;

/**
 * See {@link isc.DataSource.fields DataSource.fields}.
 */
fields?: DataSourceField[];

/**
 * See {@link isc.DataSource.ownerIdNullRole DataSource.ownerIdNullRole}.
 */
ownerIdNullRole?: string;

/**
 * See {@link isc.DataSource.getPrimaryKeyFieldNames() DataSource.getPrimaryKeyFieldNames()}.
 */
getPrimaryKeyFieldNames?: Function;

/**
 * See {@link isc.DataSource.endGap DataSource.endGap}.
 */
endGap?: number;

/**
 * See {@link isc.DataSource.omitNullDefaultsOnAdd DataSource.omitNullDefaultsOnAdd}.
 */
omitNullDefaultsOnAdd?: boolean;

/**
 * See {@link isc.DataSource.nullStringValue DataSource.nullStringValue}.
 */
nullStringValue?: string;

/**
 * See {@link isc.DataSource.hasCustomTypeOperators() DataSource.hasCustomTypeOperators()}.
 */
hasCustomTypeOperators?: Function;

/**
 * See {@link isc.DataSource.useOfflineStorage DataSource.useOfflineStorage}.
 */
useOfflineStorage?: boolean;

/**
 * See {@link isc.DataSource.projectFileKey DataSource.projectFileKey}.
 */
projectFileKey?: string;

/**
 * See {@link isc.DataSource.logSlowUpdate DataSource.logSlowUpdate}.
 */
logSlowUpdate?: number;

/**
 * See {@link isc.DataSource.removeFileVersion() DataSource.removeFileVersion()}.
 */
removeFileVersion?: Function;

/**
 * See {@link isc.DataSource.transformResponseScript DataSource.transformResponseScript}.
 */
transformResponseScript?: string;

/**
 * See {@link isc.DataSource.getPrimaryKeyField() DataSource.getPrimaryKeyField()}.
 */
getPrimaryKeyField?: Function;

/**
 * See {@link isc.DataSource.transformRequestScript DataSource.transformRequestScript}.
 */
transformRequestScript?: string;

/**
 * See {@link isc.DataSource.cacheAcrossOperationIds DataSource.cacheAcrossOperationIds}.
 */
cacheAcrossOperationIds?: boolean;

/**
 * See {@link isc.DataSource.defaultBooleanStorageStrategy DataSource.defaultBooleanStorageStrategy}.
 */
defaultBooleanStorageStrategy?: string;

/**
 * See {@link isc.DataSource.defaultMultiUpdatePolicy DataSource.defaultMultiUpdatePolicy}.
 */
defaultMultiUpdatePolicy?: string;

/**
 * See {@link isc.DataSource.getShortestPathToRelation() DataSource.getShortestPathToRelation()}.
 */
getShortestPathToRelation?: Function;

/**
 * See {@link isc.DataSource.useParentFieldOrder DataSource.useParentFieldOrder}.
 */
useParentFieldOrder?: boolean;

/**
 * See {@link isc.DataSource.idClassName DataSource.idClassName}.
 */
idClassName?: string;

/**
 * See {@link isc.DataSource.auditChangedFieldsFieldName DataSource.auditChangedFieldsFieldName}.
 */
auditChangedFieldsFieldName?: string;

/**
 * See {@link isc.DataSource.patternEscapeChar DataSource.patternEscapeChar}.
 */
patternEscapeChar?: string;

/**
 * See {@link isc.DataSource.deepCloneOnEdit DataSource.deepCloneOnEdit}.
 */
deepCloneOnEdit?: boolean;

/**
 * See {@link isc.DataSource.compareCriteria() DataSource.compareCriteria()}.
 */
compareCriteria?: Function;

/**
 * See {@link isc.DataSource.getTypeOperators() DataSource.getTypeOperators()}.
 */
getTypeOperators?: Function;

/**
 * See {@link isc.DataSource.defaultSortField DataSource.defaultSortField}.
 */
defaultSortField?: string;

/**
 * See {@link isc.DataSource.autoDeriveSchema DataSource.autoDeriveSchema}.
 */
autoDeriveSchema?: boolean;

/**
 * See {@link isc.DataSource.getField() DataSource.getField()}.
 */
getField?: Function;

/**
 * See {@link isc.DataSource.useSequences DataSource.useSequences}.
 */
useSequences?: boolean;

/**
 * See {@link isc.DataSource.listFiles() DataSource.listFiles()}.
 */
listFiles?: Function;

/**
 * See {@link isc.DataSource.allowAdvancedCriteria DataSource.allowAdvancedCriteria}.
 */
allowAdvancedCriteria?: boolean;

/**
 * See {@link isc.DataSource.schema DataSource.schema}.
 */
schema?: string;

/**
 * See {@link isc.DataSource.nullIntegerValue DataSource.nullIntegerValue}.
 */
nullIntegerValue?: number;

/**
 * See {@link isc.DataSource.getFetchDataURL() DataSource.getFetchDataURL()}.
 */
getFetchDataURL?: Function;

/**
 * See {@link isc.DataSource.audit DataSource.audit}.
 */
audit?: boolean;

/**
 * See {@link isc.DataSource.getAllPathsToRelation() DataSource.getAllPathsToRelation()}.
 */
getAllPathsToRelation?: Function;

/**
 * See {@link isc.DataSource.guestUserId DataSource.guestUserId}.
 */
guestUserId?: string;

/**
 * See {@link isc.DataSource.autoCreateAuditTable DataSource.autoCreateAuditTable}.
 */
autoCreateAuditTable?: boolean;

/**
 * See {@link isc.DataSource.serverOnly DataSource.serverOnly}.
 */
serverOnly?: string;

/**
 * See {@link isc.DataSource.multiInsertStrategy DataSource.multiInsertStrategy}.
 */
multiInsertStrategy?: string;

/**
 * See {@link isc.DataSource.mockMode DataSource.mockMode}.
 */
mockMode?: boolean;

/**
 * See {@link isc.DataSource.description DataSource.description}.
 */
description?: string;

/**
 * See {@link isc.DataSource.getFileURL() DataSource.getFileURL()}.
 */
getFileURL?: Function;

/**
 * See {@link isc.DataSource.requiresRole DataSource.requiresRole}.
 */
requiresRole?: string;

/**
 * See {@link isc.DataSource.compareMetadataForAuditChangeStatus DataSource.compareMetadataForAuditChangeStatus}.
 */
compareMetadataForAuditChangeStatus?: boolean;

/**
 * See {@link isc.DataSource.quoteColumnNames DataSource.quoteColumnNames}.
 */
quoteColumnNames?: boolean;

/**
 * See {@link isc.DataSource.fileFormatField DataSource.fileFormatField}.
 */
fileFormatField?: string;

/**
 * See {@link isc.DataSource.recordsAsText() DataSource.recordsAsText()}.
 */
recordsAsText?: Function;

/**
 * See {@link isc.DataSource.trimMilliseconds DataSource.trimMilliseconds}.
 */
trimMilliseconds?: boolean;

/**
 * See {@link isc.DataSource.requestProperties DataSource.requestProperties}.
 */
requestProperties?: DSRequest;

/**
 * See {@link isc.DataSource.fetchRecord() DataSource.fetchRecord()}.
 */
fetchRecord?: Function;

/**
 * See {@link isc.DataSource.auditTypeFieldName DataSource.auditTypeFieldName}.
 */
auditTypeFieldName?: string;

/**
 * See {@link isc.DataSource.supportsAdvancedCriteria() DataSource.supportsAdvancedCriteria()}.
 */
supportsAdvancedCriteria?: Function;

/**
 * See {@link isc.DataSource.getDisplayValue() DataSource.getDisplayValue()}.
 */
getDisplayValue?: Function;

/**
 * See {@link isc.DataSource.isCalculated() DataSource.isCalculated()}.
 */
isCalculated?: Function;

/**
 * See {@link isc.DataSource.tableCode DataSource.tableCode}.
 */
tableCode?: string;

/**
 * See {@link isc.DataSource.handleError() DataSource.handleError()}.
 */
handleError?: Function;

/**
 * See {@link isc.DataSource.hasFile() DataSource.hasFile()}.
 */
hasFile?: Function;

/**
 * See {@link isc.DataSource.convertRelativeDates() DataSource.convertRelativeDates()}.
 */
convertRelativeDates?: Function;

/**
 * See {@link isc.DataSource.arrayCriteriaForceExact DataSource.arrayCriteriaForceExact}.
 */
arrayCriteriaForceExact?: boolean;

/**
 * See {@link isc.DataSource.auditChangedFieldsFieldLength DataSource.auditChangedFieldsFieldLength}.
 */
auditChangedFieldsFieldLength?: number;

/**
 * See {@link isc.DataSource.addSearchOperator() DataSource.addSearchOperator()}.
 */
addSearchOperator?: Function;

/**
 * See {@link isc.DataSource.inheritanceMode DataSource.inheritanceMode}.
 */
inheritanceMode?: string;

/**
 * See {@link isc.DataSource.nullFloatValue DataSource.nullFloatValue}.
 */
nullFloatValue?: number;

/**
 * See {@link isc.DataSource.qualifyColumnNames DataSource.qualifyColumnNames}.
 */
qualifyColumnNames?: boolean;

/**
 * See {@link isc.DataSource.auditRevisionFieldName DataSource.auditRevisionFieldName}.
 */
auditRevisionFieldName?: string;

/**
 * See {@link isc.DataSource.invalidateCache() DataSource.invalidateCache()}.
 */
invalidateCache?: Function;

/**
 * See {@link isc.DataSource.dataURL DataSource.dataURL}.
 */
dataURL?: string;

/**
 * See {@link isc.DataSource.downloadFile() DataSource.downloadFile()}.
 */
downloadFile?: Function;

/**
 * See {@link isc.DataSource.jsonPrefix DataSource.jsonPrefix}.
 */
jsonPrefix?: string;

/**
 * See {@link isc.DataSource.getClientOnlyDataSource() DataSource.getClientOnlyDataSource()}.
 */
getClientOnlyDataSource?: Function;

/**
 * See {@link isc.DataSource.relatedTableAlias DataSource.relatedTableAlias}.
 */
relatedTableAlias?: string;

/**
 * See {@link isc.DataSource.cacheMaxAge DataSource.cacheMaxAge}.
 */
cacheMaxAge?: number;

/**
 * See {@link isc.DataSource.projectFileLocations DataSource.projectFileLocations}.
 */
projectFileLocations?: string[];

/**
 * See {@link isc.DataSource.ownerIdField DataSource.ownerIdField}.
 */
ownerIdField?: string;

/**
 * See {@link isc.DataSource.lookAhead DataSource.lookAhead}.
 */
lookAhead?: number;

/**
 * See {@link isc.DataSource.childrenField DataSource.childrenField}.
 */
childrenField?: string;

/**
 * See {@link isc.DataSource.dropUnknownCriteria DataSource.dropUnknownCriteria}.
 */
dropUnknownCriteria?: boolean;

/**
 * See {@link isc.DataSource.auditedDataSourceID DataSource.auditedDataSourceID}.
 */
auditedDataSourceID?: string;

/**
 * See {@link isc.DataSource.patternMultiWildcard DataSource.patternMultiWildcard}.
 */
patternMultiWildcard?: string | string[];

/**
 * See {@link isc.DataSource.nullBooleanValue DataSource.nullBooleanValue}.
 */
nullBooleanValue?: boolean;

/**
 * See {@link isc.DataSource.getPrimaryKeyFields() DataSource.getPrimaryKeyFields()}.
 */
getPrimaryKeyFields?: Function;

/**
 * See {@link isc.DataSource.nullDateValue DataSource.nullDateValue}.
 */
nullDateValue?: Date;

/**
 * See {@link isc.DataSource.getTypeOperatorMap() DataSource.getTypeOperatorMap()}.
 */
getTypeOperatorMap?: Function;

/**
 * See {@link isc.DataSource.dataField DataSource.dataField}.
 */
dataField?: string;

/**
 * See {@link isc.DataSource.getLegalChildTags() DataSource.getLegalChildTags()}.
 */
getLegalChildTags?: Function;

/**
 * See {@link isc.DataSource.evaluateCriterion() DataSource.evaluateCriterion()}.
 */
evaluateCriterion?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DataSource wraps the non-rendered SmartClient class
 * {@link isc.DataSource DataSource} for React, allowing you to import
 *  DataSource for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class DataSource extends ILogicalComponent {
    props: AsComponentXML<DataSourceProps>;
}
