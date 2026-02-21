
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can sign up for early access"
  ON public.early_access_signups
  FOR INSERT
  WITH CHECK (true);

-- No public SELECT/UPDATE/DELETE
CREATE POLICY "No public read access"
  ON public.early_access_signups
  FOR SELECT
  USING (false);
