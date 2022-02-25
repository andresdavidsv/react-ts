import { useForm } from '../hooks/useForm';

export const Forms = () => {
  const { form, onChange, email, password } = useForm({
    email: 'test@example.com',
    password: 'test',
  });

  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, 'email')}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, 'password')}
      />
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};
