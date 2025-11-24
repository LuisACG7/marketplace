import { z } from "zod";

export const esquemaPublicacion = z.object({
  titulo: z
    .string()
    .min(3, "El título es muy corto.")
    .max(140, "Máximo 140 caracteres."),
  descripcion: z.string().min(10, "La descripción es muy corta."),
  precio: z.coerce.number().min(0, "El precio no puede ser negativo."),
  categoriaId: z.coerce
    .number()
    .int()
    .positive("Selecciona una categoría válida."),
  estadoItem: z.enum(["nuevo", "como_nuevo", "usado", "para_repuesto"]),
});
export type DatosPublicacion = z.infer<typeof esquemaPublicacion>;
