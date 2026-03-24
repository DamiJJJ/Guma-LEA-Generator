# Guma-LEA-Generator

A web app for generating fictional Law Enforcement Agency documents — inspired by real LAPD/LSSD report formats used in FiveM roleplay.
Built with plain HTML, CSS and JavaScript. No frameworks, no dependencies.

## Live Demo

[View on GitHub Pages](https://damijjj.github.io/Guma-LEA-Generator/)

## Available Generators

| Generator                       | File                     | Description                                                        |
| ------------------------------- | ------------------------ | ------------------------------------------------------------------ |
| LSPD Officer Card               | `lspd.html`              | Los Santos Police Department officer profile card                  |
| LSSD Officer Card               | `lssd.html`              | Los Santos County Sheriff's Department officer profile card        |
| Firearm Discharge Investigation | `firearm-discharge.html` | LAPD-style Officer-Involved Firearm Discharge Investigation report |

## Features

### Officer Card (LSPD / LSSD)

- Fill in officer/deputy details (name, rank, division, badge number, etc.)
- Upload a photo — auto-cropped to fit the card
- Randomize pay based on rank
- Live preview rendered on HTML Canvas
- Download the card as a PNG file

### Firearm Discharge Investigation

- Incident type checkboxes (Tactical, Non-Tactical, Animal Shooting, Warning Shot)
- Section I — General Information (FID No., DR No., date, time, location, RD, reporting officer)
- Dynamic officer rows — add/remove Involved Officers and Witnessing Officers
- Dynamic civilian witness rows with full contact details
- Y/N fields rendered as dropdown selects (In Uniform, Vest, On Duty, Injured, IOD, Light Duty)
- Day of Week dropdown, datetime-local picker for report date/time
- Live preview — form updates reflected instantly on canvas
- Canvas output proportioned to A4 size
- Download the report as a PNG file

## Usage

No build tools required. Open `index.html` in a browser or deploy to any static hosting (GitHub Pages, Netlify, etc.).

## Tech Stack

- HTML5 Canvas — document rendering & PNG export
- Vanilla JS — zero dependencies
- CSS3 — dark UI theme

---

_Built for FiveM roleplay use. All agencies, names and badge numbers are fictional._
