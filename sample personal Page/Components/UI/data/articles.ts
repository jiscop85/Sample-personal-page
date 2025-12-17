export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const allArticles: Article[] = [
  {
    id: 1,
    title: "آینده هوش مصنوعی در پزشکی",
    excerpt: "چگونه AI قرار است انقلابی در تشخیص و درمان بیماری‌ها ایجاد کند و چه چالش‌هایی در پیش است.",
    author: "دکتر علی محمدی",
    date: "۱۰ آذر ۱۴۰۲",
    readTime: "۸ دقیقه",
    category: "پزشکی",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["هوش مصنوعی", "پزشکی", "تشخیص"]
  },
  {
    id: 2,
    title: "یادگیری عمیق و شبکه‌های عصبی",
    excerpt: "راهنمای کاملی برای درک مفاهیم پایه یادگیری عمیق و نحوه کارکرد شبکه‌های عصبی مصنوعی.",
    author: "مهندس سارا احمدی",
    date: "۵ آذر ۱۴۰۲",
    readTime: "۱۲ دقیقه",
    category: "یادگیری ماشین",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["یادگیری عمیق", "شبکه عصبی", "الگوریتم"]
  },
  {
    id: 3,
    title: "اخلاق در هوش مصنوعی",
    excerpt: "بررسی چالش‌های اخلاقی و اجتماعی که با پیشرفت فناوری‌های AI به وجود آمده‌اند.",
    author: "دکتر رضا کریمی",
    date: "۱ آذر ۱۴۰۲",
    readTime: "۶ دقیقه",
    category: "اخلاق فناوری",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["اخلاق", "AI", "جامعه"]
  },
  {
    id: 4,
    title: "مقدمه‌ای بر یادگیری تقویتی",
    excerpt: "آشنایی با مفاهیم پایه یادگیری تقویتی و کاربردهای آن در بازی‌ها و رباتیک.",
    author: "مهندس محمد رضایی",
    date: "۲۸ آبان ۱۴۰۲",
    readTime: "۵ دقیقه",
    category: "یادگیری ماشین",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["یادگیری تقویتی", "بازی", "الگوریتم"]
  },
  {
    id: 5,
    title: "کاربردهای AI در صنعت خودرو",
    excerpt: "نقش هوش مصنوعی در توسعه خودروهای خودران و سیستم‌های کمک‌راننده.",
    author: "مهندس زهرا علوی",
    date: "۲۵ آبان ۱۴۰۲",
    readTime: "۷ دقیقه",
    category: "رباتیک",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["خودرو", "خودران", "صنعت"]
  },
  {
    id: 6,
    title: "پردازش زبان طبیعی با GPT",
    excerpt: "بررسی معماری و کاربردهای مدل‌های زبانی بزرگ مانند GPT و BERT.",
    author: "دکتر امین حسینی",
    date: "۲۰ آبان ۱۴۰۲",
    readTime: "۱۰ دقیقه",
    category: "پردازش زبان طبیعی",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["GPT", "NLP", "زبان"]
  }
];

export const searchArticles = (query: string): Article[] => {
  if (!query.trim()) return [];
  const normalizedQuery = query.toLowerCase();
  return allArticles.filter(
    article =>
      article.title.toLowerCase().includes(normalizedQuery) ||
      article.excerpt.toLowerCase().includes(normalizedQuery) ||
      article.category.toLowerCase().includes(normalizedQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
  );
};
