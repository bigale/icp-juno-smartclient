import { ILogicalComponent } from './core/ILogicalComponent';

export class DebugOverflowSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"loggingTimeout":"Integer","maxTrackedOverflows":"int","trackingDuration":"int","selfOverflowThreshold":"int"};

}
