import { StatefulCanvas } from './StatefulCanvas';

export class SimpleTile extends StatefulCanvas {
    static ISC_CLASS_NAME = 'SimpleTile';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"creator":{"className":"TileGrid"},"tileGrid":{"className":"TileGrid"}};

}
