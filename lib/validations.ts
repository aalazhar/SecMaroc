import { z } from "zod";

export const devisSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom est trop long"),

  email: z
    .string()
    .trim()
    .min(1, "L'email est requis")
    .email("Adresse email invalide"),

  phone: z
    .string()
    .trim()
    .min(8, "Numéro de téléphone invalide")
    .max(20, "Numéro de téléphone invalide")
    .regex(/^[0-9+\s()-]+$/, "Numéro de téléphone invalide"),

  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message est trop long (1000 caractères max)"),
});

export type DevisFormData = z.infer<typeof devisSchema>;
export type DevisFormErrors = Partial<Record<keyof DevisFormData, string>>;