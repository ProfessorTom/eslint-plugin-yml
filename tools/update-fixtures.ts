import { makeSuiteTests } from "../tests/utils/utils";

makeSuiteTests(
  "block-mapping",
  {
    default: [],
    never: ["never"],
    always: ["always"],
  },
  { force: true }
);

makeSuiteTests(
  "block-sequence",
  {
    default: [],
    never: ["never"],
    always: ["always"],
  },
  { force: true }
);

makeSuiteTests(
  "no-tab-indent",
  {
    default: [],
  },
  { force: true }
);

makeSuiteTests(
  "indent",
  {
    default: [],
    two: [2],
    four: [4],
    "four-with-indicator-indent-two": [4, { indicatorValueIndent: 2 }],
  },
  { force: true }
);

makeSuiteTests(
  "flow-mapping-curly-newline",
  {
    default: [],
    always: ["always"],
    never: ["never"],
  },
  { force: true }
);

makeSuiteTests(
  "flow-mapping-curly-spacing",
  {
    default: [],
    never: ["never"],
    always: ["always"],
  },
  { force: true }
);

makeSuiteTests(
  "flow-sequence-bracket-newline",
  {
    default: [],
    never: ["never"],
    always: ["always"],
  },
  { force: true }
);

makeSuiteTests(
  "flow-sequence-bracket-spacing",
  {
    default: [],
    never: ["never"],
    always: ["always"],
  },
  { force: true }
);

makeSuiteTests(
  "sort-keys",
  {
    default: [],
    desc: ["desc"],
    asc: ["asc"],
  },
  { force: true }
);

makeSuiteTests(
  "quotes",
  {
    default: [],
    double: [{ prefer: "double" }],
    single: [{ prefer: "single" }],
    "avoid-escape-false": [{ avoidEscape: false }],
  },
  { force: true }
);

makeSuiteTests(
  "plain-scalar",
  {
    default: [],
    always: ["always"],
    never: ["never"],
  },
  { force: true }
);

makeSuiteTests(
  "key-spacing",
  {
    default: [],
    "before-colon-false-after-colon-true": [
      { beforeColon: false, afterColon: true },
    ],
    "before-colon-true-after-colon-true": [
      { beforeColon: true, afterColon: true },
    ],
    "before-colon-false-after-colon-false": [
      { beforeColon: false, afterColon: false },
    ],
    "before-colon-true-after-colon-false": [
      { beforeColon: true, afterColon: false },
    ],
    "mode-minimum": [{ mode: "minimum" }],
    "align-value": [{ align: "value" }],
    "align-colon": [{ align: "colon" }],
  },
  { force: true }
);

makeSuiteTests(
  "require-string-key",
  {
    default: [],
  },
  { force: true }
);

makeSuiteTests(
  "no-empty-key",
  {
    default: [],
  },
  { force: true }
);

makeSuiteTests(
  "no-empty-mapping-value",
  {
    default: [],
  },
  { force: true }
);
makeSuiteTests(
  "no-empty-sequence-entry",
  {
    default: [],
  },
  { force: true }
);

makeSuiteTests(
  "block-sequence-hyphen-indicator-newline",
  {
    default: [],
    never: ["never", { nestedHyphen: "never" }],
    always: ["always", { nestedHyphen: "always" }],
  },
  { force: true }
);

makeSuiteTests(
  "block-mapping-question-indicator-newline",
  {
    default: [],
    never: ["never"],
    always: ["always"],
  },
  { force: true }
);

makeSuiteTests(
  "block-mapping-colon-indicator-newline",
  {
    default: [],
    never: ["never"],
    always: ["always"],
  },
  { force: true }
);

makeSuiteTests(
  "no-empty-document",
  {
    default: [],
  },
  { force: true }
);

makeSuiteTests(
  "no-multiple-empty-lines",
  {
    default: [],
    0: [{ max: 0 }],
    1: [{ max: 1 }],
    3: [{ max: 3 }],
  },
  { force: true }
);

makeSuiteTests(
  "sort-sequence-values",
  {
    desc: [{ pathPattern: ".*", order: { type: "desc" } }],
    asc: [{ pathPattern: ".*", order: { type: "asc" } }],
  },
  { force: true }
);
