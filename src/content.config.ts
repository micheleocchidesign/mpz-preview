import { defineCollection, z } from 'astro:content';
// In Astro 6 è obbligatorio importare il loader per i file locali
import { glob } from 'astro/loaders'; 

// Definiamo la collezione del Blog adattata ad Astro 6
const blogCollection = defineCollection({
  // Il loader sostituisce il vecchio "type: 'content'" e dice ad Astro dove cercare i file
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    metaTitle: z.string().optional(),                                      // Titolo dell'articolo
    description: z.string(),                                // Breve riassunto per l'anteprima
    pubDate: z.coerce.date(),                               // Data di pubblicazione
    heroImage: image(),                                    // Immagine dell'articolo    
    heroImageAlt: z.string().optional(),                    
    category: z.enum(['Naturopatia', 'Riflessologia', 'Benessere Femminile', 'Ispirazione']), // Le tue categorie salvate!
    draft: z.boolean().default(false),                      // Stato di bozza
  }),
});

// Esportiamo la collezione con il nome 'blog'
export const collections = {
  'blog': blogCollection,
};