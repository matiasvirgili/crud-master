import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { Match } from "../../utils/decorator.helper";

export class LoginDto {
  @IsEmail(undefined, { message: "Ingrese un email válido." })
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Ingrese la contraseña." })
  @Length(6, 30, {
    message: "La contraseña debe tener entre 6 y 30 caracteres",
  })
  password: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: "Ingrese el nombre." })
  @Length(2, 20, {
    message: "El nombre debe tener entre 2 y 20 caracteres",
  })
  name: string;

  @IsEmail(undefined, { message: "Ingrese un email válido." })
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Ingrese la contraseña." })
  @Length(6, 30, {
    message: "La contraseña debe tener entre 6 y 30 caracteres",
  })
  password: string;

  @IsString()
  @IsNotEmpty({ message: "Ingrese la contraseña." })
  @Length(6, 30, {
    message: "La contraseña debe tener entre 6 y 30 caracteres",
  })
  @Match("password", { message: "Las contraseñas no coinciden" })
  repeatPassword: string;
}
