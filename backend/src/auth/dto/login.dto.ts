import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Veuillez entrer un email valide.' })
  @IsNotEmpty({ message: "L'email est requis." })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Le mot de passe est requis.' })
  @MinLength(1)
  password!: string;
}
