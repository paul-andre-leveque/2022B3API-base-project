import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { Role } from "../interface/enum.role";
import { JwtToken} from "../interface/Jwtoken";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request: Request & { user: JwtToken } = context
      .switchToHttp()
      .getRequest();

    const hasPermission = requiredRoles.some((role) =>
      request.user.role?.includes(role.toString()),
    );

    if (!hasPermission) throw new UnauthorizedException();
    return true;
  }
}
