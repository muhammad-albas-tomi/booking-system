export type ParamValueType =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | undefined
  | null
  | Date;

export type ParamsType = Record<string, ParamValueType>;
