import { HiCube } from "react-icons/hi2";
import { FaUsersGear } from "react-icons/fa6";

const adminDashboardLinks = [
  {
    route: "/dashboard",
    label: "Dashboard",
    icon: <HiCube className="h-6 w-6 mr-2 text-gray-100" />,
  },
  {
    route: "/user-management",
    label: "User Management",
    icon: <FaUsersGear className="h-6 w-6 mr-2 text-gray-100" />,
  },
];

export default adminDashboardLinks;
