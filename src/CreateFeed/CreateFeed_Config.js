import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from "quill-image-uploader";
import ImageResize from 'quill-image-resize-module-react';
import {ImageDrop} from 'quill-image-drop-module';

Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);
Quill.register("modules/imageUploader", ImageUploader);

export default ReactQuill;