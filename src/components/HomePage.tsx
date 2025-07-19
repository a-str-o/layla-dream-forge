import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Lightbulb, ArrowRight, Code, Palette, Rocket, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleAuthNavigation = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-gradient">42Layla</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
                Features
              </a>
              <a href="#community" className="text-muted-foreground hover:text-foreground transition-smooth">
                Community
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
                About
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleAuthNavigation}>
                Sign In
              </Button>
              <Button variant="hero" size="sm" onClick={handleAuthNavigation}>
                Join 42Layla
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-medium">
            🌟 Start Your Journey, One Dream at a Time
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient leading-tight">
            Where Dreams Meet
            <br />
            <span className="text-foreground">Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            42Layla is a vibrant community platform for developers, artists, creators, and dreamers. 
            Turn your ambitions into reality with collaboration, support, and endless possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleAuthNavigation}>
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Explore Dreams
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 aurora-gradient rounded-2xl flex items-center justify-center">
                <Code className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Build & Code</h3>
              <p className="text-muted-foreground">From apps to algorithms, bring your technical dreams to life</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 aurora-gradient rounded-2xl flex items-center justify-center">
                <Palette className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Create & Design</h3>
              <p className="text-muted-foreground">Express your artistic vision and inspire others</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 aurora-gradient rounded-2xl flex items-center justify-center">
                <Rocket className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Launch & Grow</h3>
              <p className="text-muted-foreground">Turn ideas into startups with community support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From idea to execution, 42Layla provides the tools and community to help you achieve your dreams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-gradient card-shadow border-border/50 hover:glow-effect transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 aurora-gradient rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-4">Dream Projects Hub</h3>
                <p className="text-muted-foreground mb-4">
                  Create, share, and showcase your projects. Whether you're building an app, starting a podcast, 
                  or organizing events - this is your launching pad.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Post project ideas and progress</li>
                  <li>• Invite collaboration and feedback</li>
                  <li>• Track milestones publicly</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient card-shadow border-border/50 hover:glow-effect transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 aurora-gradient rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-4">Talent Network</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with like-minded creators based on skills and ambitions. Find collaborators, 
                  mentors, and friends for your journey.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Browse by skills and interests</li>
                  <li>• View detailed profiles</li>
                  <li>• Direct contact for collaboration</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient card-shadow border-border/50 hover:glow-effect transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 aurora-gradient rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-4">Supportive Community</h3>
                <p className="text-muted-foreground mb-4">
                  Never feel alone in your journey. Get meaningful feedback, encouragement, 
                  and celebrate every milestone with fellow dreamers.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Declare goals boldly</li>
                  <li>• Share authentic progress</li>
                  <li>• Build lasting partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
                Join a Community of Dreamers
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Inspired by "Alf Layla wa Layla" (A Thousand and One Nights), where each night tells a new story, 
                42Layla encourages you to write your own story line by line, dream by dream, commit by commit.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 aurora-gradient rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="h-4 w-4 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">42 School Alumni & Students</h3>
                    <p className="text-muted-foreground">Extend your network beyond the campus</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 aurora-gradient rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Code className="h-4 w-4 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Aspiring Developers & Creators</h3>
                    <p className="text-muted-foreground">Find collaborators and grow together</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 aurora-gradient rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-4 w-4 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Passionate Dreamers</h3>
                    <p className="text-muted-foreground">Anyone with big dreams and the drive to achieve them</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleAuthNavigation}>
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="card-gradient p-8 rounded-3xl card-shadow">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Your dream doesn't wait</h3>
                  <p className="text-muted-foreground">It begins tonight.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-background/10 rounded-lg">
                    <div className="w-10 h-10 aurora-gradient rounded-full flex items-center justify-center">
                      <span className="text-background font-bold">1</span>
                    </div>
                    <span>Easy login with 42 School API</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-background/10 rounded-lg">
                    <div className="w-10 h-10 aurora-gradient rounded-full flex items-center justify-center">
                      <span className="text-background font-bold">2</span>
                    </div>
                    <span>Complete your personalized profile</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-background/10 rounded-lg">
                    <div className="w-10 h-10 aurora-gradient rounded-full flex items-center justify-center">
                      <span className="text-background font-bold">3</span>
                    </div>
                    <span>Start building your dreams</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Star className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-gradient">42Layla</span>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            A thousand and one dreams, infinite possibilities. 
            Join us in building the future, one story at a time.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Support</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Community</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 42Layla. Inspired by dreams, built for dreamers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;