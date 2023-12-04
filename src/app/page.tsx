import Onboarding from '@/components/onboarding-form';
import Hero from '@/components/hero';
import { Button } from '@nextui-org/react';
import { prisma } from '@/lib/prisma';

export default function Home() {
  //test function, cant run on client
  // const createUser = async () => {
  //   const user = await prisma.user.create({
  //     data: {
  //       name: 'John',
  //       email: 'john@mail.com',
  //       phoneNumber: '+13367823471',
  //       password: '123',
  //     },
  //   });
  //   console.log(user);
  // };

  // createUser();

  return (
    <div className="">
      <Hero />
      <div></div>
    </div>
  );
}
