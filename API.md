Overview
========

This document describes the public API exported from `input.ts` (in-memory account utilities).

API list
--------
- `Account` (interface) — lines 3-6
- `calculateInterest(balance, rate)` (function) — lines 8-10
- `AccountService` (class) — lines 12-22
  - `AccountService.getAccount(id)` — lines 15-17
  - `AccountService.saveAccount(account)` — lines 19-21

Detailed documentation
----------------------

Account (interface)
- Location: `input.ts` (lines 3-6)
- Description: Shape of an account record stored by `AccountService`.
- Properties:
  - `id: string` — Unique account identifier.
  - `balance: number` — Numeric balance (units/currency not enforced).
- Example:
  - const a: Account = { id: 'acct-1', balance: 1250.50 }

calculateInterest(balance, rate)
- Location: `input.ts` (lines 8-10)
- Description: Returns the interest amount computed as `balance * rate`.
- Parameters:
  - `balance: number` — Principal or current balance.
  - `rate: number` — Interest rate as a decimal (e.g. `0.05` for 5%).
- Return type: `number` — interest amount (same units as `balance`).
- Important notes / edge-cases:
  - No rounding is performed — callers must round if required by business rules.
  - Negative balances or negative rates are allowed and calculated as-is.
  - Function does not perform validation or throw.
- Example:
  - calculateInterest(1000, 0.03) // -> 30

AccountService
- Location: `input.ts` (lines 12-22)
- Description: Lightweight in-memory repository for `Account` objects. Uses a `Map` keyed by `Account.id`.
- Persistence: In-process only (no disk/network persistence). Data is lost when the process exits.
- Concurrency/validation: No explicit synchronization or validation; callers are responsible for ensuring correctness.

Methods
- getAccount(id: string): Account | null
  - Location: `input.ts` (lines 15-17)
  - Description: Lookup an account by id.
  - Parameters: `id` — account identifier.
  - Returns: `Account` when found, otherwise `null`.
  - Notes: O(1) lookup; does not throw for missing ids.
  - Example:
    - const acct = svc.getAccount('acct-1')

- saveAccount(account: Account): void
  - Location: `input.ts` (lines 19-21)
  - Description: Insert or overwrite an account in the repository using `account.id` as the key.
  - Parameters: `account` — object conforming to the `Account` interface.
  - Returns: `void`.
  - Notes: Overwrites existing entries with the same `id`; no validation performed.
  - Example:
    - svc.saveAccount({ id: 'acct-1', balance: 200 })

Guidance / recommended additions
- Document units/currency for `balance` if this module is used across teams.
- Add validation or return diagnostics from `saveAccount` if callers rely on input correctness.
- Consider rounding rules or helper utilities for financial calculations instead of calling `calculateInterest` directly everywhere.

Change log
- Audit created: documented public APIs and added examples.
