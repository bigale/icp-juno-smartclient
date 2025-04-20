import { Window } from './Window';

export class MultiGroupDialog extends Window {
    static ISC_CLASS_NAME = 'MultiGroupDialog';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"addLevelButtonProperties":{"className":"IButton","isProperties":true},"deleteLevelButtonProperties":{"className":"IButton","isProperties":true},"levelDownButtonProperties":{"className":"ImgButton","isProperties":true},"optionsGridProperties":{"className":"ListGrid","isProperties":true},"fields":{"className":"DataSourceField","isArray":true},"applyButtonProperties":{"className":"IButton","isProperties":true},"copyLevelButtonProperties":{"className":"IButton","isProperties":true},"maxLevels":"number","initialGrouping":{"className":"String","isArray":true},"cancelButtonProperties":{"className":"IButton","isProperties":true},"levelUpButtonProperties":{"className":"ImgButton","isProperties":true}};
static CHILD_TYPE_MAPPING = {"DataSourceField":"fields"};

}
