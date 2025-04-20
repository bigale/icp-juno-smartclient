import { SingleSourceAIRequest } from './SingleSourceAIRequest';

export class AIFieldRequest extends SingleSourceAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"maxRecordsPerBatch":"Integer","minValue":"Number","relevantFieldNames":{"className":"FieldName","isArray":true},"maxValue":"Number","categories":{"className":"String","isArray":true}};

}
