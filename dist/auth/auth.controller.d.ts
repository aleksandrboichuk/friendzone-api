import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    register(dto: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
