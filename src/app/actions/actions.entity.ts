type IOptionDefault = Readonly<{
  id: number;
  value: string;
}>;

export type IOption<T = unknown> = IOptionDefault & Readonly<Partial<T>>;

export type ISelectWithOptions<T = unknown, K = unknown> = Partial<K> & Readonly<{
  type: string;
  options: IOption<T>[];
  selectedOptionId?: number;
}>

export type SelectOptionEvent<T = unknown> = Readonly<{
  type: string;
  value: IOption<T>;
}>
