import { DataBoundAIRequest } from './DataBoundAIRequest';

export class SuggestRecordSummaryTitleRequest extends DataBoundAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"aiRequest":{"className":"SingleSourceAIRequest"},"visibleFieldNames":{"className":"FieldName","isArray":true}};

}
