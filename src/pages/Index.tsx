import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Star, Coffee, Users, MapPin, Phone, Mail, Clock, ChevronDown, Menu, X } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [expandedLocation, setExpandedLocation] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "about", "locations", "franchise", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { 
      name: "Beverages", 
      image: "https://b.zmtcdn.com/data/menus/698/21147698/60daa1cb5666c4b95ac00b16441431ab.jpg"
    },
    { 
      name: "Food", 
      image: "https://b.zmtcdn.com/data/menus/698/21147698/be94984d96a0fa5fc3cd6f133c4ef39b.jpg"
    }
  ];

  const locations = [
    {
      id: 1,
      title: "Savar Sudhi, Sindhu Bhavan Road",
      address: "LG College, Sindhu Bhavan Marg, New, behind SHILP AARON, Bodakdev, Ahmedabad, Gujarat 380054",
      phone: "+91 79 1234 5678",
      images: [
        "/lovable-uploads/691702a7-b2a1-4328-853c-d40389c20185.png",
        "/lovable-uploads/3ba188a5-7a77-4e84-8057-ce38aca8fcff.png",
        "/lovable-uploads/74b070d7-ef4e-48de-b8f3-823f1f0122da.png"
      ]
    },
    {
      id: 2,
      title: "Savar Sudhi, Bopal",
      address: "456 Bopal Cross Roads, Ahmedabad, Gujarat 380058",
      phone: "+91 79 8765 4321",
      images: [
        "/lovable-uploads/74b070d7-ef4e-48de-b8f3-823f1f0122da.png",
        "/lovable-uploads/691702a7-b2a1-4328-853c-d40389c20185.png",
        "/lovable-uploads/3ba188a5-7a77-4e84-8057-ce38aca8fcff.png"
      ]
    },
    {
      id: 3,
      title: "Savar Sudhi, Surat",
      address: "789 Ring Road, Surat, Gujarat 395007",
      phone: "+91 261 987 6543",
      images: [
        "/lovable-uploads/3ba188a5-7a77-4e84-8057-ce38aca8fcff.png",
        "/lovable-uploads/74b070d7-ef4e-48de-b8f3-823f1f0122da.png",
        "/lovable-uploads/691702a7-b2a1-4328-853c-d40389c20185.png"
      ]
    }
  ];

  const galleryImages = [
    "/lovable-uploads/691702a7-b2a1-4328-853c-d40389c20185.png",
    "/lovable-uploads/3ba188a5-7a77-4e84-8057-ce38aca8fcff.png",
    "/lovable-uploads/74b070d7-ef4e-48de-b8f3-823f1f0122da.png"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl lg:text-2xl font-bold gradient-text">Savar Sudhi</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["home", "menu", "about", "locations", "franchise", "gallery", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-primary text-sm lg:text-base ${
                    activeSection === section ? "text-primary neon-glow" : "text-muted-foreground"
                  }`}
                >
                  {section === "about" ? "About Us" : 
                   section === "locations" ? "Locate Us" :
                   section === "franchise" ? "Franchise" : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                {["home", "menu", "about", "locations", "franchise", "gallery", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 hover:text-primary text-left py-2 ${
                      activeSection === section ? "text-primary neon-glow" : "text-muted-foreground"
                    }`}
                  >
                    {section === "about" ? "About Us" : 
                     section === "locations" ? "Locate Us" :
                     section === "franchise" ? "Franchise" : section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(138, 43, 226, 0.3)), url('/lovable-uploads/4da1e0d5-476d-437b-97cd-c4ef50a335c6.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="relative z-10 text-center space-y-6 lg:space-y-8 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold gradient-text floating-animation">
            Savar Sudhi
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto font-semibold px-4">
            Where cosmic flavors meet neon dreams in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="neon-border bg-primary hover:bg-primary/80 text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto"
              onClick={() => scrollToSection("menu")}
            >
              Explore Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto"
              onClick={() => scrollToSection("locations")}
            >
              Visit Us
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 gradient-text">Our Cosmic Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 group overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-[3/4] overflow-hidden cursor-pointer">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 mobile-image-fix"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                    <div className="relative">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <CardContent className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-semibold group-hover:text-primary transition-colors text-center">
                    {item.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text text-center mb-6">About Savar Sudhi</h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              Savar Sudhi Café isn’t your typical café — we come alive when the city slows down. We’re Ahmedabad’s go-to late-night spot where stories are shared over steaming cups and flavorful bites, long after the world goes quiet.

              The name “Savar Sudhi” means "till morning lasts", and that’s exactly what we offer — a warm, welcoming place to relax, refuel, and recharge through the night. Whether you’re pulling an all-nighter, out with friends, traveling late, or just craving something comforting after hours — we’ve got you.

              Our menu blends desi cravings and café classics, all made fresh with soul. From midnight snacks to early morning pick-me-ups, every item is crafted with care to match the mood of the night.

              At Savar Sudhi Café, it’s not just about food — it’s about vibes, connections, and finding a home when most of the world is asleep.

              Drop by, and let’s make nights memorable — savar sudhi.
            </p>
          </div>
        </div>
      </section>

      {/* Locate Us Section */}
      <section id="locations" className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 gradient-text">Locate Us</h2>
          <div className="max-w-4xl mx-auto space-y-4 lg:space-y-6">
            {locations.map((location, index) => (
              <Collapsible
                key={location.id}
                open={expandedLocation === location.id}
                onOpenChange={() => setExpandedLocation(expandedLocation === location.id ? null : location.id)}
              >
                <Card className="bg-card border-border hover:neon-border transition-all duration-300">
                  <CollapsibleTrigger asChild>
                    <div className="cursor-pointer">
                      <CardContent className="p-4 lg:p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 lg:space-x-4 flex-1 min-w-0">
                            <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Coffee className="w-6 lg:w-8 h-6 lg:h-8 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-lg lg:text-xl font-semibold text-primary truncate">{location.title}</h3>
                              <p className="text-sm lg:text-base text-muted-foreground line-clamp-2">{location.address}</p>
                            </div>
                          </div>
                          <ChevronDown className={`w-5 lg:w-6 h-5 lg:h-6 text-primary transition-transform duration-300 flex-shrink-0 ml-2 ${
                            expandedLocation === location.id ? 'rotate-180' : ''
                          }`} />
                        </div>
                      </CardContent>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-4 lg:px-6 pb-4 lg:pb-6 pt-0">
                      <div className="border-t border-border pt-4 lg:pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                          <div>
                            <h4 className="font-semibold text-primary mb-3 lg:mb-4">Image Gallery</h4>
                            <div className="grid grid-cols-3 gap-2">
                              {location.images.map((image, imgIndex) => (
                                <Dialog key={imgIndex}>
                                  <DialogTrigger asChild>
                                    <div className="aspect-square overflow-hidden rounded-lg cursor-pointer group">
                                      <img 
                                        src={image} 
                                        alt={`${location.title} - Image ${imgIndex + 1}`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 mobile-image-fix"
                                      />
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                                    <div className="relative">
                                      <img 
                                        src={image}
                                        alt={`${location.title} - Image ${imgIndex + 1}`}
                                        className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                                      />
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-3 lg:space-y-4">
                            <div>
                              <h4 className="font-semibold text-primary mb-2">Contact Information</h4>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-sm">{location.phone}</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{location.address}</span>
                                </div>
                              </div>
                            </div>
                            <Button 
                              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
                              onClick={() => window.open(`tel:${location.phone}`, '_self')}
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              Call Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-12 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-4 lg:space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold gradient-text">Join the Savar Sudhi Family</h2>
            <p className="text-base lg:text-lg text-muted-foreground">
              Interested in owning a Savar Sudhi franchise? We'd love to hear from you!
            </p>
            <p className="text-sm lg:text-base text-muted-foreground">
              Become a part of our cosmic coffee revolution and bring the Savar Sudhi experience to your city.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us for Franchise
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 gradient-text">Neon Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
            {galleryImages.map((image, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <div className="aspect-square overflow-hidden rounded-xl group cursor-pointer">
                    <img 
                      src={image}
                      alt={`Savar Sudhi Gallery ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 mobile-image-fix"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                  <div className="relative">
                    <img 
                      src={image}
                      alt={`Savar Sudhi Gallery ${i + 1}`}
                      className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 gradient-text">Connect with the Cosmos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-primary">Visit Our Galaxy</h3>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm lg:text-base">LG College, Sindhu Bhavan Marg, New, behind SHILP AARON, Bodakdev, Ahmedabad, Gujarat 380054</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm lg:text-base">+1 (555) 123-CAFE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm lg:text-base">hello@savarsudhi.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm lg:text-base">Daily: 7:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <footer className="py-6 lg:py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h3 className="text-lg lg:text-xl font-bold gradient-text mb-2">Savar Sudhi</h3>
          <p className="text-sm lg:text-base text-muted-foreground">© 2024 Savar Sudhi Cafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
