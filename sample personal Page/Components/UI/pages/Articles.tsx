import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allArticles } from "@/data/articles";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const categories = ["همه", "یادگیری ماشین", "رباتیک", "پردازش زبان طبیعی", "پزشکی", "اخلاق فناوری"];

  const filteredPosts = allArticles.filter(post => {
    const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    const matchesCategory = selectedCategory === "همه" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">همه مقالات</h1>
          <p className="text-muted-foreground">مجموعه‌ای از بهترین مقالات در زمینه هوش مصنوعی</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="جستجو در مقالات..."
              className="w-full pl-4 pr-10 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link to={`/article/${post.id}`} key={post.id}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  
                  <p className="text-sm text-muted-foreground mt-4">{post.readTime}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            مقاله‌ای یافت نشد
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
