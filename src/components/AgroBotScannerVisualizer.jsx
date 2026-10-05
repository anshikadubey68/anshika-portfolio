import React, { useState } from 'react';
import { Scan, Languages, CheckCircle2, AlertCircle, Sparkles, Cpu, Layers } from 'lucide-react';

/**
 * AgroBot AI Vision & Multilingual Diagnostic Scanner
 * Simulates CNN 15-class disease classification and real-time 6-language translation.
 */
export default function AgroBotScannerVisualizer() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedSpecimen, setSelectedSpecimen] = useState(0);

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  ];

  const specimens = [
    {
      id: 'tomato-early-blight',
      crop: 'Tomato Foliage (Solanum lycopersicum)',
      condition: 'Early Blight (Alternaria solani)',
      confidence: 96.8,
      status: 'DISEASE DETECTED',
      remedies: {
        en: 'Apply copper-based fungicide spray. Prune lower infected leaves to inhibit soil splash spore dispersion.',
        hi: 'कॉपर आधारित कवकनाशी स्प्रे का उपयोग करें। मिट्टी से बीजाणु फैलने से रोकने के लिए निचली संक्रमित पत्तियों की छंटाई करें।',
        pa: 'ਕਾਪਰ ਆਧਾਰਿਤ ਉੱਲੀਨਾਸ਼ਕ ਦਾ ਛਿੜਕਾਅ ਕਰੋ। ਮਿੱਟੀ ਤੋਂ ਬੀਜਾਣੂਆਂ ਦੇ ਫੈਲਣ ਨੂੰ ਰੋਕਣ ਲਈ ਹੇਠਲੇ ਸੰਕਰਮਿਤ ਪੱਤਿਆਂ ਦੀ ਛੰਗਾਈ ਕਰੋ।',
        bn: 'কপার ভিত্তিক ছত্রাকনাশক স্প্রে প্রয়োগ করুন। মাটির স্প্ল্যাশ স্পোর ছড়ানো রোধ করতে নীচের সংক্রামিত পাতা ছাঁটাই করুন।',
        mr: 'तांबेवर आधारित बुरशीनाशक फवारणी वापरा. मातीतून बीजाणू पसरू नयेत म्हणून खालची संक्रमित पाने छाटा.',
        ta: 'தாமிரம் சார்ந்த பூஞ்சைக் கொல்லி தெளிப்பைப் பயன்படுத்துங்கள். கீழ் பாதிக்கப்பட்ட இலைகளை கவாத்து செய்யவும்.',
      },
      classDistribution: [
        { name: 'Tomato Early Blight', pct: 96.8 },
        { name: 'Tomato Late Blight', pct: 2.1 },
        { name: 'Healthy Leaf Baseline', pct: 1.1 },
      ],
    },
    {
      id: 'potato-late-blight',
      crop: 'Potato Leaf (Solanum tuberosum)',
      condition: 'Late Blight (Phytophthora infestans)',
      confidence: 94.2,
      status: 'DISEASE DETECTED',
      remedies: {
        en: 'Isolate crop canopy. Spray systemic fungicide with metalaxyl active ingredient immediately.',
        hi: 'फसल की निगरानी करें। मेटालैक्सिल सक्रिय घटक वाले कवकनाशी का तुरंत छिड़काव करें।',
        pa: 'ਫਸਲ ਨੂੰ ਅਲੱਗ ਰੱਖੋ। ਮੈਟਾਲੈਕਸਿਲ ਤੱਤ ਵਾਲੇ ਉੱਲੀਨਾਸ਼ਕ ਦਾ ਤੁਰੰਤ ਛਿੜਕਾਅ ਕਰੋ।',
        bn: 'ফসলের ছাউনি আলাদা করুন। মেটালেক্সিল সক্রিয় উপাদানযুক্ত পদ্ধতিগত ছত্রাকনাশক অবিলম্বে স্প্রে করুন।',
        mr: 'पिकाची काळजी घ्या. मेटलॅक्सिल सक्रिय घटक असलेले बुरशीनाशक त्वरित फवारा.',
        ta: 'பயிர் விதானத்தை தனிமைப்படுத்தவும். மெட்டாலாக்சில் பூஞ்சைக் கொல்லியை உடனடியாக தெளிக்கவும்.',
      },
      classDistribution: [
        { name: 'Potato Late Blight', pct: 94.2 },
        { name: 'Potato Early Blight', pct: 4.5 },
        { name: 'Healthy Leaf Baseline', pct: 1.3 },
      ],
    },
    {
      id: 'corn-healthy',
      crop: 'Maize / Corn Leaf (Zea mays)',
      condition: 'Healthy Vigorous Foliage',
      confidence: 99.1,
      status: 'OPTIMAL HEALTH',
      remedies: {
        en: 'No pathological infection detected. Maintain scheduled nitrogen-phosphorus drip fertigation.',
        hi: 'कोई रोग संक्रमण नहीं पाया गया। निर्धारित नाइट्रोजन-फास्फोरस ड्रिप उर्वरक प्रबंधन जारी रखें।',
        pa: 'ਕੋਈ ਰੋਗ ਸੰਕਰਮਣ ਨਹੀਂ ਮਿਲਿਆ। ਨਿਰਧਾਰਿਤ ਨਾਈਟ੍ਰੋਜਨ-ਫਾਸਫੋਰਸ ਤੁਪਕਾ ਖਾਦ ਪ੍ਰਬੰਧਨ ਜਾਰੀ ਰੱਖੋ।',
        bn: 'কোন রোগ সংক্রমণ শনাক্ত হয়নি। নির্ধারিত নাইট্রোজেন-ফসফরাস ড্রিপ ফার্টিগেশন বজায় রাখুন।',
        mr: 'कोणताही रोग आढळला नाही. नियमित नायट्रोजन-फॉस्फरस ठिबक खत व्यवस्थापन चालू ठेवा.',
        ta: 'நோய்த்தொற்று எதுவும் கண்டறியப்படவில்லை. திட்டமிட்ட நைட்ரஜன்-பாஸ்பரஸ் உர நிர்வாகத்தை பராமரிக்கவும்.',
      },
      classDistribution: [
        { name: 'Corn Healthy Baseline', pct: 99.1 },
        { name: 'Common Rust', pct: 0.6 },
        { name: 'Northern Leaf Blight', pct: 0.3 },
      ],
    },
  ];

  const current = specimens[selectedSpecimen];

  return (
    <div className="rounded-2xl bg-[#090b10] border border-white/10 p-5 sm:p-7 overflow-hidden flex flex-col justify-between">
      {/* Scanner Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#10b981]" />
          <span className="font-mono text-xs text-white font-bold tracking-wider">
            CNN VISION INFERENCE // 15 FOLAIR CLASSES
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="font-mono text-[11px] text-[#94a3b8]">6 LANGUAGES SUPPORTED</span>
        </div>
      </div>

      {/* Main Scanner Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-4 items-center">
        {/* Left: Specimen Inspection Viewport */}
        <div className="lg:col-span-5 relative rounded-xl overflow-hidden bg-black/60 border border-white/10 p-4 h-[220px] flex flex-col justify-between">
          {/* Laser Scanner Animation */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent shadow-[0_0_15px_#10b981] animate-bounce pointer-events-none" />

          {/* Holographic HUD Overlay */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#10b981]">
            <span>SCAN_MODE: CNN_KERAS</span>
            <span>LATENCY: 84ms</span>
          </div>

          <div className="text-center py-4">
            <div className="inline-block p-3 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 mb-2">
              <Scan className="w-8 h-8 text-[#10b981] animate-pulse" />
            </div>
            <div className="font-title text-sm font-bold text-white">{current.crop}</div>
            <div className="font-mono text-xs text-[#94a3b8] mt-0.5">{current.condition}</div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#64748b]">
            <span>CONFIDENCE: {current.confidence}%</span>
            <span className="text-[#10b981] font-bold">{current.status}</span>
          </div>
        </div>

        {/* Right: Neural Probability Distribution & Multilingual Output */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          {/* Language Selector Pills */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-mono text-xs text-[#94a3b8]">
              <Languages className="w-3.5 h-3.5 text-[#10b981]" />
              <span>SELECT LANGUAGE:</span>
            </div>

            <div className="flex flex-wrap gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all ${
                    selectedLanguage === lang.code
                      ? 'bg-[#10b981] text-[#070709] font-bold'
                      : 'bg-white/[0.04] text-[#94a3b8] hover:text-white'
                  }`}
                >
                  {lang.native}
                </button>
              ))}
            </div>
          </div>

          {/* Multilingual Diagnostic Guidance Card */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <div className="text-[10px] font-mono text-[#10b981] uppercase tracking-wider mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>AI REMEDIATION DIRECTIVE</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/95 leading-relaxed">
              {current.remedies[selectedLanguage]}
            </p>
          </div>

          {/* CNN Confidence Bars */}
          <div className="space-y-1.5 pt-1">
            {current.classDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2 font-mono text-[11px]">
                <span className="w-36 truncate text-[#94a3b8]">{item.name}</span>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#10b981] to-[#00f0ff] rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <span className="w-12 text-right text-white font-bold">{item.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Switch Specimen Samples */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06]">
        {specimens.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setSelectedSpecimen(idx)}
            className={`py-2 px-2 rounded-xl font-mono text-[11px] truncate transition-all ${
              selectedSpecimen === idx
                ? 'bg-[#10b981] text-[#070709] font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                : 'bg-white/[0.03] text-[#94a3b8] hover:bg-white/[0.06] hover:text-white border border-white/[0.06]'
            }`}
          >
            {s.id.split('-')[0].toUpperCase()} SAMPLE
          </button>
        ))}
      </div>
    </div>
  );
}

