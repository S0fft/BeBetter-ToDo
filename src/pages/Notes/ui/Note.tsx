/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';
import UserAvatar from '@shared/ui/UserAvatar';

type NoteProps = {
  title: string;
  content: string;
  createdAt: string;
  labels: string[];
  isPinned: boolean;
};

// TODO: break component into smaller pieces

const Note: FC<NoteProps> = ({
  title,
  content,
  createdAt,
  labels,
  isPinned,
}) => {
  return (
    <li className="relative flex h-[200px] w-full flex-col gap-5 overflow-hidden rounded-xl bg-surface-container pl-6 pr-3 pt-6 text-on-surface after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[90px] after:w-full after:bg-gradient-to-t after:from-surface-bright after:to-transparent after:opacity-50">
      <header className="flex items-center gap-4">
        <UserAvatar className="size-10" />

        <div className="grid gap-1">
          <span className="font-medium">Caroline</span>
          <span>{createdAt}</span>
        </div>

        <div
          className="ml-auto space-x-3"
          // TODO: move style to constant
          style={{
            '--md-sys-color-primary': 'var(--md-sys-color-surface)',
            '--md-sys-color-on-primary':
              'var(--md-sys-color-on-surface-variant)',
            '--md-filled-icon-button-container-shape': '12px',
            '--md-filled-icon-button-unselected-container-color':
              'var(--md-sys-color-primary)',
          }}>
          <FilledIconButton
            selected={isPinned}
            style={{
              '--md-filled-icon-button-toggle-icon-color':
                'var(--md-sys-color-on-primary)',
              '--md-filled-icon-button-toggle-focus-icon-color':
                'var(--md-sys-color-on-primary)',
              '--md-filled-icon-button-toggle-pressed-icon-color':
                'var(--md-sys-color-on-primary)',
              '--md-filled-icon-button-toggle-selected-focus-icon-color':
                'var(--md-sys-color-on-surface)',
              '--md-filled-icon-button-toggle-hover-icon-color':
                'var(--md-sys-color-on-primary)',
            }}
            toggle>
            <Icon>keep</Icon>
            <Icon
              slot="selected"
              style={{
                fontVariationSettings: "'FILL' 1",
              }}>
              keep
            </Icon>
          </FilledIconButton>
          <FilledIconButton
            style={{
              '--md-filled-icon-button-container-width': '30px',
            }}>
            <Icon>more_vert</Icon>
          </FilledIconButton>
        </div>
      </header>
      <div className="row-start-2 row-end-3 flex h-full gap-3 overflow-hidden">
        <article className="space-y-5">
          <h2 className="font-medium">{title}</h2>
          <p className="whitespace-pre-wrap text-sm">{content}</p>
        </article>
        <div className="z-10 ml-auto flex flex-shrink-0 gap-3 self-end pb-3.5">
          {labels.map((labelName, i) => (
            <span key={i}>{labelName}</span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Note;
