---
pageClass: "rule-details"
sidebarDepth: 0
title: "yml/plain-scalar"
description: "require plain scalars instead of quotes scalars"
---
# yml/plain-scalar

> require plain scalars instead of quotes scalars

- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule aims to use consistent style of plain or quoted styles.

<eslint-code-block fix>

```yaml
# eslint yml/plain-scalar: 'error'

# ✓ GOOD
GOOD: GOOD

# ✗ BAD
"BAD": 'BAD'
```

</eslint-code-block>

## :wrench: Options

Nothing.

```json
{
  "yml/plain-scalar": ["error", "always" | "never"]
}
```

- `"always"` ... Enforce the use of plain style scalars.
- `"never"` ... Disallow the use of plain style scalars.

## :couple: Related rules

- [yml/quotes]

[yml/quotes]: ./quotes.md

## Implementation

- [Rule source](https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/rules/plain-scalar.ts)
- [Test source](https://github.com/ota-meshi/eslint-plugin-yml/blob/master/tests/src/rules/plain-scalar.js)