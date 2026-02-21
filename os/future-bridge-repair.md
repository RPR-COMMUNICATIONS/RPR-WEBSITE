⚓ TS-Λ3 // FUTURE BRIDGE REPAIR MANIFEST [v1.1.0]

Target: Harbor A Maintenance Strike (Post-Launch Window)  
Status: PENDING // AUTHORIZED_ONLY  
Authority: THE OVERWATCH // SG-CANONICAL-2026  
Mission: Transition Ollie Protocol to internal proxy to satisfy Org Policy and liquidate CORS 403 Forbidden anomalies.

---

🧬 1. INFRASTRUCTURE: FIREBASE.JSON (BRIDGE LATCH)

When authorized, ensure `firebase.json` contains the following **hosting target** configuration, with the Ollie rewrite placed **before** the catch-all `**` rule:

```jsonc
{
  "hosting": [
    {
      "target": "main",
      "public": "dist",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "cleanUrls": true,
      "trailingSlash": false,
      "redirects": [
        {
          "source": "/products",
          "destination": "/labs",
          "type": 301
        }
      ],
      "headers": [
        {
          "source": "/legal/**",
          "headers": [
            {
              "key": "Cache-Control",
              "value": "public, max-age=3600"
            },
            {
              "key": "X-Content-Type-Options",
              "value": "nosniff"
            }
          ]
        },
        {
          "source": "**/*.@(eot|otf|ttf|ttc|woff|woff2|font.css)",
          "headers": [
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            }
          ]
        }
      ],
      "rewrites": [
        {
          "source": "/api/ollieChat",
          "run": {
            "serviceId": "olliechat",
            "region": "asia-southeast1"
          }
        },
        {
          "source": "**",
          "destination": "/index.html"
        }
      ]
    }
  ],
  "functions": [
    {
      "source": "backend/functions",
      "codebase": "default",
      "ignore": [
        "node_modules",
        ".git",
        "firebase-debug.log",
        "firestore-debug.log",
        "pubsub-debug.log"
      ]
    }
  ]
}
