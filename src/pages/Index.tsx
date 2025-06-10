
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Star, Coffee, Users, MapPin, Phone, Mail, Clock } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { name: "Cosmic Latte", price: "$4.50", description: "Our signature espresso blend with steamed milk", category: "Coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop" },
    { name: "Nebula Frappuccino", price: "$5.75", description: "Iced coffee with purple galaxy swirls", category: "Cold Drinks", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop" },
    { name: "Stardust Croissant", price: "$3.25", description: "Buttery croissant with a hint of lavender", category: "Pastries", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=300&fit=crop" },
    { name: "Galaxy Cake", price: "$6.50", description: "Chocolate cake with purple ombre frosting", category: "Desserts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
    { name: "Purple Rain Tea", price: "$3.75", description: "Herbal tea blend with butterfly pea flowers", category: "Tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop" },
    { name: "Midnight Mocha", price: "$5.25", description: "Dark chocolate mocha with whipped cream", category: "Coffee", image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop" }
  ];

  const reviews = [
    { name: "Sarah Kim", rating: 5, text: "The ambiance is absolutely magical! The neon purple lighting creates such a cozy yet modern atmosphere." },
    { name: "Alex Johnson", rating: 5, text: "Best coffee in town! The Cosmic Latte is my new favorite. The staff is incredibly friendly too." },
    { name: "Maya Patel", rating: 5, text: "Perfect spot for working or catching up with friends. The aesthetic is Instagram-worthy and the food is delicious!" },
    { name: "David Chen", rating: 4, text: "Love the futuristic vibe. Great place to relax and enjoy quality coffee. Will definitely be back!" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">Savar Sudhi</h1>
            <div className="hidden md:flex space-x-8">
              {["home", "menu", "about", "gallery", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-primary ${
                    activeSection === section ? "text-primary neon-glow" : "text-muted-foreground"
                  }`}
                >
                  {section === "about" ? "About Us" : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(138, 43, 226, 0.3)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8rwYzfa7cwmjqp0t3tK1D8jFyovdo7BPGQ&s')`
          }}
        ></div>
        <div className="relative z-10 text-center space-y-8 px-4">
          <h1 className="text-6xl md:text-8xl font-bold gradient-text floating-animation">
            Savar Sudhi
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-semibold">
            Where cosmic flavors meet neon dreams in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="neon-border bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4"
              onClick={() => scrollToSection("menu")}
            >
              Explore Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-4"
              onClick={() => scrollToSection("contact")}
            >
              Visit Us
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Cosmic Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {item.price}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  <Badge variant="outline" className="border-primary/50 text-primary/80">
                    {item.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold gradient-text">About Savar Sudhi</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born from a passion for exceptional coffee and futuristic design, Savar Sudhi represents 
                the perfect fusion of traditional brewing techniques and modern aesthetic sensibilities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our neon-lit sanctuary offers more than just coffee – it's a portal to a world where 
                every sip transports you to a cosmic realm of flavors. From carefully sourced beans to 
                our signature purple-hued beverages, every detail is crafted to create an unforgettable experience.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <Coffee className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Premium Coffee</h4>
                  <p className="text-sm text-muted-foreground">Ethically sourced beans</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Community Space</h4>
                  <p className="text-sm text-muted-foreground">Where minds connect</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Neon Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Coffee className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">What Our Cosmic Visitors Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">"{review.text}"</p>
                  <p className="font-semibold text-primary">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Connect with the Cosmos</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Visit Our Galaxy</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>123 Neon Street, Cosmic District, City 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+1 (555) 123-CAFE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>hello@savarsudhi.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Daily: 7:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="bg-muted border-border" />
                    <Input placeholder="Your Email" type="email" className="bg-muted border-border" />
                  </div>
                  <Input placeholder="Subject" className="bg-muted border-border" />
                  <Textarea placeholder="Your Message" rows={4} className="bg-muted border-border" />
                  <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold gradient-text mb-2">Savar Sudhi</h3>
          <p className="text-muted-foreground">© 2024 Savar Sudhi Cafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
