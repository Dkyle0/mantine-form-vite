import { Switch } from '@mantine/core';
import stiles from './switch-page.module.css';

export const SwitchPage = ({
  chendge,
  setChendge,
}: {
  chendge: boolean;
  setChendge: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={stiles.container}>
      <Switch
        checked={chendge}
        onChange={(event) => setChendge(event.currentTarget.checked)}
        defaultChecked
        labelPosition="left"
        label="Signin | Signup"
      />
    </div>
  );
};
