import { LayoutEditProxy } from './LayoutEditProxy';

export class GridEditProxy extends LayoutEditProxy {
    static ISC_CLASS_NAME = 'GridEditProxy';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"generateEditableHilites":"Boolean","canResizeFields":"Boolean","saveGroupBy":"Boolean","generateEditableSummaries":"Boolean","canAddFormulaFields":"Boolean","saveFieldOrder":"Boolean","saveFieldFrozenState":"Boolean","canReorderFields":"Boolean","canGroupBy":"Boolean","canEditHilites":"Boolean","saveFieldVisibility":"Boolean","saveFilterCriteria":"Boolean","canAddSummaryFields":"Boolean","saveSort":"Boolean","generateEditableFormulas":"Boolean"};

}
