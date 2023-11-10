import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div class='absolute left-0 right-0 top-0 bottom-0 z-[230] overflow-hidden min-h-screen flex flex-grow items-center justify-center bg-[#0E7490] px-8'>
        <div class='rounded-lg bg-white p-8 text-center shadow-xl'>
          <h1 class='mb-4 text-4xl font-bold'>404</h1>
          <p class='text-gray-600'>
            Oops! The page you are looking for could not be found.
          </p>
          <a
            href='/'
            class='mt-4 inline-block rounded bg-orange-400 px-4 py-2 font-semibold text-white hover:bg-orange-500'
          >
            {" "}
            Return Back To Home{" "}
          </a>
        </div>
      </div>
    </>
  );
}
