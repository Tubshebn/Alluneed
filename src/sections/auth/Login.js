import NextLink from 'next/link';
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
import { useAuthContext } from 'src/auth/useAuthContext';
import LoginLayout from 'src/layouts/login';
import { PATH_AUTH } from 'src/routes/paths';
import AuthLoginForm from './AuthLoginForm';

export default function Login() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Sign in to Minimal</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link component={NextLink} href={PATH_AUTH.login} variant="subtitle2">
            Create an account
          </Link>
        </Stack>

        <Tooltip title={method} placement="left">
          <Box
            component="img"
            alt={method}
            src={`/assets/icons/auth/ic_${method}.png`}
            sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
          />
        </Tooltip>
      </Stack>

      <Alert severity="info" sx={{ mb: 3 }}>
        Use email : <strong>demo@minimals.cc</strong> / password :<strong> demo1234</strong>
      </Alert>

      <AuthLoginForm />
    </LoginLayout>
  );
}
