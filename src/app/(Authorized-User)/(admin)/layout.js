"use client";

import React, { useEffect, useState } from "react";

import { LuPanelLeft, LuPanelLeftClose } from "react-icons/lu";

import { allowedAdminRoles } from "@/lib/helpers/auth";
import { useSelector } from "react-redux";
import {  useRouter } from "next/navigation";
import adminDashboardLinks from "@/constants/navLinks/adminDashboard";
import { toast } from "react-toastify";
import AdminSidebar from "@/components/admin/Sidebar";

function DashboardLayout({ children }) {
  const roles = useSelector((state) => state.auth.user?.roles || []);
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const [checkingAccess, setCheckingAccess] = useState(true);

  useEffect(() => {
    if (!allowedAdminRoles(roles)) {
      toast.warning("You are not authorized to access this page.", {
        onClose: () => router.back(),
        autoClose: 750,
      });
    } else {
      setCheckingAccess(false);
    }
    console.log("hello");
  }, [roles]);

  if (checkingAccess) return null;

  return (
    <div className="flex h-screen mx-auto bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
     <AdminSidebar adminDashboardLinks={adminDashboardLinks} openMenu={openMenu}/>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="flex items-center justify-between h-16 bg-gray-100 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="flex items-center px-4">
            <button
              className="text-gray-500 dark:text-gray-400 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200 lg:hidden"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? (
                <LuPanelLeftClose className="h-6 w-6" />
              ) : (
                <LuPanelLeft className="h-6 w-6" />
              )}
            </button>
            <input
              className="mx-4 w-full border rounded-md px-4 py-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="p-4" onClick={() => setOpenMenu(false)}>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
