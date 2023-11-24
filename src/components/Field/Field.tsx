import { useField } from 'formik';
import { Input } from './Input';
import { Label } from './Label';

interface iField {
  variant: 'normal' | 'outline';
  type: string;
  name: string;
  label: string;
  placeholder?: string;
}

export function Field({ variant, type, name, label, placeholder }: iField) {
  const [field, meta] = useField(name);

  return (
    <Label>
      {label}
      <Input
        variant={variant}
        {...field}
        type={type}
        placeholder={placeholder}
      />

      {meta.touched && meta.error ? (
        <span className={`${meta.touched && meta.error ? 'invalid' : ''}`}>
          {meta.error}
        </span>
      ) : null}
    </Label>
  );
}
