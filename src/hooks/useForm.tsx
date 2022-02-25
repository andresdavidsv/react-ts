import { useState } from 'react';

export const useForm = <T extends Object>(formProps: T) => {
  const [form, setForm] = useState(formProps);
  const onChange = (value: string, field: keyof T) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  return {
    onChange,
    form,
    ...form,
  };
};
