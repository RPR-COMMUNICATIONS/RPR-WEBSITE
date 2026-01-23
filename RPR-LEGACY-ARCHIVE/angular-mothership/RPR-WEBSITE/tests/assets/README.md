# Test Assets

This directory contains test assets for document quality and OCR testing.

## DJ-FAGG-ID.jpeg

This file should contain the worst-case licence image for testing document quality and OCR pipelines.

**Note:** The actual image file should be placed here. The test suite is configured to handle this file when it exists.

When the image is processed:
- Document quality tests should assert that the quality score is below the "good" threshold
- OCR tests should assert that fields are marked as "not verified" and suggest requesting a clearer copy
- The system should not crash when processing this image
- Status should be "Not yet verified – clearer copy required", not silent success

