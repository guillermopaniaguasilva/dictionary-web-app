import Dictionary from './pages/Dictionary';
import { Wrapper } from './pages/Dictionary/components/MainWrapper/styles';

export default function App() {
  return (
    <Wrapper $darkTheme={false}>
      <Dictionary />
    </Wrapper>
  );
}
