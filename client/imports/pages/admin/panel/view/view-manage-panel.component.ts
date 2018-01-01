import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-manage-panel',
  templateUrl: 'view-manage-panel.html'
})
export class ViewManagePanelPage {
  viewState: string;

  constructor(private route: ActivatedRoute) {
    this.viewState = route.snapshot.paramMap.get('view');
  }
}