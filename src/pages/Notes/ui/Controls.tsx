import { FC } from 'react';

import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';

type BodyProps = {
  isPinned: boolean;
};

const Controls: FC<BodyProps> = ({ isPinned }) => {
  return (
    <div
      className="ml-auto space-x-3"
      // TODO: move style to constant
      style={{
        '--md-sys-color-primary': 'var(--md-sys-color-surface)',
        '--md-sys-color-on-primary': 'var(--md-sys-color-on-surface-variant)',
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
  );
};

export default Controls;
