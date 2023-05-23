import ittyOpenAPI from './vendor/@cloudflare/itty-router-openapi@0.1.3.js';
import { GetSearch } from './search.js';

export const router = ittyOpenAPI.OpenAPIRouter({
  schema: {
    info: {
      title: 'GitHub Repositories Search API',
      description:
        'A plugin that allows the user to search for GitHub repositories using ChatGPT',
      version: 'v0.0.1'
    }
  },
  docs_url: '/',
  aiPlugin: {
    name_for_human: 'GitHub Repositories Search',
    name_for_model: 'github_repositories_search',
    description_for_human: 'GitHub Repositories Search plugin for ChatGPT.',
    description_for_model:
      'GitHub Repositories Search plugin for ChatGPT. You can search for GitHub repositories using this plugin.',
    contact_email: 'monzerfoda@tech-mfoda.com',
    legal_info_url: 'http://www.tech-mfoda.com/legal',
    logo_url: 'https://www.tech-mfoda.com/wp-content/uploads/2023/05/techmfoda.png'
  }
});

router.get('/search', GetSearch);

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default {
  fetch: router.handle
};
