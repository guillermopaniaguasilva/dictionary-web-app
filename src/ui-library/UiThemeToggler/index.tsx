import MoonIcon from 'assets/icons';
import theme from 'theme/index';
import { useDictionaryStore } from '../../pages/Home/store';
import { StyledSwitch } from './styles';

export default function UiThemeToggler() {
  const isDarkThemeOn = useDictionaryStore((state) => state.isDarkThemeOn);
  const switchToDarkTheme = useDictionaryStore(
    (state) => state.switchToDarkTheme
  );

  const moonIcon = isDarkThemeOn ? (
    <MoonIcon color={theme.colors.purple} width={20} height={20} />
  ) : (
    <MoonIcon color={theme.colors.grey} width={20} height={20} />
  );

  return (
    <div
      className={`d-flex align-items-center justify-content-center ps-3 ms-2 border-start ${
        isDarkThemeOn ? 'border-white' : ''
      }`}
      style={{ gap: '8px' }}
    >
      <StyledSwitch className="form-check form-switch m-0 d-flex justify-content-center">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={switchToDarkTheme}
        />
      </StyledSwitch>
      {moonIcon}
    </div>
  );
}
