import { Box, StyleTypography } from '@/components';
import { StyleNewsletter } from './StyleNewsletter';
import FormNewsletter from './FormNewsletter/FormNewsletter';

export function Newsletter() {
  return (
    <StyleNewsletter>
      <Box className="content">
        <StyleTypography tag="h2" color="dark" size="sm">
          Subscribe Our Newsletter
        </StyleTypography>

        <StyleTypography tag="p" color="gray" size="xs">
          Best cooks and the best delivery guys all at your service. Hot tasty
          food will reach you in 60 minutes.
        </StyleTypography>
      </Box>

      <FormNewsletter />
    </StyleNewsletter>
  );
}
