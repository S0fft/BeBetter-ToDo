import { RootState } from '@/store';

const selectIsDarkMode = (state: RootState) => state.darkModeReducer.isDarkMode;

export default selectIsDarkMode;
