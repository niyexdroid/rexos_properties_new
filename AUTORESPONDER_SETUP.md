# Auto-Responder Setup Guide

This guide explains how to set up the email auto-responder feature for contact enquiries.

## How It Works

When someone submits a contact enquiry form:

1. Their information is saved to the database
2. An automated email is sent to their inbox confirming receipt
3. The email states they'll receive a response within 24 hours
4. You can view all enquiries in your admin panel

## Setup Instructions

### Step 1: Create Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Step 2: Configure Email Credentials

Choose one of the email methods below:

#### Using Gmail (Recommended)

1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled
3. Go to https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer"
5. Google will generate a 16-character password
6. In `.env.local`, update:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=paste-the-16-char-password-here
   ```

#### Using Outlook

1. In `.env.local`, update:
   ```
   EMAIL_USER=your-email@outlook.com
   EMAIL_PASSWORD=your-outlook-password
   ```
2. Update `src/lib/email.ts` line 7-8:
   ```typescript
   const transporter = nodemailer.createTransport({
     service: "outlook",
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD,
     },
   });
   ```

#### Using Another Provider

See [Nodemailer's Well-Known Services](https://nodemailer.com/smtp/well-known/) for support for various providers.

### Step 3: Restart Development Server

```bash
npm run dev
```

### Step 4: Test the Feature

1. Go to http://localhost:3002/contact
2. Fill in the form and click "Submit"
3. Check your email for the auto-response message

## Features

✅ **Auto-Response Email**: Subscribers receive a professional confirmation email  
✅ **24-Hour Promise**: Email informs them they'll get a response within 24 hours  
✅ **Database Storage**: All enquiries are saved to the database  
✅ **Contact Info**: Auto-response includes company contact details  
✅ **Branded Design**: HTML email with professional styling

## Auto-Response Email Details

The auto-response email includes:

- Personalized greeting with the subscriber's name
- Confirmation of their enquiry type
- Clear statement: "We'll get back to you within 24 hours"
- Company contact information
- Professional footer

## Environment Variables

| Variable         | Description                                       | Example                |
| ---------------- | ------------------------------------------------- | ---------------------- |
| `EMAIL_USER`     | Sender email address                              | `noreply@example.com`  |
| `EMAIL_PASSWORD` | Email account password (or app-specific password) | `16-char-app-password` |

## Troubleshooting

### Email Not Sending

1. **Check credentials**: Ensure `EMAIL_USER` and `EMAIL_PASSWORD` are correct
2. **Check logs**: Look at server console for error messages
3. **Gmail users**: Verify you generated an App Password, not using regular password
4. **2-Step Verification**: Gmail requires 2-Step Verification enabled before creating App Passwords

### Email Going to Spam

- Add a reply-to address by updating `src/lib/email.ts`
- Configure DKIM/SPF records if using a custom domain
- Use a professional email domain instead of personal email

## Security Notes

⚠️ **Never commit `.env.local` to Git** - it contains sensitive credentials  
✅ `.env.local` is already in `.gitignore`

## Files Added/Modified

**New Files:**

- `src/lib/email.ts` - Email utility function
- `src/app/api/enquiries/route.ts` - API endpoint for enquiries
- `.env.example` - Template for environment variables

**Modified Files:**

- `src/app/contact/page.tsx` - Connected form to API, added loading states and feedback messages
- `package.json` - Added `nodemailer` dependency

## Advanced Customization

### Change Auto-Response Email Template

Edit `src/lib/email.ts` to customize:

- Email subject line
- HTML content/styling
- Response time message

### Change Response Time

If you want to promise a different response time (e.g., 48 hours), update:

1. Email template in `src/lib/email.ts` - change "24 hours" text
2. Database reminder for your team

### Send Email to Admin Too

Modify `src/app/api/enquiries/route.ts` to also send notifications to your admin email:

```typescript
// Send notification to admin
await sendAdminNotification({
  enquiry: enquiry,
  adminEmail: process.env.ADMIN_EMAIL,
});
```

## Next Steps

1. Add an admin dashboard to view and manage enquiries
2. Send admin notifications when new enquiries arrive
3. Add rate limiting to prevent form spam
4. Set up a task reminder system for the 24-hour response
