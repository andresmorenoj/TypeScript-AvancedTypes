import { TUser, ROLES } from './enums';

const currentUser: TUser = {
  username: 'dummyUser',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) return true;
  return false;
};

const isAdmin = checkAdminRole();
console.log(isAdmin);

/* ----------------- */

export const checkRoleV1 = (role1: string, role2: string) => {
  if (currentUser.role === role1) return true;
  if (currentUser.role === role2) return true;

  return false;
};

const isValidRoleV1 = checkRoleV1(ROLES.ADMIN, ROLES.SELLER);
console.log(isValidRoleV1);

/* ----------------- */

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) return true;

  return false;
};

const isValidRoleV2 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log(isValidRoleV2);

/* ----------------- */

/**
 * Rest params
 */

export const checkRoleV3 = (...roles: ROLES[]) => {
  if (roles.includes(currentUser.role)) return true;
  return false;
};

const isValidRoleV3 = checkRoleV3(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER);
console.log(isValidRoleV3);
