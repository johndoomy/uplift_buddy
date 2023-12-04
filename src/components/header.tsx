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
import paths from '@/paths';

export default async function Header() {
  return (
    <Navbar className=" bg-[#feba1f] text-md ">
      <NavbarItem>
        <Avatar></Avatar>
      </NavbarItem>
      <NavbarBrand content="center">
        <Link href="/" className="text-xl">
          Uplift Buddy
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <Link href={paths.signInPage()}>
          <Button variant="bordered" color="primary">
            Sign In
          </Button>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
