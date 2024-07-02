import { USER_ROLE } from '@/enums/user.enum';

export interface CreateUser {
  email: string;
  fullName: string;
  role?: USER_ROLE;
  phoneNumber: string;
  password?: string;
  companyId?: number;
}
