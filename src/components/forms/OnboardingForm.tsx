import { Fragment } from 'react/jsx-runtime';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAriesStore } from '../../stores/use-aries-store/use-aries-store';

export const OnboardingForm = () => {
  const { register } = useAriesStore();
  const schema = z.object({
    name: z.string().min(1, {
      message: 'Your name is required',
    }),
  });

  const INITIAL_VALUES = {
    name: '',
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: INITIAL_VALUES,
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    register(values.name);
  };

  return (
    <Fragment>
      <div className="mt-5 space-y-5">
        <Form {...form}>
          <form id="onboarding" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your name?</FormLabel>
                  <FormControl>
                    <Input placeholder="Type your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <div className="mt-10 flex items-center gap-x-6">
        <Button
          size="lg"
          className="rounded-full"
          type="submit"
          form="onboarding"
          disabled={Boolean(!form.watch('name').trim())}
        >
          Let's Start
        </Button>
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </Fragment>
  );
};
