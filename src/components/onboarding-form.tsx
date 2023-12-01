'use client';

import { useFormState } from 'react-dom';
import { Input, Button, Checkbox } from '@nextui-org/react';
import * as actions from '@/actions';

export default function OnboardingForm() {
  const [formState, action] = useFormState(actions.submitOnboarding, {
    errors: {},
  });

  return (
    <div className="">
      <div className="p-4 mt-20">
        <h1>Please Fill in the information below to sign up.</h1>
      </div>
      <div>
        <form
          action={action}
          className="grid gap-y-6 p-4 border rounded-lg bg-blue-100 border-blue-100"
        >
          <div>
            <Input
              name="name"
              type="name"
              label="Name"
              placeholder="Enter your first name"
              labelPlacement="outside"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
          </div>
          <div>
            <Input
              name="phoneNumber"
              type="phoneNumber"
              label="Phone Number"
              placeholder="Enter your phone number"
              labelPlacement="outside"
              isInvalid={!!formState.errors.phoneNumber}
              errorMessage={formState.errors.phoneNumber?.join(', ')}
            />
          </div>
          <div className="flex justify-between px-6">
            <div className="flex justify-left">
              <Checkbox className="">
                <p className="text-xs w-40">
                  By checking this box, you agree to recieve texts from Uplift
                  Buddy.
                </p>
              </Checkbox>
            </div>
            <div>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div>{formState.errors._form?.join(', ')}</div>
    </div>
  );
}
