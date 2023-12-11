import theme from 'theme/index';
import { StoreApi, UseBoundStore, create } from 'zustand';

interface DictionaryState {
  font: string;
  isDarkThemeOn: boolean;
  changeFont: (_: string) => void;
  switchToDarkTheme: () => void;
}

export const useDictionaryStore = create<DictionaryState>()((set) => ({
  font: theme.fontFamilies.Mono,
  isDarkThemeOn: false,
  changeFont: (font) => set(() => ({ font })),
  switchToDarkTheme: () =>
    set((state) => ({ isDarkThemeOn: !state.isDarkThemeOn })),
}));

interface QuizzesWindow extends Window {
  dictionaryStore?: UseBoundStore<StoreApi<DictionaryState>>;
}

(window as QuizzesWindow).dictionaryStore = useDictionaryStore;
