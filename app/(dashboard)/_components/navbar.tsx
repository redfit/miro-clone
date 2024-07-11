"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  useOrganization,
  UserButton,
} from "@clerk/nextjs";
import SearchInput from "@/app/(dashboard)/_components/sidebar/search-input";
import { OrganizationSwitcher } from "@clerk/clerk-react";
import InviteButton from "@/app/(dashboard)/_components/invite-button";

const NavBar = () => {
  const { organization } = useOrganization();

  return (
    <>
      <div className="flex items-center gap-x-4 p-5">
        <div className="hidden lg:flex lg:flex-1">
          <SearchInput />
        </div>
        <div className="block lg:hidden flex-1">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                },
                organizationSwitcherTrigger: {
                  padding: "6px",
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid #E5E7EB",
                },
              },
            }}
          />
        </div>
        {organization && <InviteButton />}

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
