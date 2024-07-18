import {
  SNACKBAR_AUTO_HIDE_DURATION,
  SnackBarTransition,
} from '@shared/lib/const';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const AppLayout = () => {
  return (
    <>
      <ToastContainer
        closeOnClick={false}
        closeButton={false}
        autoClose={SNACKBAR_AUTO_HIDE_DURATION}
        hideProgressBar
        pauseOnHover={false}
        draggable={false}
        limit={1}
        transition={SnackBarTransition}
        position="bottom-left"
        toastClassName="!text-inverse-on-surface origin-bottom !bg-inverse-surface !pl-4 !min-h-[48px] text-left"
        bodyClassName="text-sm font-normal relative !p-0 [&>div]:origin-bottom [&>div]:animate-fade-in-snackbar-body [&>div]:truncate w-full [&>div]:pe-16"
      />
      <Outlet />
    </>
  );
};

export default AppLayout;
