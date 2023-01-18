import { RegisterOptions, useForm, useFormContext } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  placeholder?: string;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  id,
  label,
  placeholder = "",
  validation,
  required,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[id];
  return (
    <div className='mt-8 flex flex-col justify-start relative'>
      <label className='text-left font-mono' htmlFor={id}>
        {label}
      </label>
      <input
        {...rest}
        className='mt-1 shadow appearance-none bg-transparent border rounded w-full py-3 px-3 text-gray-200 leading-tight'
        type='text'
        id={id}
        placeholder={placeholder}
        {...register(id, validation)}
      />
      {error && (
        <p className='absolute -bottom-6 text-left font-medium text-red-700'>
          {error.message as unknown as string}
        </p>
      )}
    </div>
  );
}
