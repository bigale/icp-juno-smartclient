import { BuildViaAIRequest } from './BuildViaAIRequest';

export class BuildUIViaAIRequest extends BuildViaAIRequest {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"maxValidationRetries":"Integer","validationTypes":{"className":"BuildUIViaAIValidationType","isArray":true},"allowedUITypes":{"className":"String","isArray":true},"userAIRequest":{"className":"UserAIRequest"}};

}
