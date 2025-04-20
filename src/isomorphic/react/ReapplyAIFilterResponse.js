import { BuildViaAIResponse } from './BuildViaAIResponse';

export class ReapplyAIFilterResponse extends BuildViaAIResponse {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"matchingUpdatedRecords":{"className":"Record","isArray":true}};

}
