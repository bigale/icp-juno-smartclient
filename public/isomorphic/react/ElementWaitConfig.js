import { SystemWaitConfig } from './SystemWaitConfig';

export class ElementWaitConfig extends SystemWaitConfig {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"timeout":"number"};

}
