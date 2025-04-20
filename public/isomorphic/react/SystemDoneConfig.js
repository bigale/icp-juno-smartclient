import { ILogicalComponent } from './core/ILogicalComponent';

export class SystemDoneConfig extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"includeNetworkOperations":"Boolean","includeRedraws":"Boolean","includeFileLoader":"Boolean","includeTimers":"Boolean"};

}
