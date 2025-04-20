import { ILogicalComponent } from './core/ILogicalComponent';

export class MultiWindowSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"shareMessageChannels":"Boolean","autoCopyDataSources":"Boolean"};

}
