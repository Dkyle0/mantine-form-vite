import { Button, Group, PasswordInput, Radio, TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import stiles from './Signup.module.css';

export function Signup() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm({
    initialValues: {
      name: '',
      nickname: '',
      email: '',
      gender: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      name: (value) => (value.length < 2 ? 'Имя должно содержать минимум 2 символа' : null),
      nickname: (value) => (value.length < 2 ? 'Ник должен содержать минимум 2 символа' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Некорректный email'),
      password: (value) => (value.length < 6 ? 'Пароль должен содержать минимум 6 символов' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Пароли должны совпадать' : null,
      gender: (value) => (!value ? 'Выберите ваш пол' : null),
    },
  });

  const handleSubmit = (values: IFormValuesUP) => {
    console.log('Submitted values:', values);
  };

  return (
    <div className={stiles.container}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Имя" placeholder="Имя" withAsterisk {...form.getInputProps('name')} />

        <TextInput
          leftSectionPointerEvents="none"
          leftSection={icon}
          label="Ник"
          placeholder="Ник"
          withAsterisk
          {...form.getInputProps('nickname')}
        />

        <TextInput
          label="Почта"
          placeholder="Почта"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <Radio.Group
          name="gender"
          label="Пол"
          description="Выберите Ваш пол"
          withAsterisk
          {...form.getInputProps('gender')}
        >
          <Group mt="xs">
            <Radio value="мужской" label="Мужской" />
            <Radio value="женский" label="Женский" />
          </Group>
        </Radio.Group>

        <PasswordInput
          label="Пароль"
          placeholder="Пароль"
          withAsterisk
          {...form.getInputProps('password')}
        />

        <PasswordInput
          label="Повторите пароль"
          placeholder="Повторите пароль"
          withAsterisk
          {...form.getInputProps('confirmPassword')}
        />

        <Button className={stiles.submit} fullWidth type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}
