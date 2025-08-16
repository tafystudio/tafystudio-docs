---
sidebar_position: 2
---

# Installation

This guide will help you install Tafy Studio on your system.

## Prerequisites

Before installing Tafy Studio, ensure you have:

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/tafystudio/tafystudio.git
cd tafystudio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration settings.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

## Verify Installation

To verify that Tafy Studio is installed correctly:

1. Open your browser to `http://localhost:3000`
2. You should see the Tafy Studio welcome page

## Next Steps

- Follow the [Quick Start Guide](/docs/quick-start) to create your first project
- Read the [User Guide](/docs/guide/overview) for detailed usage instructions