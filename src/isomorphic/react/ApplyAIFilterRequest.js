import { BuildViaAIRequest } from './BuildViaAIRequest';

export class ApplyAIFilterRequest extends BuildViaAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"aiCriterion":{"className":"AdvancedCriteria"},"showProgressDialog":"Boolean","records":{"className":"Record","isArray":true}};

}
