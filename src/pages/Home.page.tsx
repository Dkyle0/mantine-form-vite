import { Signup } from '@/components/Signup/Signup';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { useState } from 'react';
import { Signin } from '@/components/Signin/Signin';
import { SwitchPage } from '@/components/Switch-page/switch-page';

export function HomePage() {
  const [chendge, setChendge] = useState(false);

  const render = chendge ? <Signup /> : <Signin />;
  return (
    <>
      <ColorSchemeToggle />
      <SwitchPage chendge={chendge} setChendge={setChendge} />
      {render}
    </>
  );
}
