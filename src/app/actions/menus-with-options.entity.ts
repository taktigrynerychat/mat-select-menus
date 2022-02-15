type DefaultMenuOption = Readonly<{
  id: number;
  value: string;
}>;

export type MenuOption<T = unknown> = DefaultMenuOption & Readonly<Partial<T>>;

export type MenuWithOptions<T = unknown, K = unknown> = Partial<K> & Readonly<{
  type: string;
  options: MenuOption<T>[];
  selectedOptionId?: number;
}>

export type MenuOptionEvent<T = unknown> = Readonly<{
  type: string;
  value: MenuOption<T>;
}>
