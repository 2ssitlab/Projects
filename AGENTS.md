# AGENTS.md

## Cursor Cloud specific instructions

This repository contains a custom WordPress theme for **Zach's Computer Services** located at `wp-content/themes/zachs-developer/`.

### Running the WordPress Development Environment

The site requires Apache, PHP 8.3, and MariaDB:

```
sudo service mariadb start
sudo service apache2 start
```

WordPress is installed at `/var/www/html` with the theme symlinked from the workspace. The site is accessible at `http://localhost/`.

**WordPress Admin:** `http://localhost/wp-admin/` (user: `admin`, pass: `admin123`)

### Theme Structure

- `front-page.php` — Homepage with hero, services, trust bar, why choose, how it works, service areas, CTA
- `page-templates/page-services.php` — Services page
- `page-templates/page-about.php` — About page with certifications
- `page-templates/page-faq.php` — FAQ with search/filter/accordion
- `page-templates/page-contact.php` — Contact form with AJAX submission
- `assets/css/main.css` — Complete CSS design system with custom properties
- `assets/js/main.js` — Scroll animations, mobile menu, FAQ accordion, contact form handler
- `functions.php` — Theme setup, asset enqueuing, AJAX handler, widgets

### Key Notes

- Pretty permalinks require `mod_rewrite` and proper `.htaccess`; these are configured in Apache
- The contact form uses WordPress AJAX (`wp_ajax_*` actions) — no plugin needed
- The theme uses Phosphor Icons (CDN) and Google Fonts (Inter + Space Grotesk)
- No page builder dependency — all templates use custom PHP/HTML
- PHP lint: `for f in wp-content/themes/zachs-developer/**/*.php; do php -l "$f"; done`
- The `.htaccess` file at `/var/www/html/.htaccess` is required for pretty permalinks; if pages return 404, verify it exists and `mod_rewrite` is enabled
- WP-CLI is available at `/usr/local/bin/wp` (use `--allow-root --path=/var/www/html`)
