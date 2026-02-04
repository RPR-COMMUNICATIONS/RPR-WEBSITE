from playwright.sync_api import sync_playwright
import os
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Mobile View
        context_mobile = browser.new_context(viewport={"width": 390, "height": 844})
        page_mobile = context_mobile.new_page()
        try:
            page_mobile.goto("http://localhost:5173", wait_until="networkidle")
            time.sleep(2)
            # Click the second button in the right group
            page_mobile.locator("header button").last.click()
            time.sleep(1)
            page_mobile.screenshot(path="/home/jules/verification/header_mobile_menu_v2.png")
            print("Mobile menu screenshot saved.")
        except Exception as e:
            print(f"Mobile screenshot failed: {e}")

        browser.close()

if __name__ == "__main__":
    if not os.path.exists("/home/jules/verification"):
        os.makedirs("/home/jules/verification")
    run()
