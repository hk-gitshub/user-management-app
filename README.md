# User Management App

A user-friendly application to manage user data efficiently, featuring a dynamic table with sorting, pagination, and filtering capabilities. This project uses modern technologies such as **Next.js**, **TanStack Query**, **TanStack Table**, and **shadcn/ui**.

## Project Features

- **Dynamic Table**: Sortable, filterable, and paginated table using TanStack Table.
- **Data Fetching**: Efficient server-side data fetching with TanStack Query.
- **UI Components**: Responsive design with shadcn/ui.

## Project Structure

```
user-management-app/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI components
│   │   │   ├── Button.jsx   # Button component
│   │   │   ├── Input.jsx    # Input component
│   │   │   ├── Table.jsx    # Table component
│   │   ├── assets/       # Custom assets
│   │       ├── UserTable.jsx  # User table component
│   │       ├── Pagination.jsx # Pagination component
│   │       ├── Loader.jsx     # Loader component
│   ├── hooks/            # Custom React hooks
│   │   ├── useUsers.js   # Hook for user data fetching (TanStack Query)
│   ├── pages/            # Next.js pages
│   │   ├── users/        # Users-related pages
│   ├── styles/           # CSS/SCSS files
│   ├── utils/            # Utility functions
├── README.md             # Project documentation
├── package.json          # Project dependencies and scripts
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

## Installation and Setup

Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/hk-gitshub/user-management-app.git
   cd user-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Technology Stack

- **Framework**: Next.js (15.1.3)
- **State Management**: TanStack Query
- **Table Management**: TanStack Table
- **UI Components**: shadcn/ui, Tailwind CSS

## Running Tests

To run tests (if applicable):
```bash
npm test
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For further information or issues, please reach out at [korihardik2808@gmail.com].
