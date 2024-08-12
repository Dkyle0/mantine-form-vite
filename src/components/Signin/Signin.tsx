import { Button, Group, PasswordInput, Radio, TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import stiles from './Signin.module.css';
import { useForm } from '@mantine/form';

export function Signin() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Некорректный email'),
      password: (value) => (value.length < 6 ? 'Пароль должен содержать минимум 6 символов' : null),
    },
  });

  const handleSubmit = (values: IFormValuesIN) => {
    console.log('Submitted values:', values);
  };

  return (
    <div className={stiles.container}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Почта"
          placeholder="Почта"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Пароль"
          placeholder="Пароль"
          withAsterisk
          {...form.getInputProps('password')}
        />

        <Button className={stiles.submit} fullWidth type="submit">
          Войти
        </Button>
      </form>
    </div>
  );
}
