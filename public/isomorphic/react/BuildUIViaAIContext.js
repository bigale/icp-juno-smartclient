import { BuildViaAIContext } from './BuildViaAIContext';

export class BuildUIViaAIContext extends BuildViaAIContext {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"buildRequest":{"className":"BuildUIViaAIRequest"},"nodes":{"className":"PaletteNode","isArray":true}};

}
