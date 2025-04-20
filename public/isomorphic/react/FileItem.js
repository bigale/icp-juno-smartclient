import { CanvasItem } from './CanvasItem';

export class FileItem extends CanvasItem {
    static ISC_CLASS_NAME = 'FileItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"uploadItemProperties":{"className":"UploadItem","isProperties":true},"editFormProperties":{"className":"DynamicForm","isProperties":true},"shouldSaveValue":"Boolean","displayItemProperties":{"className":"StaticTextItem","isProperties":true},"displayCanvasProperties":{"className":"Canvas","isProperties":true},"showFileInline":"boolean","multiple":"Boolean","displayFormProperties":{"className":"DynamicForm","isProperties":true}};

}
