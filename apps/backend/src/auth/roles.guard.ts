import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      Roles,
      context.getHandler()
    );
    if (!requiredRoles) {
      return true;
    }
    const request = context
      .switchToHttp()
      .getRequest<{ user: { roles: string[] } }>();
    const user = request.user; // Assuming user roles are attached to the request
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
