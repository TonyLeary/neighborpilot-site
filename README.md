# NeighborPilot Static Site

Preview locally:

```bash
cd ~/Desktop/phantom-scout
python3 -m http.server 4173 --directory site
```

Then open:

```text
http://localhost:4173
```

Deploy the `site/` directory to a static host such as Cloudflare Pages, Netlify, Vercel static output, S3, or any plain web server.

Production wiring still needed:

- Replace the mock start form with Stripe Checkout.
- Send onboarding form submissions to the Phantom Scout backend.
- Add privacy policy, terms, refund policy, and contact details.
- Add analytics only after privacy review.

