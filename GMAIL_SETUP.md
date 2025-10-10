# Gmail SMTP Setup Instructions

## 🔧 **Gmail App Password Setup**

### Step 1: Enable 2-Factor Authentication
1. **Go to**: [Google Account Security](https://myaccount.google.com/security)
2. **Sign in** to your Google account
3. **Enable 2-Factor Authentication** if not already enabled

### Step 2: Generate App Password
1. **Go to**: [Google Account Security](https://myaccount.google.com/security)
2. **Click**: "2-Step Verification" → "App passwords"
3. **Select app**: "Mail"
4. **Select device**: "Other (custom name)"
5. **Enter name**: "Ken McCoy Website"
6. **Click**: "Generate"
7. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables

Update your `.env.local` file with your Gmail credentials:

```env
GMAIL_USER=your-actual-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
NODE_ENV=development
```

**Important Notes:**
- Use your **actual Gmail address** (not a placeholder)
- Use the **16-character app password** (not your regular Gmail password)
- Remove spaces from the app password when entering it

### Step 4: Test the Setup

1. **Restart your development server**:
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

2. **Test the contact form**:
   - Go to `http://localhost:3001/contact`
   - Fill out and submit the form
   - Check that emails are sent to `pranavkhandekar152@gmail.com`

## 📧 **Email Configuration**

- **From**: Your Gmail address (as "Ken McCoy Consulting Website")
- **To**: `pranavkhandekar152@gmail.com`
- **Reply-To**: Customer's email address
- **Subject**: "New Contact Form Inquiry from [Customer Name]"

## 🔒 **Security Notes**

- **Never commit** your `.env.local` file to version control
- **App passwords** are safer than regular passwords
- **2FA must be enabled** to use app passwords

## 🚨 **Troubleshooting**

If you get authentication errors:
1. **Verify 2FA is enabled** on your Google account
2. **Check the app password** is correct (16 characters, no spaces)
3. **Ensure Gmail address** is correct in `.env.local`
4. **Restart the development server** after changing environment variables
