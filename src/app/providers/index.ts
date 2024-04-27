import compose from 'lodash/fp/compose';
import { withQuery } from './with-query';
import { withModal } from './with-modal';
import { withDrawer } from './with-drawer';
import { withSnackbar } from './with-snackbar';
import { withMuiTheme } from './with-mui-theme';

export const withProviders = compose(
    withQuery,
    withMuiTheme,
    withDrawer,
    withModal,
    withSnackbar
);
