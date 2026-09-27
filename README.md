# Dev Portfolio

This project is a personal software developer portfolio built from the my current details. It presents a concise overview of the developer background, technical skills, core projects, and contact information.

## Project structure

- `index.html` — main page structure and content
- `styles.css` — styling and visual design
- `script.js` — tab switching, dark mode toggle, project filtering, and contact form interaction

## Run locally with Python

### 1) Open a terminal in the project folder

```bash
cd c:/Workstation/projects/portfolio
```

### 2) Create and activate a virtual environment

Windows PowerShell:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

Windows Command Prompt:

```cmd
python -m venv .venv
.venv\Scripts\activate.bat
```

macOS / Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3) Start the local server

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### 4) Stop the server

Press `Ctrl + C` in the terminal.

## Notes

- Tailwind CSS is loaded from the CDN.
- The design includes light/dark mode and tabbed sections.
- The content reflects my resume details.
- Currently In-Progress
