import { ILogicalComponent } from './core/ILogicalComponent';

export class PointerSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"showShadow":"Boolean","cornerOffset":"Integer","snapOffsetLeft":"Integer","targetOffsetTop":"Integer","snapOffsetTop":"Integer","targetOffsetInto":"Integer","targetOffsetLeft":"Integer"};

}
