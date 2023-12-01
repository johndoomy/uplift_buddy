import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';

export default async function Header() {
  return (
    <Navbar className="mb-2 bg-[#feba1f] text-md absolute">
      <NavbarItem>
        <Avatar></Avatar>
      </NavbarItem>
      <NavbarBrand content="center">
        <Link href="/" className="text-xl">
          Uplift Buddy
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">Sign In</NavbarContent>
    </Navbar>
  );
}
