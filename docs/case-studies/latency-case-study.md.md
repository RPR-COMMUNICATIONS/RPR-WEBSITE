```markdown
# RPR-COMMUNICATIONS: SYNC INFRASTRUCTURE LATENCY CASE STUDY

## TELEMETRY OVERVIEW

- **Subject:** Measurement of Effective Sync Latency (Remote vs. Local Mirror)
- **Infrastructure:** `rclone` (Cloud Latch) ↔ macOS Google Drive `CloudStorage`
- **Authority:** THE OVERWATCH // SG-CANONICAL-2026
- **Status:** LATCHED // RE-FILED

This case study documents how long it takes for changes on the remote backup substrate to appear in the Mac Studio Google Drive mirror, and vice versa.

---

## THE LATENCY PROBE PROTOCOL

### Phase 1 — Remote → Local (rclone → Mac Drive)

**Goal:** Measure how quickly a change made via `rclone` appears in the Drive-mounted filesystem on macOS.

**Step 1: Initiate remote change**

From any shell with `rclone` configured:

```bash
rclone touch "rpr-governance:perplexity/projects/active/2026-001-RPR-WEBSITE/latency-probe.txt"
rclone ls "rpr-governance:perplexity/projects/active/2026-001-RPR-WEBSITE"
```

This confirms `latency-probe.txt` exists on the remote immediately.

**Step 2: Poll local mirror**

On Mac Studio, against the Google Drive `CloudStorage` mount:

```bash
while true; do
  date
  ls "/Users/puvansivanasan/Library/CloudStorage/GoogleDrive-hello@butterdime.com/Shared drives/RPR-COMMUNICATIONS-CANONICAL/perplexity/projects/active/2026-001-RPR-WEBSITE/latency-probe.txt" 2>/dev/null && break
  sleep 5
done
```

The elapsed time between the `rclone touch` and the first successful `ls` is the **Effective Downward Latency** (remote → local).

---

### Phase 2 — Local → Remote (Mac Drive → rclone)

**Goal:** Measure how quickly a file created in the Drive-mounted folder appears on the remote when queried via `rclone`.

**Step 1: Initiate local change**

Using Finder or a shell pointed at the Drive mount:

```bash
touch "/Users/puvansivanasan/Library/CloudStorage/GoogleDrive-hello@butterdime.com/Shared drives/RPR-COMMUNICATIONS-CANONICAL/perplexity/projects/active/2026-001-RPR-WEBSITE/latency-probe.txt"
```

**Step 2: Poll remote state**

From any terminal with `rclone`:

```bash
while true; do
  date
  rclone ls "rpr-governance:perplexity/projects/active/2026-001-RPR-WEBSITE" | grep "latency-probe.txt" && break
  sleep 5
done
```

The elapsed time between the local `touch` and the first `rclone ls` hit is the **Effective Upward Latency** (local → remote).

---

## ANALYSIS NOTES

- **Downward latency** captures how quickly automation-driven changes (e.g., backup strikes) become visible to tools reading from the Mac Drive mirror.
- **Upward latency** informs how long to wait before assuming locally created artifacts are safely latched in the remote Law Plane.
- These measurements should be repeated at different times of day to characterize typical vs. worst-case sync delay and to tune any scripted sleeps or health checks accordingly.

---

END OF CASE STUDY // SYNC_LATENCY_LATCHED
```