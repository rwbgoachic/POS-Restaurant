# BistroBeast - Restaurant Management System

A comprehensive restaurant management system built with React, Supabase, and Vite.

## Features

- 🏪 POS Terminal with split payments and gift cards
- 👨‍🍳 Kitchen Display System
- 📊 Real-time analytics and reporting
- 👥 Staff management with role-based access
- 📱 Mobile-friendly interface
- 🛡️ Secure authentication and authorization
- 📝 Digital menu management
- 💳 Integrated payment processing with Helcim

## Live Demo

Visit [restaurantpos.paysurity.com](https://restaurantpos.paysurity.com) to see BistroBeast in action.

## Prerequisites

- Node.js 18.x or higher
- Supabase account
- Helcim account (for payments)
- SMTP server (for email notifications)
- Twilio account (for SMS notifications)

## Environment Variables

Create a `.env` file with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Payment Processor
VITE_HELCIM_API_KEY=your_helcim_api_key
VITE_HELCIM_ACCOUNT_ID=your_helcim_account_id

# Email Service
VITE_EMAIL_SERVICE_ID=your_email_service_id
VITE_EMAIL_TEMPLATE_ID=your_email_template_id
VITE_EMAIL_USER_ID=your_email_user_id
SMTP_USER=your_smtp_username
SMTP_PASSWORD=your_smtp_password
SMTP_HOST=your_smtp_host
SMTP_PORT=587

# SMS Service
VITE_TWILIO_ACCOUNT_SID=your_twilio_account_sid
VITE_TWILIO_AUTH_TOKEN=your_twilio_auth_token
VITE_TWILIO_PHONE_NUMBER=your_twilio_phone_number

# Domain Configuration
VITE_BASE_DOMAIN=paysurity.com
VITE_SUBDOMAIN=restaurantpos
VITE_PAYSURITY_MAIN_URL=https://paysurity.com

# Restaurant Configuration
VITE_RESTAURANT_NAME=BistroBeast
VITE_RESTAURANT_TIMEZONE=America/New_York
VITE_RESTAURANT_CURRENCY=USD
VITE_RESTAURANT_LANGUAGE=en
VITE_RESTAURANT_TAX_RATE=0.0825

# Security
VITE_MFA_ENABLED=true
VITE_PASSWORD_RESET_URL=https://restaurantpos.paysurity.com/reset-password
VITE_MIN_PASSWORD_LENGTH=12
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
├── docs/                  # Documentation
├── e2e/                   # End-to-end tests
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── admin/         # Admin-specific components
│   │   ├── website/       # Public website components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and API clients
│   ├── monitoring/        # Error monitoring
│   ├── pages/             # Page components
│   ├── store/             # State management
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── supabase/
│   ├── functions/         # Supabase Edge Functions
│   └── migrations/        # Database migrations
```

## Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to your hosting provider:
   ```bash
   # Example for Netlify
   netlify deploy --prod
   ```

For detailed deployment instructions, see [Deployment Guide](docs/DEPLOYMENT_GUIDE.md).

## Documentation

- [Getting Started Guide](docs/GETTING_STARTED.md)
- [Deployment Guide](docs/DEPLOYMENT_GUIDE.md)
- [Payment Integration Guide](docs/PAYMENT_INTEGRATION.md)
- [Staff Training Manual](docs/STAFF_TRAINING.md)
- [SQA Test Plan](docs/SQA_TEST_PLAN.md)
- [QA Test Script](docs/QA_TEST_SCRIPT.md)

## Backup Strategy

1. Database Backups
   - Daily automated backups via Supabase
   - Weekly manual backups
   - 30-day retention period

2. Configuration Backups
   - Environment variables stored securely
   - Infrastructure as code version controlled
   - Regular audit of security settings

## Monitoring

1. Application Monitoring
   - Error tracking via Sentry
   - Performance monitoring via Supabase
   - Real-time alerts for critical issues

2. Security Monitoring
   - Failed login attempts
   - Suspicious activity detection
   - Regular security audits

## Support

For technical support:
1. Check the [documentation](docs/)
2. Review error logs in the diagnostics panel
3. Contact system administrator at support@bistrobeast.com

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT License](LICENSE)

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Helcim](https://www.helcim.com/)