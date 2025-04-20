import { SystemDoneConfig } from './SystemDoneConfig';

export class SystemWaitConfig extends SystemDoneConfig {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"includeFileLoader":"Boolean","timeout":"number","includeNetworkOperations":"Boolean","includeRedraws":"Boolean","includeTimers":"Boolean"};

}
