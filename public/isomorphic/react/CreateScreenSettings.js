import { ILogicalComponent } from './core/ILogicalComponent';

export class CreateScreenSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"verifyAsError":"boolean","clobberDataSources":"Boolean","suppressAutoDraw":"Boolean","dataContext":{"className":"DataContext"},"allowPlaceholders":"Boolean"};

}
