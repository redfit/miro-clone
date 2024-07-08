"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center gap-x-4 p-5 bg-green-500">
        <div className="hidden lg:flex lg:flex-1 bg-yellow-500">Search</div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
};

export default NavBar;
