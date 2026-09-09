# Thought Leader | Thought Reader — Tarot Website

A Vite + React single-page website for Phil Macleod's tarot services.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The enquiry form sends via EmailJS.

Set the following values in `.env` before running the app:

```bash
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

The Aspire magazine screenshot supplied in the source conversation is included in `public/assets/aspire-feature.png` and used only as a press feature image.
