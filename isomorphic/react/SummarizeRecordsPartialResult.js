import { AsyncOperationResult } from './AsyncOperationResult';

export class SummarizeRecordsPartialResult extends AsyncOperationResult {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"startIndex":"Integer","recordSummaries":{"className":"String","isArray":true},"recordNumericalSummaries":{"className":"Number","isArray":true},"length":"Integer"};

}
