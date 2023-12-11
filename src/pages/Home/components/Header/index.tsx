import bookIcon from 'assets/images/logo.svg';
import Dropdown from '../../../../ui-library/Dropdown';
import UiThemeToggler from '../../../../ui-library/UiThemeToggler';
import { useDictionaryStore } from '../../store';
import { HeaderContainer } from './styles';

export default function Header() {
  const changeFont = useDictionaryStore((state) => state.changeFont);
  const isDarkThemeOn = useDictionaryStore((state) => state.isDarkThemeOn);
  const switchToDarkTheme = useDictionaryStore(
    (state) => state.switchToDarkTheme
  );

  return (
    <HeaderContainer>
      <img
        src={bookIcon}
        alt="BookIconLogo"
        width={28}
        height={32}
        className="align-self-center"
      />
      <div className="d-flex ms-auto">
        <Dropdown changeFont={changeFont} isDarkThemeOn={isDarkThemeOn} />
        <UiThemeToggler
          isDarkThemeOn={isDarkThemeOn}
          switchToDarkTheme={switchToDarkTheme}
        />
      </div>
    </HeaderContainer>
  );
}
