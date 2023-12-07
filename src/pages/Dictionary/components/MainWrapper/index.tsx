import Header from '../Header';
import { Main } from './styles';

type MainWrapper = {
  children: React.ReactNode;
};

export default function MainWrapper({ children }: MainWrapper) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
