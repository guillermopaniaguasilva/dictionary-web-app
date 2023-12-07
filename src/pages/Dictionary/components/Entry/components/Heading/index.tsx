import playIcon from 'assets/images/icon-play.svg';
import { useRef } from 'react';
import { Phonetic } from 'types/index';
import { Phonetics, Word } from './styles';

type PhoneticsProps = {
  phonetics: Phonetic[];
  word: string;
};

export default function Heading({ phonetics, word }: PhoneticsProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const phonetic: Partial<Phonetic> = {};
  phonetics.forEach((obj) => {
    for (const key in obj) {
      if (obj[key] !== '' && obj[key] !== null && obj[key] !== undefined) {
        phonetic[key] = obj[key];
      }
    }
  });

  return (
    <div className="d-flex mt-4">
      <div className="d-flex flex-column">
        <Word>{word}</Word>
        <Phonetics>{phonetic.text}</Phonetics>
      </div>
      <div className="ms-auto align-self-center ">
        <audio ref={audioRef} src={phonetic.audio}></audio>
        <img
          style={{ cursor: 'pointer' }}
          src={playIcon}
          alt="play icon"
          width={48}
          height={48}
          onClick={() => audioRef.current?.play()}
        />
      </div>
    </div>
  );
}
