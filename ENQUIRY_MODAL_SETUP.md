# Property Enquiry Modal Setup Guide

## ✅ What's Been Implemented

### Components Created:

1. **PropertyEnquiryModal** (`src/components/ui/PropertyEnquiryModal.tsx`)
   - Modal form with fields: Name, Email, Phone, Message
   - Form validation using Zod
   - Real-time error messages
   - Success/error notifications
   - Auto-closes after successful submission

2. **Updated Hero Section** (`src/components/sections/Hero.tsx`)
   - Added "Quick Enquiry" button next to property tabs
   - Modal triggers for both "For Sale" and "For Rent" sections
   - Tracks which enquiry type is selected

### API & Email Setup:

- **API Route**: `/api/enquiries` (POST)
  - Saves enquiry to database
  - Sends automated response email
  - Returns success/error response

- **Email Template**: Professional HTML auto-response
  - Thanks the user
  - Confirms enquiry type received
  - Shows response time (24 hours)
  - Displays contact information
  - Branded with Rexos Properties details

## 🔧 Configuration Required

### 1. Environment Variables

Create a `.env.local` file in the project root with:

```bash
# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password

# Database (if not already set)
DATABASE_URL="file:./dev.db"
```

### 2. Gmail Setup Instructions

#### If using Gmail:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an **App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password
   - Use this as `EMAIL_PASSWORD`

#### Alternative Email Providers:

You can modify `src/lib/email.ts` to use other providers like SendGrid, Mailgun, etc.

## 🚀 How to Use

### For Users:

1. On the homepage, click **"Quick Enquiry"** button in the hero section
2. Select either **"For Sale"** or **"For Rent"** tab
3. Fill out the enquiry form:
   - Full Name (required)
   - Email (required)
   - Phone (optional)
   - Message (required)
4. Click **"Submit Enquiry"**
5. Success message shows and modal auto-closes
6. User receives automated response email within seconds

### For Admins:

- All enquiries are saved to the database in the `Enquiry` table
- Access via admin panel: `/admin/enquiries` (if available)
- View submitted enquiries with timestamps

## 📧 Customizing the Email Response

To customize the automated response email, edit `src/lib/email.ts`:

- Change response time message
- Update contact information
- Modify email template HTML/styling
- Add company logo

## 🐛 Troubleshooting

### Email not sending?

- Verify `EMAIL_USER` and `EMAIL_PASSWORD` in `.env.local`
- Check Gmail App Password is correct (16 characters)
- Look for errors in server console logs

### Form not submitting?

- Check browser console for network errors
- Verify API endpoint is accessible: `/api/enquiries`
- Ensure Prisma database is properly set up

### Modal not appearing?

- Check that `PropertyEnquiryModal` is imported in Hero component
- Verify modal state is updating correctly in React DevTools

## 📱 Responsive Design

The modal is fully responsive:

- Desktop: Centered modal dialog
- Tablet: Full-width with padding
- Mobile: Full-screen scrollable modal

## ✨ Features

✅ Form validation (client & server-side)
✅ Automatic email responses
✅ Success/error notifications
✅ Loading states
✅ Accessible form design
✅ Professional HTML email template
✅ Database persistence
✅ Error handling

## 🔄 Next Steps (Optional)

1. **Add confirmation email to admin**
   - Send copy of enquiry to admin email
   - Add notification badge in admin panel

2. **Enhanced features**
   - Property image selection in form
   - Multiple file uploads
   - Calendar appointment booking
   - WhatsApp integration

3. **Analytics**
   - Track enquiry conversion rates
   - Monitor response times
   - A/B test form messages
