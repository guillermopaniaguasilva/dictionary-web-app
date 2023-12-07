import { Meaning as MeaningType } from 'types/index';
import {
  Definition,
  DefinitionsList,
  PartOfSpeech,
  SubHeading,
  Synonym,
} from './styles';

type MeaningProps = {
  meaning: MeaningType;
};

export default function Meaning({ meaning }: MeaningProps) {
  return (
    <div style={{ marginTop: '34px' }}>
      <div className="d-flex">
        <PartOfSpeech>{meaning.partOfSpeech}</PartOfSpeech>
        <div
          style={{ paddingBottom: '3px' }}
          className="w-100 border-top align-self-center"
        ></div>
      </div>
      <SubHeading>Meaning</SubHeading>
      <DefinitionsList>
        {meaning.definitions
          .map((d) => d.definition)
          .map((m) => (
            <Definition>{m}</Definition>
          ))}
      </DefinitionsList>
      {meaning.synonyms.length > 0 && (
        <div className="d-flex">
          <SubHeading>Synonyms</SubHeading>
          {meaning.synonyms.map((s) => (
            <Synonym>{s}</Synonym>
          ))}
        </div>
      )}
    </div>
  );
}
