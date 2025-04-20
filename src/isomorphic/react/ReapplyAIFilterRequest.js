import { BuildViaAIRequest } from './BuildViaAIRequest';

export class ReapplyAIFilterRequest extends BuildViaAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"showProgressDialog":"Boolean","updatedRecords":{"className":"Record","isArray":true},"aiCriterion":{"className":"AdvancedCriteria"}};

}
