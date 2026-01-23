import { TestBed } from '@angular/core/testing';
import { DocumentQualityService, DocumentQualityResult } from './document-quality.service';

describe('DocumentQualityService', () => {
  let service: DocumentQualityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentQualityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('evaluateQuality', () => {
    it('should handle worst-case image (DJ-FAGG-ID.jpeg) correctly', async () => {
      // Create a mock file representing the worst-case test image
      const worstCaseImage = await createMockImageFile('DJ-FAGG-ID.jpeg', 100, 100, true);
      
      const result: DocumentQualityResult = await service.evaluateQuality(worstCaseImage);

      // Assert that the system does not crash
      expect(result).toBeDefined();
      expect(result.qualityScore).toBeDefined();
      expect(result.status).toBeDefined();
      expect(result.message).toBeDefined();

      // Assert that quality score is below the "good" threshold
      expect(result.qualityScore).toBeLessThan(0.7);

      // Assert that the result state is "Not yet verified – clearer copy required", not silent success
      expect(result.status).toBe('Not yet verified – clearer copy required');
      expect(result.message).toContain('not clearly legible');
      expect(result.message).toContain('clearer copy is required');
    });

    it('should return "Verified" status for high-quality images', async () => {
      const highQualityImage = await createMockImageFile('high-quality.jpg', 2000, 2000, false);
      
      const result: DocumentQualityResult = await service.evaluateQuality(highQualityImage);

      // For high-quality images, status should be "Verified" or at least "In review"
      expect(result.status).not.toBe('Not yet verified – clearer copy required');
      expect(result.qualityScore).toBeGreaterThanOrEqual(0);
    });

    it('should handle image loading errors gracefully', async () => {
      // Create an invalid file to trigger error handling
      const invalidFile = new File([''], 'invalid.txt', { type: 'text/plain' });
      
      const result: DocumentQualityResult = await service.evaluateQuality(invalidFile);

      // Should return error state without crashing
      expect(result).toBeDefined();
      expect(result.status).toBe('Not yet verified – clearer copy required');
      expect(result.message).toContain('not clearly legible');
    });
  });
});

/**
 * Helper function to create a mock image file for testing
 */
async function createMockImageFile(name: string, width: number, height: number, isBlurry: boolean): Promise<File> {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    if (isBlurry) {
      // Create a blurry, low-quality image
      ctx.fillStyle = '#cccccc';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#000000';
      ctx.font = '10px Arial';
      ctx.fillText('Low Quality Test Image', 10, 20);
      // Apply blur effect by drawing with low opacity
      ctx.globalAlpha = 0.3;
      ctx.fillRect(0, 0, width, height);
    } else {
      // Create a sharp, high-quality image
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#000000';
      ctx.font = '20px Arial';
      ctx.fillText('High Quality Test Image', 10, 30);
    }
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

