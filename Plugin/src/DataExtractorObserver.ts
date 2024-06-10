import { Observer } from './Observer';

export class DataExtractorObserver implements Observer {
  public update(): void {
    alert('Extração de dados concluída!');
  }
}
