import { Dna } from 'react-loader-spinner';

export const LoaderDna = () => {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{ margin: '0 auto', display: 'flex' }}
    />
  );
};
