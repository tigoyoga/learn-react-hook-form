import React from "react";
import Head from "next/head";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Link from "next/link";
import Input from "../components/Input";

type Inputs = {
  firstName: string;
  lastName: string;
};

export default function IsValid() {
  // when we provide 'isValid', we must declare the mode to 'onChange'

  const methods = useForm<Inputs>({ mode: "onChange" });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [data, setData] = React.useState<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => setData(data);

  return (
    <div>
      <Head>
        <title>isValid</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-gray-900 w-screen min-h-screen pt-20 overflow-hidden'>
        <div className='w-11/12 lg:w-1/2 xl:w-1/3 mx-auto text-center'>
          <h1 className='text-5xl font-bold font-mono'>isValid Form</h1>
          <div className='mt-12 rounded-lg border h-fit p-8'>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  id='firstName'
                  label='First Name'
                  placeholder='Insert Your First Name'
                  validation={{
                    required: {
                      value: true,
                      message: "Your Name must be filled",
                    },
                    minLength: {
                      value: 10,
                      message: "You exceed the min length !",
                    },
                    maxLength: {
                      value: 20,
                      message: "You exceed the max length !",
                    },
                  }}
                />
                <Input
                  id='lastName'
                  label='Last Name'
                  placeholder='Insert Your Last Name'
                  validation={{
                    required: {
                      value: true,
                      message: "Your Name must be filled",
                    },
                    minLength: {
                      value: 10,
                      message: "You exceed the min length !",
                    },
                    maxLength: {
                      value: 20,
                      message: "You exceed the max length !",
                    },
                  }}
                />

                <button
                  disabled={!isValid}
                  className={`w-fit mx-auto rounded-md border border-white py-2 px-4 mt-12  ${
                    isValid
                      ? "cursor-pointer hover:bg-white hover:text-gray-700"
                      : "cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              </form>
            </FormProvider>
          </div>
          <div className='mt-2 full mx-auto h-fit'>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <Link
            href={"/"}
            className='nav-back w-fit py-3 px-8 font-mono text-xl'
          >
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}
