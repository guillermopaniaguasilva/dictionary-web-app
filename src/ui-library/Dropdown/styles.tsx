import styled from 'styled-components';
import arrowIcon from '../../assets/images/icon-arrow-down.svg';

export const CustomDropdown = styled.div`
  &.custom-dropdown {
    position: relative;
    display: inline-block;

    /* Style for the arrow-down icon */
    .arrow-down {
      content: url(${arrowIcon});
      font-size: 14px;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      pointer-events: none;
    }

    .dropdown-item:focus,
    .dropdown-item:hover {
      background-color: ${({ theme }) =>
        theme.isDarkThemeOn ? 'transparent' : theme.colors.white};
      color: ${({ theme }) => theme.colors.purple} !important;
    }
  }

  & ul {
    transform: translate3d(-86px, 40px, 0px) !important;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 5px 30px 0px
      ${({ theme }) =>
        theme.isDarkThemeOn ? theme.colors.purple : 'rgba(0, 0, 0, 0.1)'};
  }

  .btn-check:focus + .btn,
  .btn:focus {
    box-shadow: none;
  }
`;
