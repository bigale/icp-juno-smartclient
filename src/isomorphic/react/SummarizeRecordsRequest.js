import { DataBoundAIRequest } from './DataBoundAIRequest';

export class SummarizeRecordsRequest extends DataBoundAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"aiFieldRequest":{"className":"AIFieldRequest"},"dataSource":{"className":"DataSource"},"cancellationController":{"className":"CancellationController"},"records":{"className":"Record","isArray":true},"maxConcurrent":"Integer","maxRetries":"Integer","maxRecordsPerBatch":"Integer"};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
