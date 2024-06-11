import { DataExtractor } from './DataExtractor';
import { DataExtractorObserver } from './DataExtractorObserver';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.innerText = 'Ativar Extração de Dados';
  button.classList.add('bg-info'); // Adicione a classe de estilo personalizada
  button.style.position = 'fixed';
  button.style.bottom = '10px';
  button.style.right = '10px';
  button.style.zIndex = '1000';
  document.body.appendChild(button);

  const dataExtractor = new DataExtractor();
  const observer = new DataExtractorObserver();
  dataExtractor.addObserver(observer);

  button.addEventListener('click', () => {
    dataExtractor.extractData();
  });
});
