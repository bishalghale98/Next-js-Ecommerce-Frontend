"use client";

import React from "react";
import { useSelector } from "react-redux";

function ProfilePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <section className="max-w-xl space-y-12">
        <div className="flex flex-col space-y-6">
          <header>
            <h3 className="mb-0.5 text-base font-medium">
              Profile information
            </h3>
            <p className="text-sm text-muted-foreground">
              Update your name and email address
            </p>
          </header>
          <form className="space-y-6">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none"
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Full name"
                required
                defaultValue={user?.name || ""}
                autoComplete="name"
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 w-full"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none"
              >
                Email address 
              </label>
              <input
                id="email"
                defaultValue={user?.email || ""}
                placeholder="Email address"
                type="email"
                required
                autoComplete="username"
                className="h-auto rounded-md border border-input bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 w-full"
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <header>
            <h3 className="mb-0.5 text-base font-medium">Delete account</h3>
            <p className="text-sm text-muted-foreground">
              Delete your account and all of its resources
            </p>
          </header>
          <div className="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
            <div className="space-y-0.5 text-red-600 dark:text-red-100">
              <p className="font-medium">Warning</p>
              <p className="text-sm">
                Please proceed with caution, this cannot be undone.
              </p>
            </div>
            <button
              type="button"
              className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Delete account
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfilePage;
