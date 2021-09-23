# Angular i18n Test

This project is intended to show how to generate an Angular app with multiple languages (i18n = internalization).

## Instructions

1. Run `ng add @angular/localize`;

2. Configure the HTML templates with the `i18n` attribute in desired tags;

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
      // ...
    }
    // ...
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

9. Apply specific build options in `angular.json` file, similar to the example below:

```json
"build": {
    // ...
    "configurations": {
      // ...
      "en-US": {
        "localize": [
          "en-US"
        ]
      },
      "pt-BR": {
        "localize": [
          "pt-BR"
        ]
      }
    },
    // ...
  },
  "serve": {
    // ...
    "configurations": {
      // ...
      "en-US": {
        "browserTarget": "angular-i18n-test:build:en-US"
      },
      "pt-BR": {
        "browserTarget": "angular-i18n-test:build:pt-BR"
      }
    },
    // ...
  },
  // ...
}
```

10. Run `ng build`.

---

**Note**: Run `ng serve --configuration=<locale>` for development server now, replace `<locale>` with the desired locale. Example of running the development server for multiple locales:
- `ng serve --configuration=en-US --port 4200 --open`;
- `ng serve --configuration=pt-BR --port 4201 --open`.

---

Check the [complete documentation](https://angular.io/guide/i18n) for more details.
