import { USER_ROLE } from '@/enums/user.enum';

export interface InfoUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  fullName: string;
  role: USER_ROLE;
  phoneNumber: string;
  companyId?: number;
  password: string;
  locationId?: number;
  location?: Location;
  focusLocationId?: number;
  focusLocation?: Location;
  isApproved?: boolean;
  brrCode?: string;
  customerId?: number;
}

export interface InfoUserWidthCredential extends InfoUser {
  accessToken: string;
  refreshToken: string;
  visitedAsGuest?: boolean;
  customerDeclarationLink?: string;
}
