import { AnimationEvent, useEffect, useState } from 'react';

import { useProfileQuery } from '@/entities/user/api/userApi';
import arrow from '@assets/arrow.svg';
import cn from '@shared/lib/helpers/cn';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import UserAvatar from '@shared/ui/UserAvatar';
import { ErrorCode, useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';

const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'image/webp',
];

const UploadImageForm = () => {
  const { data: profile } = useProfileQuery();
  const { t } = useTranslation();

  const [isDragging, setIsDragging] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const snackbar = useSnackbar();

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    noClick: true,
    onDrop: (acceptedFiles) => {
      // TODO: implement success case feedback checkmark in button
      console.log(acceptedFiles);
      setIsDragging(false);
    },
    onError: (error) => {
      snackbar.err(error.message);
    },
    onDropRejected: (rejections) => {
      const errorMessage = rejections.at(0)?.errors.at(0)?.message;
      snackbar.err(errorMessage);
      setIsRejected(true);
    },
    validator({ type }) {
      const isValid = ALLOWED_IMAGE_TYPES.includes(type);

      if (!isValid) {
        return {
          code: ErrorCode.FileInvalidType,
          message: t('snackbar.wrongFileType'),
        };
      }

      return null;
    },
  });

  const displayName = profile?.first_name
    ? `${profile?.first_name} ${profile?.last_name}`
    : profile?.username;

  const handleAnimationEnd = (e: AnimationEvent) => {
    const target = e.target as HTMLFormElement;

    if (e.animationName !== 'shake') return;

    setIsRejected(false);
    target.classList.remove('animate-shake');
  };

  useEffect(() => {
    const handleDragEnter = () => {
      setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent) => {
      if (e.relatedTarget === null) {
        setIsDragging(false);
      }
    };

    const handleWindowDrop = () => {
      setIsDragging(false);
    };

    window.addEventListener('dragenter', handleDragEnter);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleWindowDrop);

    return () => {
      window.removeEventListener('dragenter', handleDragEnter);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleWindowDrop);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute -top-8 left-3/4 -translate-x-1/2 -translate-y-1/2">
        <p className="ml-3 animate-fade-in-screen text-xs text-primary opacity-50">
          Drag and drop
        </p>
        <img src={arrow} alt="" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        {...getRootProps()}
        onAnimationEnd={handleAnimationEnd}
        className={cn(
          'relative flex items-center justify-between gap-2 rounded-2xl transition-all',
          {
            'bg-primary-fixed px-6 py-4': isDragActive,
            'bg-surface-variant px-6 py-4': isDragging && !isDragActive,
            'animate-shake': isRejected,
          },
        )}>
        <div className="flex items-center gap-4">
          <UserAvatar className="h-16 w-16" />
          <div className="h-fit items-center space-y-1">
            <div className="text-on-surface">{displayName}</div>
            <div className="text-on-surface-variant">{profile?.email}</div>
          </div>
        </div>

        <input
          {...getInputProps()}
          className="absolute hidden h-full w-full"
          type="file"
        />

        <FilledTonalButton onClick={open}>
          {t('settings.account.changeImage')}
        </FilledTonalButton>
      </form>
    </div>
  );
};

export default UploadImageForm;
