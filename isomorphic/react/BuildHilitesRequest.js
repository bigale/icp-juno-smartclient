import { BuildCriterionRequest } from './BuildCriterionRequest';

export class BuildHilitesRequest extends BuildCriterionRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"records":{"className":"Record","isArray":true}};

}
