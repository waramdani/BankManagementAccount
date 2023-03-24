import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editable-element',
  templateUrl: './editable-element.component.html',
  styleUrls: ['./editable-element.component.css']
})
export class EditableElementComponent {
  @Input() value?: string | number = '';
  @Output() valueChange = new EventEmitter<string | number>();
  
  showInput = false;

  onEdit() {
    console.log(this.value);
    this.showInput = !this.showInput;
    this.valueChange.emit(this.value);
    
  }
}
