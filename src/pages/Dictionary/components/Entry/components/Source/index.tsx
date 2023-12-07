import newWindowIcon from 'assets/images/icon-new-window.svg';
import { Link, Title } from './styles';

type SourceProps = {
  source: string | undefined;
};

export default function Source({ source }: SourceProps) {
  return (
    <div className="border-top pt-4">
      <Title>Source</Title>
      <div className="d-flex">
        <Link className="text-truncate" href={source}>
          {source}
        </Link>
        <img src={newWindowIcon} alt="new window" />
      </div>
    </div>
  );
}
