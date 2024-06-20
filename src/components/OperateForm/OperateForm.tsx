import { Button } from '../../components/Button/Button';
import { Currency } from '../../components/Currency/Currency';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { OPERATION_TYPE } from '../../utils/enums';
import { useOperationsStore } from '../../stores/use-operations-store/use-operations-store';
import * as z from 'zod';
import classNames from 'classnames';

const FIELDS_LIMIT = 4;

export const OperateForm = () => {
  const { operate } = useOperationsStore();

  const operationSchema = z.object({
    type: z.enum([OPERATION_TYPE.CALL, OPERATION_TYPE.PUT]),
    strike: z
      .string()
      .min(1, 'Strike is required')
      .transform((value) => value && value?.replace(/[^0-9.]/g, '')),
    premium: z
      .string()
      .min(1, 'Premium is required')
      .transform((value) => value && value?.replace(/[^0-9.]/g, '')),
    quantity: z.preprocess((value) => Number(value), z.number()),
    time: z.date(),
  });

  const schema = z.object({
    operations: z.array(operationSchema),
  });

  const INITIAL_VALUES = {
    operations: [
      {
        type: OPERATION_TYPE.CALL,
        strike: '',
        premium: '',
        quantity: 1,
        time: new Date(),
      },
    ],
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: INITIAL_VALUES,
  });

  const { fields, append, remove, replace } = useFieldArray({
    control: form.control,
    name: 'operations',
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const operations = values.operations.map((operation) => ({
      ...operation,
      strike: Number(operation.strike),
      premium: Number(operation.premium),
    }));

    operate(operations);
  };

  return (
    <Form {...form}>
      <form
        id="operation"
        className="mt-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-white mb-5 font-bold text-xl">Operations</h2>
        <div className="space-y-2">
          {fields.map((_, index) => (
            <div className="flex space-x-2 items-center" key={_.id}>
              <FormField
                control={form.control}
                name={`operations.${index}.type`}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        {field.value === OPERATION_TYPE.CALL ? (
                          <Button
                            type="button"
                            className="rounded-full w-16"
                            onClick={() => field.onChange(OPERATION_TYPE.PUT)}
                          >
                            CALL
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            variant="danger"
                            className="rounded-full w-16"
                            onClick={() => field.onChange(OPERATION_TYPE.CALL)}
                          >
                            PUT
                          </Button>
                        )}
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name={`operations.${index}.strike`}
                render={({ field, fieldState }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Currency
                          autoFocus
                          placeholder="Strike"
                          className={classNames('w-28', {
                            'border-red-500': fieldState.error,
                          })}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name={`operations.${index}.premium`}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Currency
                        placeholder="Premium"
                        className={classNames('w-28', {
                          'border-red-500': fieldState.error,
                        })}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`operations.${index}.quantity`}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        placeholder="Quantity"
                        className={classNames('w-28', {
                          'border-red-500': fieldState.error,
                        })}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 text-red-600 cursor-pointer hover:text-red-400"
                onClick={() => remove(index)}
              >
                <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <div className="space-x-2">
            <Button
              variant="outline"
              type="button"
              disabled={fields.length === FIELDS_LIMIT}
              onClick={() =>
                append([
                  {
                    type: OPERATION_TYPE.CALL,
                    strike: '',
                    premium: '',
                    quantity: 1,
                    time: new Date(),
                  },
                ])
              }
            >
              Add Operation
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                replace([
                  {
                    type: OPERATION_TYPE.CALL,
                    strike: '',
                    premium: '',
                    quantity: 1,
                    time: new Date(),
                  },
                ])
              }
            >
              Clear
            </Button>
          </div>
          <Button
            type="submit"
            size="lg"
            className="rounded-full"
            disabled={!Boolean(fields.length)}
          >
            Analyze
          </Button>
        </div>
      </form>
    </Form>
  );
};
