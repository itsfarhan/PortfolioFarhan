# 🌐 farhanahmed.pro — Personal Portfolio Website

This is the source and deployment summary for my personal portfolio site [https://farhanahmed.pro](https://farhanahmed.pro), showcasing my work, experience, and projects.

The website is built with **React**, **TypeScript**, and **Vite**, hosted securely on **AWS S3 + CloudFront**, and integrated with **Cloudflare DNS** and **email routing**. It's designed for fast performance, low cost, and maximum control.

---

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Hosting**: AWS S3 (private bucket)
- **CDN**: AWS CloudFront
- **SSL/TLS**: AWS ACM (via CloudFront)
- **DNS & Email Routing**: Cloudflare
- **Form Handling**: [FormSubmit](https://formsubmit.io)

---

## 🧭 Deployment Overview

### 🏗️ Infrastructure Setup

1. **Domain** purchased from Namecheap.
2. **Cloudflare** added as DNS provider (by pointing Namecheap NS records to Cloudflare).
3. **AWS S3 Bucket** created (private) for hosting site content.
4. **CloudFront Distribution** configured:
   - Points to the S3 bucket.
   - Secured with an **Origin Access Identity (OAI)**.
   - Forces HTTPS.
   - Uses an **ACM Certificate** from `us-east-1`.
5. **DNS Configuration**:
   - Cloudflare CNAMEs created for both `@` and `www` → CloudFront domain.
   - Cloudflare SSL/TLS turned off (handled fully by AWS).
6. **Email Routing** via Cloudflare:
   - `hello@farhanahmed.pro` → personal inbox.

---

### 📦 Site Deployment

- Built using: `npm run build`
- Files uploaded:
  - `index.html`, `thankyou.html`, `/assets`, images, audio, etc.
- Permissions handled via CloudFront OAI.
- Public access to the S3 bucket is blocked (all access is routed via CloudFront).

---

## 📝 Features

- Responsive portfolio layout.
- Contact form powered by FormSubmit.
- Email forwarding for professional communication.
- Secure HTTPS with proper DNS validation.

---

## 📌 Useful URLs

- 🌍 **Live Site**: [https://farhanahmed.pro](https://farhanahmed.pro)
- 📧 **Email**: `hello@farhanahmed.pro`

---

## 📌 Lessons Learned

- Cloudflare and AWS can be tricky together — always ensure SSL/TLS is configured properly.
- React + Vite is fast to build and deploy but ensure all routes like `thankyou.html` are manually created if needed.
- CloudFront + S3 is a solid combo for secure and scalable static site hosting.

---

## ✅ Next Steps

- Add CI/CD (possibly with GitHub Actions).
- Enable visitor analytics.
- Setup a basic CMS or headless blog support.

---

## 💬 License

This project is personal and open-source under the [MIT License](LICENSE), though the content and branding are mine.

---
