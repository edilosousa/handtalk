import { Observer } from './Observer';
import { sendToAPI } from './api';

export class DataExtractor {
  private observers: Observer[] = [];
  private themeChangeCount: number = 0;

  constructor() {
    this.monitorThemeChanges();
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public extractData(): void {
    const data = {
      device: this.getDeviceType(),
      os: this.getOperatingSystem(),
      domain: window.location.hostname,
      themeChanges: this.themeChangeCount
    };

    sendToAPI(data).then(() => {
      this.notifyObservers();
    });
  }

  private notifyObservers(): void {
    this.observers.forEach(observer => observer.update());
  }

  private getDeviceType(): string {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/android/.test(userAgent)) return 'android';
    if (/iphone|ipad|ipod/.test(userAgent)) return 'ios';
    return 'desktop';
  }

  private getOperatingSystem(): string {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes('win')) return 'Windows';
    if (platform.includes('mac')) return 'MacOS';
    if (platform.includes('linux')) return 'Linux';
    return 'Unknown';
  }

  private monitorThemeChanges(): void {
    let currentTheme = this.getTheme();
    const observer = new MutationObserver(() => {
      const newTheme = this.getTheme();
      if (newTheme !== currentTheme) {
        this.themeChangeCount++;
        currentTheme = newTheme;
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  private getTheme(): string {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }
}
