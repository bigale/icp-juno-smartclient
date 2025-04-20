import React from 'react';
import { RPCRequest, RPCRequestProps } from './RPCRequest';
import { AsComponentXML } from './core/ReactComponent';


declare interface DSRequestProps extends RPCRequestProps {

/**
 * See {@link isc.DSRequest.exportToClient DSRequest.exportToClient}.
 */
exportToClient?: boolean;

/**
 * See {@link isc.DSRequest.endRow DSRequest.endRow}.
 */
endRow?: number;

/**
 * See {@link isc.DSRequest.startRow DSRequest.startRow}.
 */
startRow?: number;

/**
 * See {@link isc.DSRequest.additionalOutputs DSRequest.additionalOutputs}.
 */
additionalOutputs?: string;

/**
 * See {@link isc.DSRequest.textMatchStyle DSRequest.textMatchStyle}.
 */
textMatchStyle?: string;

/**
 * See {@link isc.DSRequest.exportShowHeaderSpanTitles DSRequest.exportShowHeaderSpanTitles}.
 */
exportShowHeaderSpanTitles?: boolean;

/**
 * See {@link isc.DSRequest.oldValues DSRequest.oldValues}.
 */
oldValues?: Record;

/**
 * See {@link isc.DSRequest.groupBy DSRequest.groupBy}.
 */
groupBy?: string[];

/**
 * See {@link isc.DSRequest.keepParentsOnFilter DSRequest.keepParentsOnFilter}.
 */
keepParentsOnFilter?: boolean;

/**
 * See {@link isc.DSRequest.clientContext DSRequest.clientContext}.
 */
clientContext?: Object;

/**
 * See {@link isc.DSRequest.exportTZ DSRequest.exportTZ}.
 */
exportTZ?: string;

/**
 * See {@link isc.DSRequest.exportNumbersAsFormattedString DSRequest.exportNumbersAsFormattedString}.
 */
exportNumbersAsFormattedString?: boolean;

/**
 * See {@link isc.DSRequest.arrayCriteriaForceExact DSRequest.arrayCriteriaForceExact}.
 */
arrayCriteriaForceExact?: boolean;

/**
 * See {@link isc.DSRequest.requestId DSRequest.requestId}.
 */
requestId?: string;

/**
 * See {@link isc.DSRequest.operationId DSRequest.operationId}.
 */
operationId?: string;

/**
 * See {@link isc.DSRequest.forceOuterJoins DSRequest.forceOuterJoins}.
 */
forceOuterJoins?: boolean;

/**
 * See {@link isc.DSRequest.useFlatFields DSRequest.useFlatFields}.
 */
useFlatFields?: boolean;

/**
 * See {@link isc.DSRequest.exportImageQuality DSRequest.exportImageQuality}.
 */
exportImageQuality?: number;

/**
 * See {@link isc.DSRequest.exportRawValues DSRequest.exportRawValues}.
 */
exportRawValues?: boolean;

/**
 * See {@link isc.DSRequest.exportDelimiter DSRequest.exportDelimiter}.
 */
exportDelimiter?: string;

/**
 * See {@link isc.DSRequest.useStrictJSON DSRequest.useStrictJSON}.
 */
useStrictJSON?: boolean;

/**
 * See {@link isc.DSRequest.exportPath DSRequest.exportPath}.
 */
exportPath?: string;

/**
 * See {@link isc.DSRequest.resultSet DSRequest.resultSet}.
 */
resultSet?: ResultSet;

/**
 * See {@link isc.DSRequest.exportHeaderless DSRequest.exportHeaderless}.
 */
exportHeaderless?: boolean;

/**
 * See {@link isc.DSRequest.multiInsertStrategy DSRequest.multiInsertStrategy}.
 */
multiInsertStrategy?: string;

/**
 * See {@link isc.DSRequest.componentId DSRequest.componentId}.
 */
componentId?: string;

/**
 * See {@link isc.DSRequest.exportFields DSRequest.exportFields}.
 */
exportFields?: string[];

/**
 * See {@link isc.DSRequest.parentNode DSRequest.parentNode}.
 */
parentNode?: TreeNode;

/**
 * See {@link isc.DSRequest.headerData DSRequest.headerData}.
 */
headerData?: Object;

/**
 * See {@link isc.DSRequest.sortBy DSRequest.sortBy}.
 */
sortBy?: string | string[] | SortSpecifier[];

/**
 * See {@link isc.DSRequest.linkDataFetchOperation DSRequest.linkDataFetchOperation}.
 */
linkDataFetchOperation?: string;

/**
 * See {@link isc.DSRequest.pendingAdd DSRequest.pendingAdd}.
 */
pendingAdd?: boolean;

/**
 * See {@link isc.DSRequest.resultTree DSRequest.resultTree}.
 */
resultTree?: ResultTree;

/**
 * See {@link isc.DSRequest.exportImageFormat DSRequest.exportImageFormat}.
 */
exportImageFormat?: string;

/**
 * See {@link isc.DSRequest.exportFooter DSRequest.exportFooter}.
 */
exportFooter?: string;

/**
 * See {@link isc.DSRequest.exportFilename DSRequest.exportFilename}.
 */
exportFilename?: string;

/**
 * See {@link isc.DSRequest.exportCSS DSRequest.exportCSS}.
 */
exportCSS?: string;

/**
 * See {@link isc.DSRequest.writeToGeneratedFields DSRequest.writeToGeneratedFields}.
 */
writeToGeneratedFields?: string;

/**
 * See {@link isc.DSRequest.streamResults DSRequest.streamResults}.
 */
streamResults?: boolean;

/**
 * See {@link isc.DSRequest.lineBreakStyle DSRequest.lineBreakStyle}.
 */
lineBreakStyle?: string;

/**
 * See {@link isc.DSRequest.exportHeader DSRequest.exportHeader}.
 */
exportHeader?: string;

/**
 * See {@link isc.DSRequest.exportTitleSeparatorChar DSRequest.exportTitleSeparatorChar}.
 */
exportTitleSeparatorChar?: string;

/**
 * See {@link isc.DSRequest.operationType DSRequest.operationType}.
 */
operationType?: string;

/**
 * See {@link isc.DSRequest.data DSRequest.data}.
 */
data?: Object | Object[];

/**
 * See {@link isc.DSRequest.exportSpanTitleSeparator DSRequest.exportSpanTitleSeparator}.
 */
exportSpanTitleSeparator?: string;

/**
 * See {@link isc.DSRequest.exportDatesAsFormattedString DSRequest.exportDatesAsFormattedString}.
 */
exportDatesAsFormattedString?: boolean;

/**
 * See {@link isc.DSRequest.multiInsertNonMatchingStrategy DSRequest.multiInsertNonMatchingStrategy}.
 */
multiInsertNonMatchingStrategy?: string;

/**
 * See {@link isc.DSRequest.exportResults DSRequest.exportResults}.
 */
exportResults?: boolean;

/**
 * See {@link isc.DSRequest.exportData DSRequest.exportData}.
 */
exportData?: Record[];

/**
 * See {@link isc.DSRequest.generateRelatedUpdates DSRequest.generateRelatedUpdates}.
 */
generateRelatedUpdates?: boolean;

/**
 * See {@link isc.DSRequest.shouldUseCache DSRequest.shouldUseCache}.
 */
shouldUseCache?: boolean;

/**
 * See {@link isc.DSRequest.outputs DSRequest.outputs}.
 */
outputs?: string;

/**
 * See {@link isc.DSRequest.exportDisplay DSRequest.exportDisplay}.
 */
exportDisplay?: string;

/**
 * See {@link isc.DSRequest.exportAs DSRequest.exportAs}.
 */
exportAs?: string;

/**
 * See {@link isc.DSRequest.multiInsertBatchSize DSRequest.multiInsertBatchSize}.
 */
multiInsertBatchSize?: number;

/**
 * See {@link isc.DSRequest.exportPropertyIdentifier DSRequest.exportPropertyIdentifier}.
 */
exportPropertyIdentifier?: string;

/**
 * See {@link isc.DSRequest.callback DSRequest.callback}.
 */
callback?: DSCallback;

/**
 * See {@link isc.DSRequest.validationMode DSRequest.validationMode}.
 */
validationMode?: string;

/**
 * See {@link isc.DSRequest.exportToFilesystem DSRequest.exportToFilesystem}.
 */
exportToFilesystem?: boolean;

/**
 * See {@link isc.DSRequest.exportValueFields DSRequest.exportValueFields}.
 */
exportValueFields?: boolean;

/**
 * See {@link isc.DSRequest.dataSource DSRequest.dataSource}.
 */
dataSource?: string;

/**
 * See {@link isc.DSRequest.progressiveLoading DSRequest.progressiveLoading}.
 */
progressiveLoading?: boolean;

/**
 * See {@link isc.DSRequest.useFlatHeaderFields DSRequest.useFlatHeaderFields}.
 */
useFlatHeaderFields?: boolean;

/**
 * See {@link isc.DSRequest.exportStreaming DSRequest.exportStreaming}.
 */
exportStreaming?: boolean;

/**
 * See {@link isc.DSRequest.fieldValueExpressions DSRequest.fieldValueExpressions}.
 */
fieldValueExpressions?: Object;

/**
 * See {@link isc.DSRequest.dataProtocol DSRequest.dataProtocol}.
 */
dataProtocol?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DSRequest wraps the SmartClient object
 * {@link isc.DSRequest DSRequest} for React, allowing you to import
 * DSRequest for use in React JS and JSX.
 * @class
 */
declare class DSRequest extends RPCRequest {
    props: AsComponentXML<DSRequestProps>;
}
