import * as React from 'react';
import {Alert} from '~/components/Alert';
import {BootstrapSize} from '../../types/BootstrapSize';

type ErrorMessageProps = {
  error: string | null | undefined;
  size?: BootstrapSize;
  className?: string;
};

// NOTE: Returns null if !error, so don't need to use it like this: { error && <ErrorMessage error={error} /> },
// instead just do <ErrorMessage error={error} />.
// Keeps the render function a bit cleaner.
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  size,
  className,
}) => {
  if (!error) {
    return null;
  }
  return (
    <Alert variant="danger" size={size} className={className}>
      {error}
    </Alert>
  );
};
