'use client';

// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import DatabaseNewEditForm from '../database-new-edit-form';

// ----------------------------------------------------------------------

export default function DatabaseCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new Database"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Database',
            href: paths.dashboard.database.root,
          },
          { name: 'New Database' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <DatabaseNewEditForm />
    </Container>
  );
}
