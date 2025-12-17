import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    { name: "دکتر علی محمدی", role: "بنیان‌گذار و سردبیر", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
    { name: "مهندس سارا احمدی", role: "متخصص یادگیری ماشین", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    { name: "دکتر رضا کریمی", role: "پژوهشگر AI", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">درباره هوش مصنوعی نو</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ما یک تیم از متخصصان و علاقه‌مندان به هوش مصنوعی هستیم که هدفمان ارائه محتوای آموزشی با کیفیت به زبان فارسی است
          </p>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ماموریت ما</h3>
              <p className="text-muted-foreground">دسترسی آسان به دانش هوش مصنوعی برای همه فارسی‌زبانان</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">جامعه ما</h3>
              <p className="text-muted-foreground">بیش از ۱۰,۰۰۰ عضو فعال در جامعه آنلاین ما</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">تعهد ما</h3>
              <p className="text-muted-foreground">ارائه محتوای دقیق، به‌روز و کاربردی</p>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">تیم ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center p-6">
                <CardContent className="pt-6">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-muted/30 rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4">با ما در ارتباط باشید</h2>
          <p className="text-muted-foreground mb-6">برای همکاری یا پیشنهادات با ما تماس بگیرید</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              ایمیل
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-4 h-4" />
              گیت‌هاب
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Linkedin className="w-4 h-4" />
              لینکدین
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
