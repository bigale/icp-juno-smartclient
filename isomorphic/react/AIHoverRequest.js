import { SystemAIRequest } from './SystemAIRequest';

export class AIHoverRequest extends SystemAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"relevantFieldNames":{"className":"FieldName","isArray":true},"examples":{"className":"SummarizeValueExample","isArray":true},"includeRecord":"Boolean"};

}
