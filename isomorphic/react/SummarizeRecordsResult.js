import { AsyncOperationResult } from './AsyncOperationResult';

export class SummarizeRecordsResult extends AsyncOperationResult {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"recordSummaries":{"className":"String","isArray":true},"partialResults":{"className":"SummarizeRecordsPartialResult","isArray":true},"recordNumericalSummaries":{"className":"Number","isArray":true}};

}
