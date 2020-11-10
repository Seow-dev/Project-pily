import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from "quill-image-uploader";
import ImageResize from 'quill-image-resize-module-react';
import {ImageDrop} from 'quill-image-drop-module';

Quill.register("modules/imageUploader", ImageUploader);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);

export default ReactQuill;