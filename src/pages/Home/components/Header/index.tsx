import bookIcon from 'assets/images/logo.svg';
import Dropdown from '../../../../ui-library/Dropdown';
import UiThemeToggler from '../../../../ui-library/UiThemeToggler';
import { HeaderContainer } from './styles';

export default function Header() {
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
        <Dropdown />
        <UiThemeToggler />
      </div>
    </HeaderContainer>
  );
}
