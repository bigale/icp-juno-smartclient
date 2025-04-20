import { BuildViaAIResponse } from './BuildViaAIResponse';

export class BuildCriterionResponse extends BuildViaAIResponse {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"criterion":{"className":"AdvancedCriteria"}};

}
