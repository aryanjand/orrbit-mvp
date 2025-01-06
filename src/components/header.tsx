import { Button } from './shared';

export const Header = () => {
  return (
    <nav className="flex justify-between px-auto">
      <Button>Orrbit</Button>
      <Button>Sign In</Button>
    </nav>
  );
};
