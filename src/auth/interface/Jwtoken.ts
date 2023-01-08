export interface JwtToken {
  sub: string;
  username: string;
  role: 'Employee' | 'Admin' | 'ProjectManager';
}
