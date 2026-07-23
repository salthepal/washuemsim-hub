# WUEM Simulation domain migration

Target public identity:

| Component | Name | Primary hostname |
| --- | --- | --- |
| Hub | WUEM Simulation | `wuemsim.org` |
| Education | WUEM Sim Edu | `edu.wuemsim.org` |
| Intelligence | WUEM Sim Intel | `intel.wuemsim.org` |

The existing `washuemsim.org` hostnames should remain active during the
transition so bookmarks, documentation, and existing Cloudflare Access flows
continue to work.

## Activation order

1. Register `wuemsim.org` in the Cloudflare account that owns the current
   Workers and Pages projects, then confirm that the zone is active.
2. Add `wuemsim.org` and `www.wuemsim.org` to the `washuemsim-hub` Worker and
   deploy it. The repository configuration already retains the old hostnames as
   aliases.
3. Add `edu.wuemsim.org` to the `washu-sim-edu` Worker and deploy it. Keep
   `edu.washuemsim.org` active during the transition.
4. Add `intel.wuemsim.org` as a custom domain on the `washu-sim-intel`
   Cloudflare Pages project. Keep `intel.washuemsim.org` until migration is
   complete.
5. Add the new Edu and Intel hostnames to their Cloudflare Access applications
   with the existing `wustl.edu` and administrator policies. Confirm the Access
   audience used by Edu before changing `POLICY_AUD`.
6. Add `intel.wuemsim.org` to the Turnstile widget hostname allowlist if the
   widget is hostname-restricted.
7. Verify sign-in, learner response persistence, case downloads, report
   hydration, report generation, LST workflows, shared theme behavior, and
   return-to-home links on the new hostnames.
8. Ask WashU IT to allowlist:
   - `wuemsim.org`
   - `*.wuemsim.org`
   - the Cloudflare Access team domain used for authentication
9. After an announced transition period, redirect the old public hostnames to
   their matching `wuemsim.org` destinations. Do not remove the old Access
   applications or routes until traffic and sign-in checks confirm they are no
   longer needed.

## Current external blocker

As of July 23, 2026, `wuemsim.org` has no DNS records and the Public Interest
Registry RDAP endpoint returns “not found.” Registration and Cloudflare zone
activation must happen before the new routes can be deployed.
