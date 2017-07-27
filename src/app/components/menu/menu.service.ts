import { Injectable } from '@angular/core';
import { ComponentsData } from 'app/interfaces/components-data';

@Injectable()
export class MenuService {
  private data: ComponentsData;

  constructor() {
  }

  setData(type: string, id: number, itemType?: string) {
    this.data = new ComponentsData(type, id, itemType);
  }

  setItemType(itemType: string) {
    this.data.setItemType(itemType);
  }

  getData() {
    return this.data;
  }

}
