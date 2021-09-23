# i18n Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Translation Instructions

1. Run `ng add @angular/localize`;

2. Configure the HTML templates with the `i18n` attribute in desired tags.
- [Instructions](https://angular.io/guide/i18n#prepare-templates-for-translations);

3. Run `ng extract-i18n`;

4. Run `ng extract-i18n --output-path src/locale --out-file source.xlf --format=xlf`;

5. Rename the generated translation file with the following format: `source.<locale-id>.xlf`;
- Examples of `<locale-id>`: en-US, pt-BR, fr-CA;

6. Translate the generated translation file;
- [Instructions](https://angular.io/guide/i18n#translate-each-translation-file);
- [Useful Software]();

7. Add the locales reference in `angular.json` file:
```json
"projects": {
    "<project-name>": {
      // ...
      "i18n": {
        "sourceLocale": "en-US",
        "locales": {
          "pt-BR": "src/locale/source.pt-BR.xlf"
          // ...
        }
      }
    }
  },
  "defaultProject": "<project-name>"
}
```

8. Set `localize` option as true in `angular.json` file:
```json
"build": {
  // ...
  "options": {
    "localize": true,
    // ...
  }
}
```

9. Run `ng build`.

Check the [complete documentation](https://angular.io/guide/i18n) for more details.
