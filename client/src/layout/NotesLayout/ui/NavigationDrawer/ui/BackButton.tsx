import { routes } from '@shared/lib/const';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBack = () => {
    navigate(`/${routes.NOTES}`);
  };

  return (
    <h2
      style={{ viewTransitionName: 'title' }}
      className="mr-auto flex items-center pl-4">
      <button
        type="button"
        onClick={handleBack}
        className="flex h-12 w-12 items-center justify-center">
        <IconButton className="animate-fade-in-screen duration-500">
          <Icon>arrow_left_alt</Icon>
        </IconButton>
      </button>
      <span className="animate-fade-in-settings text-on-surface-variant">
        {t('settings.title')}
      </span>
    </h2>
  );
};

export default BackButton;
