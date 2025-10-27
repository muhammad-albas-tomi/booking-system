export type ConfigType = {
  id: number;
  createdAt: string;
  key: string;
  displayName: string;
  defaultValue: string;
  type: string;
  dataType: string;
};

export type BusinessConfigType = {
  id: number;
  value: string;
  businessConfig: ConfigType;
};

interface BusinessConfig {
  id: number;
  createdAt: string;
  key: string;
  displayName: string;
  defaultValue: string;
  type: string;
  dataType: 'int' | 'string' | 'boolean' | 'select';
  options?: string[];
}

interface ConfigItem {
  id: number;
  value: string;
  businessConfig: BusinessConfig;
}

interface FormData {
  [key: string]: number | boolean | string;
}

interface PayloadType {
  businessBusinessConfig: {
    businessConfigId: number;
    value: string | number | boolean;
  }[];
}

interface GroupedConfig {
  [type: string]: ConfigItem[];
}
