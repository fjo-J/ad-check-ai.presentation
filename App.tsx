import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { CoverSlide } from './components/CoverSlide';
import { AIBackgroundSlide } from './components/AIBackgroundSlide';
import { CompanyOverviewSlide } from './components/CompanyOverviewSlide';
import { BusinessIntroSlide } from './components/BusinessIntroSlide';
import { ProjectHistorySlide } from './components/ProjectHistorySlide';
import { ProductOverview1Slide } from './components/ProductOverview1Slide';
import { ProductOverview2Slide } from './components/ProductOverview2Slide';
import { ProductFeaturesSlide } from './components/ProductFeaturesSlide';
import { ProductCustomizationSlide } from './components/ProductCustomizationSlide';
import { CaseStudySlide } from './components/CaseStudySlide';
import { ProductBenefitsSlide } from './components/ProductBenefitsSlide';
import { WorkReductionSlide } from './components/WorkReductionSlide';
import { PricingSlide } from './components/PricingSlide';
import { CreditCountSlide } from './components/CreditCountSlide';
import { CompetitorComparisonSlide } from './components/CompetitorComparisonSlide';
import { ConclusionSlide } from './components/ConclusionSlide';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const slides = [
    <CoverSlide key="cover" />,
    <AIBackgroundSlide key="background" />,
    <CompanyOverviewSlide key="company" />,
    <BusinessIntroSlide key="business" />,
    <ProjectHistorySlide key="projects" />,
    <ProductOverview1Slide key="product-overview-1" />,
    <ProductOverview2Slide key="product-overview-2" />,
    <ProductFeaturesSlide key="product-features" />,
    <ProductCustomizationSlide key="product-customization" />,
    <CaseStudySlide key="case-study" />,
    <ProductBenefitsSlide key="product-benefits" />,
    <WorkReductionSlide key="work-reduction" />,
    <PricingSlide key="pricing" />,
    <CreditCountSlide key="credit-count" />,
    <CompetitorComparisonSlide key="competitor-comparison" />,
    <ConclusionSlide key="conclusion" />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const exportToPDF = async () => {
    setIsExporting(true);
    
    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1920, 1080]
      });

      for (let i = 0; i < slideRefs.current.length; i++) {
        const slide = slideRefs.current[i];
        if (!slide) continue;

        // Temporarily show the slide
        const originalIndex = currentSlide;
        setCurrentSlide(i);
        
        // Wait for rendering
        await new Promise(resolve => setTimeout(resolve, 500));

        const canvas = await html2canvas(slide, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false
        });

        const imgData = canvas.toDataURL('image/png');
        
        if (i > 0) {
          pdf.addPage();
        }
        
        pdf.addImage(imgData, 'PNG', 0, 0, 1920, 1080);
        
        // Restore original slide
        setCurrentSlide(originalIndex);
      }

      pdf.save('広告チェックAI_サービス資料.pdf');
    } catch (error) {
      console.error('PDF export failed:', error);
      alert('PDF出力に失敗しました。もう一度お試しください。');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Slides Container */}
      <div className="w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`w-full h-full ${index === currentSlide ? 'block' : 'hidden'}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* PDF Export Button - Only on last slide */}
      {currentSlide === slides.length - 1 && (
        <button
          onClick={exportToPDF}
          disabled={isExporting}
          className="absolute top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded"
        >
          <Download className="w-4 h-4" />
          <span>{isExporting ? 'PDF出力中...' : 'PDF出力'}</span>
        </button>
      )}

      {/* Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50 bg-white/95 border border-gray-200 px-4 py-2 shadow-lg backdrop-blur-sm rounded-full">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1.5 bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 transition-all disabled:opacity-20 disabled:cursor-not-allowed rounded-full"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all rounded-full ${
                index === currentSlide
                  ? 'w-6 bg-[#1e3a8a]'
                  : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-1.5 bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 transition-all disabled:opacity-20 disabled:cursor-not-allowed rounded-full"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-8 bg-white/95 border border-gray-200 px-3 py-1.5 text-gray-600 text-xs backdrop-blur-sm rounded-full shadow-lg">
        <span className="text-[#1e3a8a]">{currentSlide + 1}</span> / {slides.length}
      </div>
    </div>
  );
}
