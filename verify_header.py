from playwright.sync_api import sync_playwright
import os
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Desktop View
        context_desktop = browser.new_context(viewport={"width": 1280, "height": 800})
        page_desktop = context_desktop.new_page()
        try:
            page_desktop.goto("http://localhost:5173", wait_until="networkidle")
            # Wait for any animations
            time.sleep(2)
            page_desktop.screenshot(path="/home/jules/verification/header_desktop.png")
            print("Desktop screenshot saved.")
        except Exception as e:
            print(f"Desktop screenshot failed: {e}")

        # Mobile View
        context_mobile = browser.new_context(viewport={"width": 390, "height": 844})
        page_mobile = context_mobile.new_page()
        try:
            page_mobile.goto("http://localhost:5173", wait_until="networkidle")
            # Click hamburger menu
            page_mobile.click("button >> i:has-text('Menu')") # Adjust selector if needed
            # Actually Header.tsx uses lucide icons, I should probably look for the button with Menu or X
            # Let's try to find the button that has the Menu icon
            page_mobile.locator("header button").nth(1).click()
            time.sleep(1)
            page_mobile.screenshot(path="/home/jules/verification/header_mobile_menu.png")
            print("Mobile menu screenshot saved.")
        except Exception as e:
            print(f"Mobile screenshot failed: {e}")

        # Audit File
        page_audit = browser.new_page(viewport={"width": 390, "height": 1200})
        try:
            audit_path = os.path.abspath("AUDIT/mobile_fidelity_audit.html")
            page_audit.goto(f"file://{audit_path}", wait_until="networkidle")
            page_audit.screenshot(path="/home/jules/verification/audit_visualization.png")
            print("Audit visualization screenshot saved.")
        except Exception as e:
            print(f"Audit visualization failed: {e}")

        browser.close()

if __name__ == "__main__":
    if not os.path.exists("/home/jules/verification"):
        os.makedirs("/home/jules/verification")
    run()
