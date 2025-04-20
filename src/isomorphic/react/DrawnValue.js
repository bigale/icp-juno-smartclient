import { ILogicalComponent } from './core/ILogicalComponent';

export class DrawnValue extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"barThickness":"int","record":{"className":"CellRecord"},"facetValues":{"className":"FacetValueMap"},"value":"float","y":"int","endAngle":"int","startAngle":"int","radius":"Double","x":"int"};

}
