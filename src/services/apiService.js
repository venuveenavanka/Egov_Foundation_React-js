import newsData from '../data/newsData.json';

export const fetchNews = () => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(newsData.news);
    }, 800);
  });
};
