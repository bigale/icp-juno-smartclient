import { DataBoundAIRequest } from './DataBoundAIRequest';

export class SummarizeValueRequest extends DataBoundAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"dataSource":{"className":"DataSource"},"aiRequest":{"className":"SingleSourceAIRequest"},"examples":{"className":"SummarizeValueExample","isArray":true},"relevantFieldNames":{"className":"FieldName","isArray":true},"record":{"className":"Record"},"value":"Any"};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
