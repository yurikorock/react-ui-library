# React UI Library

## Project Overview
This project is a small React UI component library implemented with Storybook.  
The goal is to demonstrate the ability to create **controlled components**, **Toast**, **Input with password toggle and clearable option**, and **Sidebar Menu with nested items**.

---

## 🚀 How to Run

1. Clone the repository:
```bash
git clone https://github.com/yurikorock/react-ui-library.git
cd react-ui-library
Install dependencies:

2. Install dependencies:
npm install
Run Storybook:

3. Run Storybook:
npm run storybook


🧩 Components
1️⃣ Input
Supports types: text, password, number

Options:

clearable — clear button

👁 password toggle

Storybook shows all states

Examples: "./screenshots/input-clearable-1.png", "./screenshots/input-clearable-2.png", "./screenshots/input-passwod-hide.png", "./screenshots/input-passwor-visible.png", "./screenshots/input-text.png"


2️⃣ Toast
Supports types: success | error | info | warning

Auto-dismiss after duration

Optional close button

Smooth animation (fade/slide)

Examples: "./screenshots/toast-error.png", "./screenshots/toast-info.png", "./screenshots/toast-success.png" 


3️⃣ Sidebar Menu
Slides in from the right

Supports nested items (accordion)

Overlay closes menu when clicked

Controlled via isOpen + onClose

Examples: "./screenshots/sidebar-1.png", "./screenshots/sidebar-2.png"


⚙️ Technical Details
React + TypeScript

Storybook for component demonstration

CSS Modules for styling

Optional chaining for safe function calls (onClose?.())

📦 Project Structure

src/
├── components/
│   ├── Input/
│   ├── SidebarMenu/
│   └── Toast/
├── stories/
└── main.tsx
screenshots/
└── *.png
