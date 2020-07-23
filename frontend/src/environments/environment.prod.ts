export const environment = {
  production: true,
  getArticles: {
    domain: 'http://localhost:3789',
    path: '/api/v1',
    base_path: '/articles'
  },
  deleteArticle: {
    domain: 'http://localhost:3789',
    path: '/api/v1',
    base_path: '/article/'
  }
};
