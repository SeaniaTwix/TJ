import { Component, Input } from '@angular/core';
import './syntax-list';

@Component({
  selector: 'suggestion-box',
  templateUrl: 'suggestion-box.html'
})
export class SuggestionBoxComponent {
  @Input() lexed: Array<any>;
  @Input() showAutocomplete: Boolean;

  constructor() {}
}
