import { object, string } from "zod"
 
export const signInSchema = object({
  email: string({ required_error: "El Email es requerido" })
    .min(1, "El Email es requerido")
    .email("Email invalido"),
  password: string({ required_error: "la Contraseña es requerida" })
    .min(1, "la Contraseña es requerida")
    .min(8, "El Password debe tener al menos 8 caracteres")
    .max(32, "el Password debe tener menos de 32 caracteres"),
})