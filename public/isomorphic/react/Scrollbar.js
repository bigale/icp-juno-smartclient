import { StretchImg } from './StretchImg';

export class Scrollbar extends StretchImg {
    static ISC_CLASS_NAME = 'Scrollbar';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"cornerSize":"Integer","trackStartImg":{"className":"StretchItem"},"endImg":{"className":"StretchItem"},"scrollTarget":{"className":"Canvas"},"btnSize":"number","trackImg":{"className":"StretchItem"},"cornerImg":{"className":"StretchItem"},"trackEndWidth":"number","autoEnable":"Boolean","showCorner":"Boolean","trackEndHeight":"number","allowThumbDownState":"Boolean","allowThumbOverState":"Boolean","trackEndImg":{"className":"StretchItem"},"thumbInset":"number","showTrackEnds":"Boolean","showTrackButtons":"Boolean","startThumbOverlap":"number","endThumbOverlap":"number","startImg":{"className":"StretchItem"},"thumbOverlap":"number","thumbMinSize":"number"};

}
