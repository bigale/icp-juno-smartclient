interface ISCPage {
  loadStyleSheets(): void;
}

interface ISCDataSource {
  create(config: any): void;
  get(name: string): {
    addData(record: any): void;
  };
}

interface ISC {
  Page: ISCPage;
  DataSource: ISCDataSource;
}

declare global {
  interface Window {
    isc: ISC;
  }
}