# SolarProjectLetest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## EmailJS setup

### 1. Create your EmailJS setup:
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account.
2. **Add a New Service:** Go to "Email Services" and click "Add New Service" (e.g., choose Gmail, Outlook, etc. and connect your account). This will generate a **Service ID** (like `service_xxxxx`).
3. **Create an Email Template:** Go to "Email Templates" and click "Create New Template". 
   * In your template, you can use these exact variables that we are passing from the form: 
     - `{{from_name}}`
     - `{{reply_to}}`
     - `{{phone_number}}`
     - `{{message}}`
   * Save the template and note down the **Template ID** (like `template_xxxxx`).
4. **Get your Public Key:** Go to "Account" (in the sidebar menu) -> "API Keys". Copy your **Public Key**.

### 2. Update your Configuration File:
Once you have those three keys, simply open `src/app/data.ts` and replace the placeholders:

```typescript
// in src/app/data.ts
emailJS: {
  serviceId: 'YOUR_SERVICE_ID_HERE',   // Replace with your Service ID
  templateId: 'YOUR_TEMPLATE_ID_HERE', // Replace with your Template ID
  publicKey: 'YOUR_PUBLIC_KEY_HERE',   // Replace with your Public Key
}
```
