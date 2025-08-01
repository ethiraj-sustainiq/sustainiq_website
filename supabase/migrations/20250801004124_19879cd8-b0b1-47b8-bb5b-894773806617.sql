-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read published posts
CREATE POLICY "Published posts are viewable by everyone" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample blog posts
INSERT INTO public.blog_posts (title, slug, content, excerpt, published) VALUES
(
  'Welcome to SustainIQ AI Blog', 
  'welcome-to-sustainiq-ai-blog',
  'Welcome to our blog! We''re excited to share insights about sustainable AI solutions and how technology can help create a more sustainable future.

## Our Mission

At SustainIQ AI, we believe that artificial intelligence should not only be powerful but also sustainable. Our blog will cover:

- Latest developments in sustainable AI
- Case studies from our clients
- Best practices for green technology
- Industry insights and trends

## What to Expect

We''ll be publishing weekly posts covering various aspects of sustainable technology, from energy-efficient algorithms to carbon footprint reduction strategies.

Stay tuned for more exciting content!',
  'Welcome to our blog! We''re excited to share insights about sustainable AI solutions and how technology can help create a more sustainable future.',
  true
),
(
  'The Future of Sustainable AI', 
  'future-of-sustainable-ai',
  'As artificial intelligence continues to evolve, the need for sustainable AI practices becomes increasingly important.

## Why Sustainable AI Matters

The environmental impact of AI systems is growing rapidly. Large language models and machine learning systems consume significant amounts of energy, contributing to carbon emissions.

## Our Approach

At SustainIQ AI, we focus on:

1. **Energy-efficient algorithms** - Optimizing models to reduce computational requirements
2. **Green data centers** - Using renewable energy sources
3. **Carbon offsetting** - Balancing emissions through environmental initiatives

## Looking Forward

The future of AI must be sustainable. We''re committed to leading this change and helping our clients achieve their sustainability goals while leveraging cutting-edge AI technology.',
  'As artificial intelligence continues to evolve, the need for sustainable AI practices becomes increasingly important.',
  true
);