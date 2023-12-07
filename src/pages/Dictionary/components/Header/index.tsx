import bookIcon from 'assets/images/logo.svg';
import Dropdown from '../Dropdown';
import UiThemeToggler from '../UiThemeToggler';
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
