import { AsyncDataBoundOperationParams } from './AsyncDataBoundOperationParams';

export class DataBoundAIRequest extends AsyncDataBoundOperationParams {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"maxRetries":"Integer","excludeFieldNames":{"className":"FieldName","isArray":true}};

}
