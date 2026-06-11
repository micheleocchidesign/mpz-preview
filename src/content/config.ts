import { defineCollection, z } from 'astro:content';

// Definiamo la collezione del Blog
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),                                      // Titolo dell'articolo
    description: z.string(),                                // Breve riassunto per l'anteprima
    pubDate: z.coerce.date(),                               // Data di pubblicazione
    heroImage: image(),                                     // Immagine di copertina (ottimizzata da Astro)
    category: z.enum(['Naturopatia', 'Riflessologia', 'Benessere Femminile', 'Inspirazione']), // Le tue categorie
    draft: z.boolean().default(false),                      // Stato di bozza
  }),
});

// Esportiamo la collezione con il nome 'blog'
export const collections = {
  'blog': blogCollection,
};