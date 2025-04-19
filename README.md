# 🛍️ Next.js Product Listing App

> ⚡ This project is a small coding challenge completed for the company **Twigbit**.

This is a simple **Next.js + TypeScript** app that demonstrates:

- API routes with POST filtering and pagination  
- Server components fetching data  
- UI built with Tailwind CSS  
- Query params handling using `useSearchParams` and `router.push`  
- Bonus features like dynamic filtering and paginated views

---

## 🚀 Features

- ✅ List of products (dummy data)
- 🔍 Filter by name (case-insensitive)
- 📄 Pagination using query params
- 🌐 API route that supports `POST` body filters
- ⚙️ Clean, responsive UI with Tailwind

---

## 📁 Folder Structure

```bash
├── app/
│   └── page.tsx               # Server component with fetch
├── app/api/products/route.ts # API route handling filtering & pagination
├── components/
│   └── Pagination.tsx         # Client-side pagination controls
├── data/
│   └── product.ts             # Dummy product list
├── lib/interfaces/
│   └── product.interface.ts   # Product type definition
```

---

## 🧪 How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your `.env.local`:
   ```
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Author

Made with ❤️ by Mouhib Bahri for Twigbit.
