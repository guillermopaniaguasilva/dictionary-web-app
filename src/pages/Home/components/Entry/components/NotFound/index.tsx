import { Container, Description, Emoji, Heading } from './styles';

export default function NotFound() {
  return (
    <Container>
      <Emoji>😕</Emoji>
      <Heading>No Definitions Found</Heading>
      <Description>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </Description>
    </Container>
  );
}
