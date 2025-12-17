import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, User, ArrowUpRight, Cpu, Brain, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allArticles } from "@/data/articles";

const Index = () => {
  const featuredPosts = allArticles.slice(0, 3);

  const categories = [
    { name: "یادگیری ماشین", count: 24, icon: Brain },
    { name: "رباتیک", count: 18, icon: Cpu },
    { name: "پردازش زبان طبیعی", count: 15, icon: Zap },
    { name: "بینایی کامپیوتر", count: 12, icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              آخرین اخبار و مقالات هوش مصنوعی
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              دنیای شگفت‌انگیز
              <br />
              هوش مصنوعی
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              به روزترین مقالات، آموزش‌ها و تحلیل‌های عمیق در زمینه هوش مصنوعی، یادگیری ماشین و فناوری‌های نوین
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/articles">
                  شروع مطالعه
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link to="/about">
                  درباره پروژه
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">دسته‌بندی‌های محبوب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link to="/categories" key={category.name}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <category.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      <Badge variant="secondary">{category.count} مقاله</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
