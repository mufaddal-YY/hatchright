// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// hooks
import { useAuthContext } from 'src/auth/hooks/use-auth-context';
// routes
import { paths } from 'src/routes/paths';
// locales
// components
import Label from 'src/components/label';

// ----------------------------------------------------------------------

export default function NavUpgrade() {
  const { user } = useAuthContext();

  return (
    <Stack
      sx={{
        px: 2,
        py: 5,
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center">
        <Box sx={{ position: 'relative' }}>
          <Avatar src={user?.photoURL} alt={user?.displayName} sx={{ width: 48, height: 48 }} />
          {/* <Label
            color="success"
            variant="filled"
            sx={{
              top: -6,
              px: 0.5,
              left: 40,
              height: 20,
              position: 'absolute',
              borderBottomLeftRadius: 2,
            }}
          >
            Free
          </Label> */}
        </Box>

        <Stack spacing={0.5} sx={{ mt: 1.5, mb: 2 }}>
          <Typography variant="subtitle2" noWrap>
            Hi! {user?.displayName}
          </Typography>

          <Typography variant="body2" noWrap sx={{ color: 'text.disabled' }}>
            {user?.email}
          </Typography>
        </Stack>

        <Button variant="contained" href={paths.dashboard.root} target="_blank" rel="noopener">
         Contact Support
        </Button>

        {/* <div>
          <Typography gutterBottom variant="subtitle1">
            {`${translate('docs.hi')}, ${user?.displayName}`}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
            Need help?
          </Typography>
        </div>

        <Button href={PATH_DASHBOARD.root} target="_blank" rel="noopener" variant="contained">
          Contact Support
        </Button> */}
      </Stack>
    </Stack>
  );
}
