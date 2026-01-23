import { TestBed } from '@angular/core/testing';
import { OcrService, OcrResult } from './ocr.service';

describe('OcrService', () => {
  let service: OcrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processImage', () => {
    it('should handle worst-case image (DJ-FAGG-ID.jpeg) correctly', async () => {
      // Create a mock file representing the worst-case test image
      const worstCaseImage = await createMockImageFile('DJ-FAGG-ID.jpeg');
      
      const result: OcrResult = await service.processImage(worstCaseImage);

      // Assert that the system does not crash
      expect(result).toBeDefined();
      expect(result.fields).toBeDefined();
      expect(result.overallStatus).toBeDefined();
      expect(result.message).toBeDefined();

      // Assert that some fields may be missing or low-confidence
      const lowConfidenceFields = result.fields.filter(f => f.confidence < 0.5);
      expect(lowConfidenceFields.length).toBeGreaterThan(0);

      // Assert that downstream logic marks those specific fields as "not verified"
      const unverifiedFields = result.fields.filter(f => !f.verified);
      expect(unverifiedFields.length).toBeGreaterThan(0);

      // Assert that it suggests requesting a clearer copy, rather than auto-approving or labelling as fraud
      expect(result.overallStatus).toBe('Not yet verified – clearer copy required');
      expect(result.message).toContain('not clearly legible');
      expect(result.message).toContain('clearer copy is required');
      expect(result.message).not.toContain('fraud');
      expect(result.message).not.toContain('suspicious');
      expect(result.message).not.toContain('failed');
    });

    it('should return verified status for high-quality images', async () => {
      const highQualityImage = await createMockImageFile('high-quality.jpg');
      
      const result: OcrResult = await service.processImage(highQualityImage);

      // For high-quality images, should have verified fields
      const verifiedFields = result.fields.filter(f => f.verified);
      expect(verifiedFields.length).toBeGreaterThan(0);
      expect(result.overallStatus).not.toBe('Not yet verified – clearer copy required');
    });

    it('should handle processing errors gracefully', async () => {
      // Create an invalid file to trigger error handling
      const invalidFile = new File([''], 'invalid.txt', { type: 'text/plain' });
      
      const result: OcrResult = await service.processImage(invalidFile);

      // Should return error state without crashing
      expect(result).toBeDefined();
      expect(result.overallStatus).toBe('Not yet verified – clearer copy required');
      expect(result.message).toContain('not clearly legible');
      expect(result.message).not.toContain('fraud');
      expect(result.message).not.toContain('suspicious');
    });

    it('should not use accusatory language in status messages', async () => {
      const worstCaseImage = await createMockImageFile('DJ-FAGG-ID.jpeg');
      const result: OcrResult = await service.processImage(worstCaseImage);

      // Verify that status messages do not contain accusatory language
      const message = result.message.toLowerCase();
      expect(message).not.toContain('fraud');
      expect(message).not.toContain('fraudulent');
      expect(message).not.toContain('suspicious');
      expect(message).not.toContain('failed');
      expect(message).not.toContain('reject');
    });
  });
});

/**
 * Helper function to create a mock image file for testing
 */
async function createMockImageFile(name: string): Promise<File> {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillStyle = '#000000';
    ctx.font = '10px Arial';
    ctx.fillText('Test Image', 10, 20);
  }

  return new Promise<File>((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], name, { type: 'image/jpeg' });
        resolve(file);
      } else {
        // Fallback: create empty file
        resolve(new File([''], name, { type: 'image/jpeg' }));
      }
    }, 'image/jpeg', 0.8);
  });
}

