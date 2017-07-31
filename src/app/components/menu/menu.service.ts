import { Injectable } from '@angular/core';
import { ComponentsData } from 'app/interfaces/components-data';

@Injectable()
export class MenuService {
  private data: ComponentsData;

  constructor() {
  }

  setData(type: string, id: number) {
    this.data = new ComponentsData(type, id);
  }

  getData() {
    return this.data;
  }
}
