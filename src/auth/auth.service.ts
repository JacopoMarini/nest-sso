import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Assicurati di utilizzare il percorso corretto

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (user && user.password === password) {
      // Le credenziali sono valide, restituisci l'utente
      return user;
    }

    // Credenziali non valide, restituisci null
    return null;
  }

  async login(user: any): Promise<{ access_token: string }> {
    const payload = { username: user.username, sub: user._id }; // Assicurati di utilizzare il corretto identificatore dell'utente (_id)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
