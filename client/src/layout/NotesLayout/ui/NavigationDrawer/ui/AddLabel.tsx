import Icon from '@shared/ui/Icon';
import { useTranslation } from 'react-i18next';

const AddLabel = () => {
  const { t } = useTranslation();

  const handleAddView = () => {};

  return (
    <button
      data-testid="add-view"
      onClick={handleAddView}
      type="button"
      className="flex w-full transform-gpu items-center gap-3 rounded-full py-4 pl-4 pr-6 transition-all ease-standard hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)]">
      <Icon>add</Icon> {t('sidebar.addLabel')}
    </button>
  );
};

export default AddLabel;
