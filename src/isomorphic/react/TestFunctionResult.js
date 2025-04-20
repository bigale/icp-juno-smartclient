import { ILogicalComponent } from './core/ILogicalComponent';

export class TestFunctionResult extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"record":{"className":"Record"},"failedGeneration":"boolean","emptyTestValue":"boolean","failedExecution":"boolean"};

}
