import { ILogicalComponent } from './core/ILogicalComponent';

export class GaugeSector extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"value":"float","endAngle":"float","startAngle":"float"};

}
