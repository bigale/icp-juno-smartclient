import { AsyncOperationResult } from './AsyncOperationResult';

export class AsyncSingleValueGenerationResult extends AsyncOperationResult {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"generatedValue":"Any"};

}
