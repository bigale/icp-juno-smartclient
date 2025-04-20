import { BuildViaAIRequest } from './BuildViaAIRequest';

export class BuildCriterionRequest extends BuildViaAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"dataSource":{"className":"DataSource"},"userAIRequest":{"className":"UserAIRequest"}};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
