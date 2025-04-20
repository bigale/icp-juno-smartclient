import { AsyncOperationContext } from './AsyncOperationContext';

export class SummarizeRecordsContext extends AsyncOperationContext {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"request":{"className":"SummarizeRecordsRequest"},"partialResults":{"className":"SummarizeRecordsPartialResult","isArray":true}};

}
