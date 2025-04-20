import { AsyncOperationContext } from './AsyncOperationContext';

export class BuildViaAIContext extends AsyncOperationContext {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"buildRequest":{"className":"BuildViaAIRequest"}};

}
