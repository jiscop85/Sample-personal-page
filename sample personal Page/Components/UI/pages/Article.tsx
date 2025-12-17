import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticlePage from "@/components/ArticlePage";
import { allArticles } from "@/data/articles";

const Article = () => {
  const { id } = useParams();
  const article = allArticles.find(a => a.id === Number(id)) || allArticles[0];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <ArticlePage article={article} />
      <Footer />
    </div>
  );
};

export default Article;
