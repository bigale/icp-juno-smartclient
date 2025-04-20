declare module 'smartclient-lgpl' {
  export interface ListGridProps {
    width?: string | number;
    height?: string | number;
    dataSource?: string;
    autoFetchData?: boolean;
    showFilterEditor?: boolean;
    canEdit?: boolean;
    canRemoveRecords?: boolean;
    modalEditing?: boolean;
    fields?: Array<{
      name: string;
      title?: string;
      type?: string;
    }>;
  }

  export interface ButtonProps {
    title?: string;
    click?: () => void;
  }

  export const ListGrid: React.FC<ListGridProps>;
  export const Button: React.FC<ButtonProps>;
}

interface ISC {
  Page: {
    loadStyleSheets(): void;
  };
  DataSource: {
    create(config: any): void;
    get(name: string): {
      addData(record: any): void;
    };
  };
}

declare global {
  interface Window {
    isc: ISC;
  }
}