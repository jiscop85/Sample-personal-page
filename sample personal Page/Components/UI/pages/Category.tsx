import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Zap, Eye, Bot, Heart, Car, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Categories = () => {
  const categories = [
    { name: "یادگیری ماشین", slug: "ml", count: 24, icon: Brain, description: "الگوریتم‌ها و مدل‌های یادگیری ماشین" },
    { name: "رباتیک", slug: "robotics", count: 18, icon: Bot, description: "رباتیک و سیستم‌های خودکار" },
    { name: "پردازش زبان طبیعی", slug: "nlp", count: 15, icon: Zap, description: "درک و تولید زبان توسط ماشین" },
    { name: "بینایی کامپیوتر", slug: "computer-vision", count: 12, icon: Eye, description: "پردازش و تحلیل تصاویر" },
    { name: "هوش مصنوعی پزشکی", slug: "medical-ai", count: 10, icon: Heart, description: "کاربردهای AI در حوزه سلامت" },
    { name: "خودروهای خودران", slug: "autonomous-vehicles", count: 8, icon: Car, description: "فناوری رانندگی خودکار" },
    { name: "شبکه‌های عصبی", slug: "neural-networks", count: 20, icon: Cpu, description: "معماری و آموزش شبکه‌های عصبی" },
    { name: "هوش مصنوعی مولد", slug: "generative-ai", count: 14, icon: Sparkles, description: "تولید محتوا با AI" }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">دسته‌بندی‌های مقالات</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مقالات را بر اساس موضوع مورد علاقه خود پیدا کنید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category.slug}`} key={category.slug}>
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <category.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                    <Badge variant="secondary">{category.count} مقاله</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
