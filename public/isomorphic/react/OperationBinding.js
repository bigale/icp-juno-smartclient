import { ILogicalComponent } from './core/ILogicalComponent';

export class OperationBinding extends ILogicalComponent {
    static ISC_CLASS_NAME = 'OperationBinding';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"preventHTTPCaching":"boolean","qualifyColumnNames":"boolean","groupBy":{"className":"String","isArray":true},"mail":{"className":"Mail"},"requiresAuthentication":"boolean","useHavingClause":"boolean","criteria":{"className":"DSRequestModifier","isArray":true},"useHttpProxy":"boolean","exportResults":"boolean","serverObject":{"className":"ServerObject"},"requestProperties":{"className":"DSRequest","isProperties":true},"summaryFunctions":{"className":"Object"},"xmlNamespaces":{"className":"Object"},"creatorOverrides":"boolean","multiInsertBatchSize":"Integer","exportFields":{"className":"String","isArray":true},"responseDataSchema":{"className":"DataSource"},"allowAdvancedCriteria":"boolean","invalidateCache":"boolean","useFlatFields":"boolean","progressiveLoading":"boolean","useSubselectForRowCount":"boolean","isDDL":"Boolean","transformMultipleFields":"boolean","skipAudit":"boolean","applyCriteriaBeforeAggregation":"boolean","defaultParams":{"className":"Object"},"values":{"className":"DSRequestModifier","isArray":true},"allowMultiUpdate":"boolean","spoofResponses":"boolean","sqlUsePagingHint":"boolean","providesMissingKeys":"boolean","arrayCriteriaForceExact":"Boolean"};

}
