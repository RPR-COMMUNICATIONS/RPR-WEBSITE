import { Injectable } from '@angular/core';

export interface DocumentQualityResult {
  qualityScore: number;
  dpi: number;
  blurScore: number;
  status: 'Verified' | 'In review' | 'More information requested' | 'Not yet verified – clearer copy required';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentQualityService {
  private readonly GOOD_QUALITY_THRESHOLD = 0.7;
  private readonly MIN_DPI = 300;
  private readonly MAX_BLUR_SCORE = 0.3;

  /**
   * Evaluates document quality from an image file
   * @param imageFile The image file to evaluate
   * @returns Promise with quality assessment
   */
  async evaluateQuality(imageFile: File): Promise<DocumentQualityResult> {
    try {
      // Load image and analyze
      const imageData = await this.loadImageData(imageFile);
      const dpi = this.calculateDPI(imageData);
      const blurScore = this.calculateBlurScore(imageData);
      const qualityScore = this.calculateQualityScore(dpi, blurScore);

      // Determine status based on quality metrics
      let status: DocumentQualityResult['status'];
      let message: string;

      if (qualityScore >= this.GOOD_QUALITY_THRESHOLD && dpi >= this.MIN_DPI && blurScore <= this.MAX_BLUR_SCORE) {
        status = 'Verified';
        message = 'Document quality is acceptable.';
      } else if (qualityScore >= 0.5) {
        status = 'In review';
        message = 'Document quality is being reviewed.';
      } else if (qualityScore >= 0.3) {
        status = 'More information requested';
        message = 'Additional information may be required.';
      } else {
        status = 'Not yet verified – clearer copy required';
        message = 'The identification image is not clearly legible. A clearer copy is required before this information can be verified.';
      }

      return {
        qualityScore,
        dpi,
        blurScore,
        status,
        message
      };
    } catch (error) {
      console.error('Error evaluating document quality:', error);
      return {
        qualityScore: 0,
        dpi: 0,
        blurScore: 1,
        status: 'Not yet verified – clearer copy required',
        message: 'The identification image is not clearly legible. A clearer copy is required before this information can be verified.'
      };
    }
  }

  private async loadImageData(file: File): Promise<ImageData> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        resolve(imageData);
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  }

  private calculateDPI(imageData: ImageData): number {
    // Simplified DPI calculation - in production, this would use actual image metadata
    // For now, estimate based on dimensions (assuming typical screen capture is ~96 DPI)
    const baseDPI = 96;
    const widthInches = imageData.width / baseDPI;
    // Estimate: larger images typically have better DPI
    return Math.min(600, baseDPI * (1 + Math.log10(imageData.width / 100)));
  }

  private calculateBlurScore(imageData: ImageData): number {
    // Simplified blur detection using Laplacian variance
    // Lower variance = more blur
    let variance = 0;
    let mean = 0;
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;

    // Calculate mean
    for (let i = 0; i < data.length; i += 4) {
      const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
      mean += gray;
    }
    mean /= (width * height);

    // Calculate variance
    for (let i = 0; i < data.length; i += 4) {
      const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
      variance += Math.pow(gray - mean, 2);
    }
    variance /= (width * height);

    // Normalize to 0-1 range (higher = more blur)
    // Typical variance for sharp images: 1000-5000, blurry: <500
    return Math.max(0, Math.min(1, 1 - (variance / 5000)));
  }

  private calculateQualityScore(dpi: number, blurScore: number): number {
    const dpiScore = Math.min(1, dpi / this.MIN_DPI);
    const blurScoreNormalized = 1 - blurScore; // Invert so higher = better
    return (dpiScore * 0.5 + blurScoreNormalized * 0.5);
  }
}

