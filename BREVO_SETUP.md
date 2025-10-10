# Brevo Email Setup Instructions

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Brevo API Configuration
BREVO_API_KEY=your_brevo_api_key_here

# Optional: Set to development for detailed error messages
NODE_ENV=development
```

## Getting Your Brevo API Key

1. Go to [Brevo Dashboard](https://app.brevo.com/)
2. Sign up or log in to your account
3. Navigate to **Settings** → **API Keys**
4. Create a new API key with the following permissions:
   - **Transactional emails** (required)
5. Copy the API key and paste it in your `.env.local` file

## Email Configuration

The contact form will send emails to `info@kenmccoy.in` with the following features:

- **From**: Ken McCoy Consulting Website (noreply@kenmccoy.in)
- **Reply-To**: The customer's email address
- **Subject**: "New Contact Form Inquiry from [Customer Name]"
- **Content**: Formatted HTML email with customer details and message

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check the console for any errors
5. Verify the email is received at info@kenmccoy.in

## Troubleshooting

- Ensure your Brevo API key is correct
- Check that your Brevo account has sufficient credits
- Verify the sender email domain is verified in Brevo
- Check the browser console and server logs for error messages
