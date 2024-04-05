import { FC } from 'react';

type LabelsProps = {
  labels: string[];
};

const Labels: FC<LabelsProps> = ({ labels }) => {
  return (
    <div className="z-10 ml-auto flex flex-shrink-0 gap-3 self-end pb-3.5">
      {labels.map((labelName, i) => (
        // 👇 Labels order will never change, so we can use index as a key
        // eslint-disable-next-line
        <span key={i}>{labelName}</span>
      ))}
    </div>
  );
};

export default Labels;
