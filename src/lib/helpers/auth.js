const { ADMIN, MERCHANT, USER } = require("@/constants/userRoles");

export function allowedAdminRoles(roles = []) {
  const allowedRoles = [ADMIN, MERCHANT];
  return roles.some((role) => allowedRoles.includes(role));
}

export function allowedUserRoles(roles = []) {
  const allowedRoles = [ADMIN, MERCHANT, USER];
  return roles.some((role) => allowedRoles.includes(role));
}
