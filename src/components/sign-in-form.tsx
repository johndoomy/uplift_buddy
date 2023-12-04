'use client';

import { useFormState } from 'react-dom';
import { Input, Button, Checkbox } from '@nextui-org/react';
import * as actions from '@/actions';

export default function SignInForm() {
  const [formState, action] = useFormState(actions.submitSignIn, {
    errors: {},
  });

  return (
    <div>
      <div className="">
        <div className="p-4">
          <h1>Sign In</h1>
        </div>
        <div>
          <form
            action={action}
            className="grid gap-y-6 p-4 border rounded-lg bg-blue-100 border-blue-100"
          >
            <div>
              <Input
                name="email"
                type=""
                label="Email"
                placeholder="Email"
                labelPlacement="outside"
                isInvalid={!!formState.errors.email}
                errorMessage={formState.errors.email?.join(', ')}
              />
            </div>
            <div>
              <Input
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                labelPlacement="outside"
                isInvalid={!!formState.errors.password}
                errorMessage={formState.errors.password?.join(', ')}
              />
            </div>
            <div className="flex justify-center px-6">
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
    </div>
  );
}
