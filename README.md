# AK Studio

Phone app for **Ayala Kedem NAILS**. It turns photos and videos into branded Instagram stories and posts, and builds a price list, promotions, shade of the week, client reviews, tips and open slots from Ayala's own services, prices, days and hours. It also keeps her client list and calendar, with WhatsApp reminders.

- Static web app (HTML, CSS, JS). No server, no accounts, no tracking.
- Everything Ayala enters (services, prices, clients, calendar) stays on her phone, in the browser's local storage. Backup and restore use a file she keeps.
- Installable to the home screen, and works offline (service worker).
- Fonts: Varela Round and Josefin Sans (SIL Open Font License; licenses in `fonts/`). The logo files are outlined vectors.

Based on KOY Studio. Release: bump `VERSION` in `sw.js`, then push to `main` (GitHub Pages).
