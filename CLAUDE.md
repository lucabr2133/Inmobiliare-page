## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Autonomous Execution Rules (Full Autonomy)

- **100% Autonomy & Direct Execution:** Always execute user requests directly and proactively from start to finish.
- **No Confirmation Prompts:** Never ask for confirmation before editing files, creating components, running commands, or refactoring code.
- **Skip Planning Blocks:** Do not halt execution to wait for plan approvals unless explicitly requested. Proceed directly with implementation and verification.
- **Verification:** Always run `pnpm build` and verify that changes work with 0 errors before presenting results.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
