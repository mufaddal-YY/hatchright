'use client';

// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hook';
// _mock
import { _DatabaseList } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import DatabaseNewEditForm from '../database-new-edit-form';

// ----------------------------------------------------------------------

export default function DatabaseEditView() {
  const settings = useSettingsContext();

  const params = useParams();

  const { id } = params;

  const currentDatabase = _DatabaseList.find((Database) => Database.id === id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Database',
            href: paths.dashboard.database.root,
          },
          { name: currentDatabase?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <DatabaseNewEditForm currentDatabase={currentDatabase} />
    </Container>
  );
}
