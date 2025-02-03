-- Create the categories table first
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE
);

-- Create the events table
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  imageurl TEXT NOT NULL,  -- lowercase to match TypeScript
  price INTEGER NOT NULL,
  likes INTEGER DEFAULT 0
);

-- Insert default categories
INSERT INTO categories (name, slug) VALUES
  ('Sports', 'sports'),
  ('Concerts', 'concerts'),
  ('Theater', 'theater'),
  ('Festivals', 'festivals')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample events
INSERT INTO events (title, category, date, location, imageurl, price, likes) VALUES 
  (
    'Taylor Swift | The Eras Tour',
    'Concerts',
    '2024-12-15',
    'Levi''s Stadium, Santa Clara, CA',
    'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop',
    499,
    5234
  ),
  (
    'Warriors vs Lakers',
    'Sports',
    '2024-05-10',
    'Chase Center, San Francisco, CA',
    'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&auto=format&fit=crop',
    175,
    2198
  ),
  (
    'Hamilton - Broadway Tour',
    'Theater',
    '2024-08-20',
    'San Jose Center for Performing Arts, CA',
    'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop',
    250,
    2843
  ),
  (
    'Outside Lands 2024',
    'Festivals',
    '2024-08-09',
    'Golden Gate Park, San Francisco, CA',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop',
    429,
    4521
  )
ON CONFLICT (id) DO NOTHING; 