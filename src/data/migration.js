"use strict";
// Tracks which routes have moved from the legacy stack to the new
// stack during the migration window - real state, not a stub.
const routes = [
  { path: "/dashboard", migrated: true },
  { path: "/settings", migrated: true },
  { path: "/reports", migrated: false },
  { path: "/billing", migrated: false },
];

function listRoutes() {
  return routes;
}

function migrationStatus() {
  const migratedCount = routes.filter((r) => r.migrated).length;
  return {
    totalRoutes: routes.length,
    migratedCount,
    percentMigrated: Number(((migratedCount / routes.length) * 100).toFixed(1)),
  };
}

module.exports = { listRoutes, migrationStatus };
