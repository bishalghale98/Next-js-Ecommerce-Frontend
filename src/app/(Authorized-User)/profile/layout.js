"use client";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { allowedUserRoles } from "@/lib/helpers/auth";
import { toast } from "react-toastify";

function ProfileLayout({ children }) {
  const roles = useSelector((state) => state.auth.user?.roles); // adjust based on your slice
  const router = useRouter();
  const [checkingAccess, setCheckingAccess] = useState(true);

  useEffect(() => {
    if (!allowedUserRoles(roles)) {
      toast.warning("You are not authorized to access this page.", {
        onClose: () => router.back(),
        autoClose: 750,
      });
    } else {
      setCheckingAccess(false);
    }
  }, [roles, router]);

  if (checkingAccess) return null;

  return (
    <main
      className="relative flex min-h-[svh] flex-col bg-background mt-5
    max-w-4xl mx-auto
    peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))]
    lg:peer-data-[variant=inset]:m-2
    lg:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2
    lg:peer-data-[variant=inset]:ml-0
    lg:peer-data-[variant=inset]:rounded-xl
    lg:peer-data-[variant=inset]:shadow
    items-center
  "
    >
      <header
        className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/70 px-6
      transition-[width,height] ease-linear
      group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 lg:px-4
      w-full
    "
      >
        <div className="flex items-center gap-2">
          <BackButton />
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
              <li className="inline-flex items-center gap-1.5">
                <span
                  role="link"
                  aria-disabled="true"
                  aria-current="page"
                  className="font-normal text-foreground"
                >
                  Profile settings
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <div className="px-4 py-6 w-full">
        <div className="mb-8 space-y-0.5 text-center">
          <h2 className="text-xl font-semibold tracking-tight">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Manage your profile and account settings
          </p>
        </div>

        <div
          className="relative shrink-0 bg-border h-px w-full my-6"
          role="separator"
        />

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 w-full justify-center">
          <aside className="w-full max-w-xl lg:w-48">
            <nav className="flex flex-col space-y-1">
              {[
                { href: "/settings/profile", label: "Profile", active: true },
                { href: "/settings/password", label: "Password" },
                { href: "/settings/appearance", label: "Appearance" },
              ].map(({ href, label, active }) => (
                <a
                  key={href}
                  href={href}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-9 px-4 w-full justify-start ${
                    active
                      ? "bg-muted text-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <div
            className="relative shrink-0 bg-border h-px w-full my-6 lg:hidden"
            role="separator"
          />

          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </main>
  );
}

export default ProfileLayout;
