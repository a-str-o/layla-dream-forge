import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      
      if (code) {
        try {
          // Call our edge function to handle 42 OAuth
        const response = await supabase.functions.invoke('auth-42', {
          body: { code }
        });

        const { data, error } = response;

          if (error) {
            throw error;
          }

        if (data?.session_url) {
          // Redirect to the magic link to authenticate the user
          window.location.href = data.session_url;
        } else if (data?.success) {
          toast({
            title: "Authentication successful",
            description: "Welcome to 42Layla!",
          });
          navigate('/');
        } else {
          throw new Error('No session data received');
        }
        } catch (error) {
          console.error('Authentication error:', error);
          toast({
            title: "Authentication failed",
            description: "There was an error logging you in. Please try again.",
            variant: "destructive",
          });
          navigate('/auth');
        }
      } else {
        // Handle other OAuth callbacks (Google, etc.)
        const { error } = await supabase.auth.getSession();
        if (error) {
          toast({
            title: "Authentication failed",
            description: error.message,
            variant: "destructive",
          });
          navigate('/auth');
        } else {
          navigate('/');
        }
      }
    };

    handleCallback();
  }, [searchParams, navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        <p className="mt-4 text-lg">Authenticating...</p>
      </div>
    </div>
  );
};

export default AuthCallback;