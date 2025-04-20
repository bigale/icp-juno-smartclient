import { ILogicalComponent } from './core/ILogicalComponent';

export class AsyncOperationContext extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"cancellationController":{"className":"CancellationController"}};

}
