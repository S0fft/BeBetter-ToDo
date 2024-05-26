import { FC } from 'react';

type ContentProps = {
  title: string;
  content: string;
};

const Content: FC<ContentProps> = ({ title, content }) => {
  return (
    <article className="space-y-5">
      <h2 className="font-medium">{title}</h2>
      <p className="whitespace-pre-wrap text-sm">{content}</p>
    </article>
  );
};

export default Content;
