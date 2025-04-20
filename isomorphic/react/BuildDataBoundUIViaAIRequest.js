import { BuildUIViaAIRequest } from './BuildUIViaAIRequest';

export class BuildDataBoundUIViaAIRequest extends BuildUIViaAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"availableDataSources":{"className":"GlobalId","isArray":true},"allowedUITypes":{"className":"String","isArray":true}};

}
