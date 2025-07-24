import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowLeft, Github, Mail, Lock, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, signIn, signUp, signInWith42, signInWithGoogle } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          alert("Passwords don't match!");
          return;
        }
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } finally {
      setLoading(false);
    }
  };

  const handle42Login = () => {
    const clientId = '2c8440d825085b8b3913d03a0388f768c9ed959c618273d0168ae88ad71316c0';
    const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
    const authUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=public`;
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-10 w-10 text-accent" />
            <span className="text-3xl font-bold text-gradient">42Layla</span>
          </div>
          
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            🌟 Where Dreams Meet Innovation
          </Badge>
          
          <h1 className="text-2xl font-bold mb-2">
            {isSignUp ? "Start Your Journey" : "Welcome Back"}
          </h1>
          <p className="text-muted-foreground">
            {isSignUp 
              ? "Join our community of dreamers and creators" 
              : "Continue building your dreams with us"
            }
          </p>
        </div>

        {/* Auth Card */}
        <Card className="card-gradient card-shadow border-border/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-xl">
              {isSignUp ? "Create Account" : "Sign In"}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* 42 School Login */}
            <Button 
              variant="hero" 
              className="w-full text-lg py-6" 
              onClick={handle42Login}
              disabled={loading}
            >
              <Github className="mr-3 h-5 w-5" />
              Continue with 42 School
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full text-lg py-6" 
              onClick={signInWithGoogle}
              disabled={loading}
            >
              <Mail className="mr-3 h-5 w-5" />
              Continue with Google
            </Button>
            
            <div className="relative">
              <Separator className="my-6" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-card px-4 text-sm text-muted-foreground">
                  or continue with email
                </span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10 bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background/80"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </Label>
                  </div>
                  <Button variant="link" className="text-sm p-0 h-auto">
                    Forgot password?
                  </Button>
                </div>
              )}

              <Button 
                type="submit" 
                variant="default" 
                className="w-full text-lg py-6"
                disabled={loading}
              >
                {loading ? "Loading..." : (isSignUp ? "Create Account" : "Sign In")}
              </Button>
            </form>

            {/* Toggle Sign Up/Sign In */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                {isSignUp 
                  ? "Already have an account?" 
                  : "Don't have an account?"
                }
              </p>
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary font-medium"
              >
                {isSignUp ? "Sign in here" : "Sign up for free"}
              </Button>
            </div>

            {isSignUp && (
              <div className="text-center">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  By signing up, you agree to our{" "}
                  <Button variant="link" className="text-xs p-0 h-auto underline">
                    Terms of Service
                  </Button>{" "}
                  and{" "}
                  <Button variant="link" className="text-xs p-0 h-auto underline">
                    Privacy Policy
                  </Button>
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Button variant="ghost" className="text-muted-foreground" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;