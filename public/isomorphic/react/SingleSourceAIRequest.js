import { ILogicalComponent } from './core/ILogicalComponent';

export class SingleSourceAIRequest extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"prompt":"Any","additionalMessages":{"className":"AIMessage","isArray":true}};

}
