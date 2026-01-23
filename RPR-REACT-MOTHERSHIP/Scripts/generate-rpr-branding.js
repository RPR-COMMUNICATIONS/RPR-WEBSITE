#!/usr/bin/env node
/**
 * RPR-KONTROL | SOVEREIGN BRANDING GENERATOR (v1.3.1)
 * Role: THE ENGINEER
 * Purpose: Programmatic generation of canonical SVG assets.
 * Target: RPR MOTHERSHIP V4 (Header / Footer / Kontrol Latch)
 * Authority: TS-Λ3
 * Path Safety: Absolute path resolution for cross-directory execution.
 */

const fs = require('fs');
const path = require('path');

// Absolute path resolution logic
const SCRIPT_DIR = __dirname;
const JOB_ROOT = path.resolve(SCRIPT_DIR, '..');
const REACT_MOTHERSHIP = path.join(JOB_ROOT, 'RPR-REACT-MOTHERSHIP');
const OUTPUT_DIR = path.join(REACT_MOTHERSHIP, 'src', 'assets', 'branding');

const LOGOS = {
  'rpr-communications-white.svg': `
    <svg width="260" height="40" viewBox="0 0 260 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="white" fill-opacity="0.08" />
      <path
        d="M16 4L6 9V16C6 22.14 10.27 27.85 16 30C21.73 27.85 26 22.14 26 16V9L16 4Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <text
        x="44"
        y="24"
        fill="white"
        font-family="Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        font-weight="900"
        font-size="16"
        letter-spacing="0.18em"
      >
        RPR COMMUNICATIONS, LLC
      </text>
    </svg>`,
  'google-auth-black.svg': `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="4" fill="black"/>
      <path d="M28.64 20.2045C28.64 19.5318 28.5832 18.9136 28.4695 18.3182H20.4091V21.8818H25.0441C24.8423 23.0045 24.2361 23.9545 23.327 24.5773V26.8864H26.0964C27.717 25.3727 28.64 23.0045 28.64 20.2045Z" fill="white"/>
      <path d="M20.4091 28.6364C22.6841 28.6364 24.5909 27.8682 25.96 26.5409L23.1907 24.2318C22.4216 24.7636 21.4625 25.1045 20.4091 25.1045C18.2125 25.1045 16.3507 23.6182 15.6823 21.6182H12.8225V23.8636C14.2361 26.6909 17.1136 28.6364 20.4091 28.6364Z" fill="white"/>
      <path d="M15.6823 21.6182C15.5118 21.1045 15.4109 20.5545 15.4109 20C15.4109 19.4455 15.5118 18.8955 15.6823 18.3818V16.1364H12.8225C12.2477 17.2955 11.9148 18.6091 11.9148 20C11.9148 21.3909 12.2477 22.7045 12.8225 23.8636L15.6823 21.6182Z" fill="white"/>
      <path d="M20.4091 14.8955C21.6455 14.8955 22.7561 15.3318 23.6305 16.1818L26.248 13.5636C24.6414 12.0682 22.7409 11.1364 20.4091 11.1364C17.1136 11.1364 14.2361 13.0818 12.8225 15.9091L15.6823 18.1545C16.3507 16.1545 18.2125 14.8955 20.4091 14.8955Z" fill="white"/>
    </svg>`
};

const generate = () => {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("[SENTINEL] RPR BRANDING GENERATOR | v1.3.1");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  
  if (!fs.existsSync(REACT_MOTHERSHIP)) {
    console.error(`❌ ERROR: React Mothership path not found: ${REACT_MOTHERSHIP}`);
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    console.log(`Creating directory: ${OUTPUT_DIR}`);
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  Object.entries(LOGOS).forEach(([filename, content]) => {
    const filePath = path.join(OUTPUT_DIR, filename);
    try {
      fs.writeFileSync(filePath, content.trim());
      console.log(`✅ GENERATED: ${filename}`);
    } catch (err) {
      console.error(`❌ FAILED: ${filename} - ${err.message}`);
      process.exit(1);
    }
  });
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
};

generate();