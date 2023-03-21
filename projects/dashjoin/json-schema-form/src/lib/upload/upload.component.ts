import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent extends BaseComponent {

  /**
   * allows for the result of a file upload to be written into a text form element
   */
  handleFileInput(base64: boolean, event: any) {
    if (10 * 1024 * 1024 <= event.target.files.item(0).size) {
      console.log('The file size is limited to 10MB');
      return;
    }
    let value: any
    const reader = new FileReader();
    reader.onload = () => {
      value = reader.result;

      if (this.state.schema.type === 'array') {
        value = JSON.parse(value);
      }
      if (this.state.schema.type === 'object') {
        try {
          value = JSON.parse(value);
        }
        catch (ignore) {
        }
        value = {
          name: event.target.files.item(0).name,
          lastModified: event.target.files.item(0).lastModified,
          size: event.target.files.item(0).size,
          type: event.target.files.item(0).type,
          value: value
        };
      }

      this.state.control.setValue(value)
    };
    if (base64) {
      reader.readAsDataURL(event.target.files.item(0));
    } else {
      reader.readAsText(event.target.files.item(0));
    }
  }
}
