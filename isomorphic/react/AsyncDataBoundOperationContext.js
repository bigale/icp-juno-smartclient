import { AsyncOperationContext } from './AsyncOperationContext';

export class AsyncDataBoundOperationContext extends AsyncOperationContext {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"dataSource":{"className":"DataSource"}};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
