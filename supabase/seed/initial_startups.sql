-- Sample German HealthTech Startups for Development

INSERT INTO startups (name, slug, tagline, description, website, stage, industry, founded_year, location, funding, featured) VALUES
('Kaia Health', 'kaia-health', 'AI-powered digital therapeutics for back pain', 'Kaia Health develops digital therapeutics for musculoskeletal conditions using computer vision AI.', 'https://kaiahealth.com', 'series-b', ARRAY['Digital Health', 'MedTech'], 2016, 'Munich', 125000000, true),
('Clue', 'clue', 'Period and ovulation tracking app', 'Clue is a period tracking app that helps users understand their cycle and reproductive health.', 'https://helloclue.com', 'series-c', ARRAY['HealthTech', 'FemTech'], 2013, 'Berlin', 50000000, true),
('Ada Health', 'ada-health', 'AI-powered symptom assessment', 'Ada Health provides AI-powered health assessment and guidance to help users understand symptoms.', 'https://ada.com', 'series-b', ARRAY['Digital Health', 'AI'], 2011, 'Berlin', 90000000, true),
('Curetis', 'curetis', 'Molecular diagnostics for infections', 'Curetis develops molecular diagnostic systems for rapid detection of pathogens.', 'https://curetis.com', 'series-b', ARRAY['Diagnostics', 'MedTech'], 2008, 'Stuttgart', 75000000, false),
('DocPlanner', 'docplanner', 'Healthcare appointment booking platform', 'DocPlanner connects patients with doctors and enables online appointment booking.', 'https://docplanner.com', 'series-e', ARRAY['Healthcare IT', 'SaaS'], 2012, 'Berlin', 250000000, true);

INSERT INTO founders (startup_id, name, role, linkedin_url) VALUES
((SELECT id FROM startups WHERE slug = 'kaia-health'), 'Konstantin Mehl', 'CEO', 'https://linkedin.com/in/konstantinmehl'),
((SELECT id FROM startups WHERE slug = 'kaia-health'), 'Dr. Emanuel Noe', 'CTO', 'https://linkedin.com/in/emanuelnoe'),
((SELECT id FROM startups WHERE slug = 'clue'), 'Ida Tin', 'CEO', 'https://linkedin.com/in/idatin'),
((SELECT id FROM startups WHERE slug = 'ada-health'), 'Dr. Martin Hirsch', 'CEO', 'https://linkedin.com/in/martinhirsch'),
((SELECT id FROM startups WHERE slug = 'ada-health'), 'Claire Novorol', 'Chief Medical Officer', 'https://linkedin.com/in/clairenovorol');

-- Refresh stats after seeding
SELECT refresh_stats();