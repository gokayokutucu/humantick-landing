<!-- [2024-12-17] [Claude]: [MAJOR UPDATE] C2PA Integration & Spec v1.1 Approved -->

## C2PA INTEGRATION & SPEC V1.1 FINALIZED

### Background

After extensive discussion with GPT (codex), HumanTick architecture has been completely revised to be C2PA-compatible rather than a standalone system. This represents a **MAJOR ARCHITECTURE SHIFT** from spec v1.0 to v1.1.

**Key Decision:** Position HumanTick as a **C2PA + Blockchain + Governance** layer, not a competing standard.

### Spec v1.1 Created

**Status:** ✅ APPROVED by Gokay (2024-12-17)

**File:** `docs/specification/spec-v1.1.md` (549 lines)
- Complete rewrite of v1.0
- C2PA-compatible architecture
- Final Notes blueprint fully implemented
- Professional licensing (CC BY 4.0 + Apache 2.0 + PNA)

**Review:** `outputs/SPEC-V1.1-REVIEW.md`
- Coverage: 95% (Final Notes compliance)
- Quality: ⭐⭐⭐⭐⭐
- Status: APPROVED FOR MERGE

### Architecture Changes (v1.0 → v1.1)

**1. HTMark → org.humantick.hologram (C2PA assertion)**
- Embedded in C2PA manifest
- Assertion label: `org.humantick.hologram`
- Full JSON schema in Section 10

**2. ClaimId → HologramId (HID) + HologramDigest (HD)**
- HD = SHA-256(canonical C2PA manifest, excluding HT assertion)
- HID = ULID(time=Normalize(claim.generatedAt), entropy=deterministic_f(HD))
- Deterministic entropy: first 80 bits of HD
- Format: `HT-{ULID26}`

**3. DID-based Signer Identity**
- Dual-layer: X.509 (C2PA) + DID (HumanTick)
- issuerDid field in assertion
- DID document for key resolution

**4. Attribution Maps External (Not Embedded)**
- Only mapDigest in manifest
- External retrieval via mapUrl
- JCS canonicalization for MD

**5. On-chain Data Minimization Policy (NORMATIVE)**
- Section 3.3 added
- ONLY: CD, HD, signer DID, time, txRef
- NO: Payloads, maps, segments, content bytes

**6. Text/Web Profile (New Feature)**
- Section 13 added
- HTML attributes: ht-id, ht-ai-footprint, ht-ai-source, ht-kid, ht-sig
- HTSIG/1 payload format
- HT-CANON v1 canonicalization
- Ed25519 signature
- 3-method key discovery

**7. HT-CANON v1 Excludes ht-sig**
- Critical fix: ht-sig MUST NOT be in canonical bytes
- Prevents circular dependency
- Section 13.3

### GPT Recommendations Implemented

**Recommendation 1: On-chain Minimization Policy** ✅
- Section 3.3 added
- Normative MUST/MUST NOT requirements
- Rationale included

**Recommendation 2-4:** ⚠️ Can be added as Appendices D-F post-merge

### Rationale for C2PA Integration

**Industry Standard:** Adobe, Microsoft, OpenAI, Google, Meta, BBC (500+ companies)

**HumanTick Differentiation:** Blockchain, transparency log, DAO governance, decentralization

**Better Adoption:** Interoperability with existing tools

### Breaking Changes (v1.0 → v1.1)

**Major:**
1. ClaimId → HologramId (API, DB, docs)
2. Standalone → C2PA Profile (format change)

**Medium:**
3. New digests: HD, MD
4. DID-based identity

**New Feature:**
5. Text/Web Profile (HTML + HTSIG/1)

### Spec v1.1 Metrics

| Metric | v1.0 | v1.1 | Change |
|--------|------|------|--------|
| Lines | 849 | 549 | -35% ✅ |
| Normative % | ~60% | ~80% | +33% ✅ |
| C2PA refs | 0 | 30+ | NEW ✅ |

### Status

**CURRENT STATUS:** ✅ SPEC v1.1 FINALIZED

**Approval chain:**
1. ✅ GPT: Created spec v1.1
2. ✅ Claude: Reviewed & approved
3. ✅ Gokay: Final approval (2024-12-17)

**Next:** PROJECT-STATUS.md update, schemas/ update, optional appendices

---

<!-- [2024-12-17] [Claude]: Spec v1.1 approved, ready for implementation -->
