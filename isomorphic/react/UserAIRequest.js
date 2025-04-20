import { SingleSourceAIRequest } from './SingleSourceAIRequest';

export class UserAIRequest extends SingleSourceAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"additionalMessages":{"className":"AIMessage","isArray":true},"prompt":"Any"};

}
