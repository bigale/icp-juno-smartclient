import { BuildUIViaAIContext } from './BuildUIViaAIContext';

export class BuildDataBoundUIViaAIContext extends BuildUIViaAIContext {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"buildRequest":{"className":"BuildDataBoundUIViaAIRequest"},"dataSource":{"className":"DataSource"}};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
