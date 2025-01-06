import { NextPage } from 'next';
import Link from 'next/link';

import { signInWithGoogle } from '@/lib/firebase/auth';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col bg-gray-800 py-8 text-white">
      <h1 className="text-4xl font-bold text-center">
        Firebase Authentication with Google & Apple
      </h1>
      <p className="text-gray-400 text-center my-4">
        Sign in using Google or Apple below.
      </p>

      <div className="flex flex-col items-center gap-4 mt-8">
        <button
          onClick={signInWithGoogle}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Sign in with Google
        </button>
        {/* <button
          onClick={handleAppleSignIn}
          className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Sign in with Apple
        </button> */}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center">
          Additional Resources
        </h2>
        <p className="text-center mt-2">
          If you get stuck, check{' '}
          <Link
            className="underline text-blue-400"
            href="https://firebase.google.com/docs"
          >
            Firebase Docs
          </Link>{' '}
          or{' '}
          <Link className="underline text-blue-400" href="https://trpc.io">
            tRPC Docs
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
