# Folke Laravel

Laravel rewrite of the Folke website.

## Requirements

- PHP 8.3 or newer
- Composer
- Node.js and npm

If Composer is not installed yet, follow the official installation guide:

- Composer: https://getcomposer.org/download/

For Laravel's official installation guidance, see:

- Laravel installation: https://laravel.com/docs/13.x/installation

## Setup

1. Install PHP dependencies:

   ```bash
   composer install
   ```

2. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

3. Generate the application key:

   ```bash
   php artisan key:generate
   ```

4. If `database/database.sqlite` is missing, create it first:

   ```bash
   touch database/database.sqlite
   ```

5. Run the database migrations:

   ```bash
   php artisan migrate
   ```

6. Install frontend dependencies:

   ```bash
   npm install
   ```

7. Run the required local patch step:

   ```bash
   npm run postinstall
   ```

   This repository depends on patched Wayfinder output, so this step is mandatory after installing npm dependencies.

## Optional seed data

Seed the default test user:

```bash
php artisan db:seed
```

Seed sample product data:

```bash
php artisan db:seed --class=ProductSeeder
```

The default seeded logins are:

- Email: `test@example.com`
  Password: `test123` (regular user)
- Email: `admin@example.com`
  Password: `admin123` (admin user)

## Run locally

The easiest way to start everything is:

```bash
composer run dev
```

This runs the Laravel server, queue listener, log tailing, and Vite together.

## Useful commands

```bash
php artisan test
composer run test
npm run build
```
