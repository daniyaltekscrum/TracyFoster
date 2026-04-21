/*
  # Create Contact Requests Table

  ## Summary
  Creates a table to store contact and booking enquiries submitted through the website contact form.

  ## New Tables
  - `contact_requests`
    - `id` (uuid, primary key) - unique identifier
    - `name` (text) - full name of the enquirer
    - `email` (text) - email address for follow-up
    - `phone` (text, optional) - phone number
    - `message` (text) - enquiry message
    - `preferred_contact` (text) - preferred contact method (email/phone)
    - `created_at` (timestamptz) - submission timestamp
    - `status` (text) - processing status: 'new', 'contacted', 'resolved'

  ## Security
  - RLS enabled on `contact_requests`
  - Anonymous users can INSERT (submit enquiries)
  - No SELECT for anonymous — protects visitor privacy
  - Authenticated users (admin) can SELECT and UPDATE
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  preferred_contact text DEFAULT 'email',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact request"
  ON contact_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact requests"
  ON contact_requests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact requests"
  ON contact_requests FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
