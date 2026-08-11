# TD_Migrationbridge_BE_nodejs

Standalone Node.js (Express) backend for the **Framework Migration
Bridge** project type — real route-based traffic splitting
(`/legacy/*` vs `/app/*`) plus a migration-status API, not a single
bare route.

Not connected to any frontend by default. The paired standalone
frontends live in `TD_Migrationbridge_FE_reactjs` and
`TD_Migrationbridge_FE_angularjs`. The fully connected version lives
in `TD_Migrationbridge_BE_nodejs_FE_reactjs_FE_angularjs`.

See ARCHITECTURE.txt for build commands and module layout.

Branches: one per Node.js version (18, 20, 22, 24).
