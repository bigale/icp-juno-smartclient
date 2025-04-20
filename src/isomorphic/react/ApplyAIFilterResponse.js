import { BuildViaAIResponse } from './BuildViaAIResponse';

export class ApplyAIFilterResponse extends BuildViaAIResponse {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"matchingRecords":{"className":"Record","isArray":true}};

}
