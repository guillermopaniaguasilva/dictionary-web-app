import { useState } from 'react';
import theme from 'theme/index';
import arrowDownIcon from '../../assets/images/icon-arrow-down.svg';
import { CustomDropdown } from './styles';

type DropdownProps = {
  changeFont: (_: string) => void;
  isDarkThemeOn: boolean;
};

export default function Dropdown({ changeFont, isDarkThemeOn }: DropdownProps) {
  const [currentFont, setCurrentFont] = useState('Mono');

  const handleOptionClick = (font: string) => {
    setCurrentFont(font);
    changeFont(theme.fontFamilies[font]);
  };

  return (
    <CustomDropdown className="custom-dropdown">
      <button
        className="btn"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          color: `${isDarkThemeOn ? theme.colors.white : theme.colors.black}`,
        }}
      >
        {currentFont}
        <img
          style={{ marginLeft: '16px' }}
          src={arrowDownIcon}
          alt="ArrowDownIcon"
          width={12}
          height={6}
        />
      </button>
      <ul
        className={`dropdown-menu ${isDarkThemeOn && 'bg-dark'}`}
        aria-labelledby="dropdownMenuButton"
      >
        {['Mono', 'Serif', 'Sans Serif'].map((font) => (
          <li key={font}>
            <a
              style={{
                color: `${
                  isDarkThemeOn ? theme.colors.white : theme.colors.black
                }`,
              }}
              className="dropdown-item"
              href="#"
              onClick={() => handleOptionClick(font)}
            >
              {font}
            </a>
          </li>
        ))}
      </ul>
    </CustomDropdown>
  );
}
