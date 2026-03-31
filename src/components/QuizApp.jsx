import React, { useState, useEffect } from 'react';
import { Rat, Bird, Cat, Flame, Sparkles, ArrowRight, Share2, RefreshCcw } from 'lucide-react';
import { quizQuestions, calculateResult } from '../data/quizData';

const ICON_MAP = {
  hamster: Rat,
  owl: Bird,
  cheetah: Cat,
  dragon: Flame,
};

// Preload images helper
const preloadImages = () => {
  ['hamster', 'owl', 'cheetah', 'dragon'].forEach(name => {
    const img = new Image();
    img.src = `${import.meta.env.BASE_URL}images/${name}.png`;
  });
};

const ImageWithFallback = ({ src, alt, iconName }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  if (error) {
    const IconComponent = ICON_MAP[iconName] || Sparkles;
    return (
      <div className="w-64 h-64 mx-auto rounded-[40px] bg-[#FFD95A] bg-opacity-30 flex items-center justify-center text-[#9A6735] border-4 border-[#FFFDF0] shadow-xl overflow-hidden mb-6">
        <IconComponent size={80} strokeWidth={1.5} />
      </div>
    );
  }
  
  return (
    <div className="w-64 h-64 mx-auto rounded-[40px] border-4 border-[#FFFDF0] shadow-2xl overflow-hidden mb-6 bg-white shrink-0 relative">
      {loading && (
        <div className="absolute inset-0 bg-[#FFFDF0] flex items-center justify-center animate-pulse">
          <Sparkles className="text-[#FFD95A] animate-spin-slow" size={40} />
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)} 
      />
    </div>
  );
};

export default function QuizApp() {
  const [step, setStep] = useState('welcome'); // 'welcome', 'quiz', 'loading', 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(1250); // Base score
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setScore(1250);
    setCurrentQuestion(0);
    setStep('quiz');
    // Start preloading images right after user clicks start to use the quiz time for loading
    preloadImages();
  };

  const handleAnswer = (optionScore) => {
    setScore((prev) => prev + optionScore);
    
    if (currentQuestion < quizQuestions.length - 1) {
      // Auto-advance with 300ms delay for smooth transition
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setStep('loading');
      }, 300);
    }
  };

  useEffect(() => {
    if (step === 'loading') {
      const finalResult = calculateResult(score);
      setResult(finalResult);
      
      const timer = setTimeout(() => {
        setStep('result');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [step, score]);

  const handleRestart = () => {
    setScore(1250);
    setCurrentQuestion(0);
    setStep('welcome');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}images/${result.image}.png`;
    link.download = `digital-superpower-${result.image}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = () => {
    const text = `我的數位超能力是：【${result.tierName} ${result.creature}】！\n\n${result.analysis}\n\n${result.suggestion}\n\n超能力分數：${score}\n#數位超能力測驗`;
    navigator.clipboard.writeText(text).then(() => {
      alert('結果文字已複製到剪貼簿！');
    }).catch(() => {
      alert('複製失敗，請手動複製結果文字。');
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '我的數位超能力測驗結果',
        text: `我的數位超能力是：【${result.tierName} ${result.creature}】！\n來測測你在數位時代的超能力吧！`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      handleCopy();
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 selection:bg-[#FFD95A] selection:text-[#432818] font-sans">
      <div className="w-full max-w-lg mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
        
        {/* Decorative corner blobs */}
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#FFD95A] rounded-full opacity-20 filter blur-2xl"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#FFB26B] rounded-full opacity-20 filter blur-2xl"></div>

        <div className="relative z-10 w-full">
          {step === 'welcome' && (
            <div className="flex flex-col items-center text-center space-y-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-[#FFD95A] to-[#FFB26B] rounded-[28px] shadow-lg flex items-center justify-center transform -rotate-3 mb-2">
                <Sparkles size={48} className="text-white drop-shadow-sm" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-black text-[#432818] leading-tight tracking-tight px-2 mb-4">
                  數位超能力測驗
                </h1>
                <div className="space-y-5">
                  <p className="text-xl text-[#9A6735] font-bold opacity-90 leading-relaxed">
                    整理報表做到兩眼發直?
                  </p>
                  <p className="text-xl text-[#9A6735] font-bold opacity-90 leading-relaxed">
                    還是叫AI神隊友來幫忙?
                  </p>
                  <p className="text-xl text-[#9A6735] font-bold mx-auto leading-relaxed opacity-90">
                    測出數位 AI 時代的超能力
                  </p>
                </div>
              </div>

              <button 
                onClick={handleStart}
                className="group relative w-full sm:w-auto px-8 py-4 bg-[#FFB26B] hover:bg-[#ff9e42] transition-all duration-300 rounded-3xl font-bold text-white text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex items-center justify-center gap-2">
                  <span>解鎖我的進化旅程</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          )}

          {step === 'quiz' && (
            <div className="py-2 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-bold tracking-wide text-[#FFB26B] uppercase">
                    Question {currentQuestion + 1} <span className="text-[#9A6735] opacity-50">/ {quizQuestions.length}</span>
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-3 bg-[#FFFDF0] rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-[#FFD95A] to-[#FFB26B] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-8 space-y-2">
                {/* Removed Category Title as requested */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#432818] leading-relaxed whitespace-pre-line">
                  {quizQuestions[currentQuestion].question.replace('你的直覺行動是？', '\n你的直覺行動是？')}
                </h2>
              </div>

              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-5 rounded-3xl bg-[#FFFDF0] hover:bg-[#FFFEFA] border-2 border-transparent hover:border-[#FFD95A] transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] group flex gap-4"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#9A6735] font-bold shadow-sm group-hover:bg-[#FFD95A] group-hover:text-white transition-colors">
                      {option.id}
                    </span>
                    <span className="text-[1.05rem] text-[#432818] font-medium my-auto leading-snug">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'loading' && (
            <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-[#FFFDF0] border-t-[#FFB26B] rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="text-[#9A6735] animate-pulse" size={24} />
                </div>
              </div>
              <h2 className="mt-8 text-xl font-bold text-[#432818] animate-pulse relative inline-block">
                正在計算你的數位超能力...
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD95A] to-transparent rounded-full overflow-hidden">
                  <span className="absolute inset-0 bg-[#FFB26B] scale-x-0 origin-left animate-[loadingBar_1.5s_ease-in-out_infinite]"></span>
                </span>
                <style>{`
                  @keyframes loadingBar {
                    0% { transform: scaleX(0); transform-origin: left; }
                    50% { transform: scaleX(1); transform-origin: left; }
                    51% { transform: scaleX(1); transform-origin: right; }
                    100% { transform: scaleX(0); transform-origin: right; }
                  }
                `}</style>
              </h2>
            </div>
          )}

          {step === 'result' && result && (
            <div className="flex flex-col items-center text-center animate-in zoom-in-95 fade-in duration-500">
              <div className="mb-6">
                <ImageWithFallback 
                  src={`images/${result.image}.png`}
                  alt={result.creature}
                  iconName={result.image} 
                />
              </div>
              
              <div className="space-y-2 mb-8">
                <h3 className="text-lg font-bold text-[#9A6735] tracking-widest uppercase opacity-70">
                  {result.tierName}
                </h3>
                <h2 className="text-4xl sm:text-5xl font-black text-[#432818] tracking-tight mb-4">
                  {result.creature}
                </h2>
                
                {/* Prominent Score Display */}
                <div className="inline-flex flex-col items-center justify-center px-8 py-3 bg-[#FFFDF0] rounded-3xl border-2 border-[#FFD95A] shadow-md transform -rotate-1">
                  <span className="text-xs font-bold text-[#9A6735] tracking-wider mb-1">超能力分數</span>
                  <span className="text-4xl font-black text-[#FFB26B] drop-shadow-sm">
                    {score.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="w-full text-left space-y-6 mb-8">
                <div className="p-7 sm:p-8 rounded-[36px] bg-white border-2 border-[#FFFDF0] shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#FFD95A]"></div>
                  <h4 className="text-lg font-black text-[#432818] mb-4 flex items-center gap-2">
                    <Sparkles size={20} className="text-[#FFB26B]" /> 超能力解析
                  </h4>
                  <div className="space-y-5 text-[#432818] text-lg leading-relaxed font-medium">
                    <p>{result.analysis}</p>
                    <p>{result.suggestion}</p>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={handleRestart}
                    className="py-4 bg-[#FFFDF0] text-[#9A6735] font-bold rounded-2xl hover:bg-[#FFFEFA] border border-transparent hover:border-[#FFD95A] transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCcw size={18} />
                    再測一次
                  </button>
                  <button 
                    onClick={handleShare}
                    className="py-4 bg-[#FFB26B] text-white font-bold rounded-2xl shadow-lg hover:bg-[#ff9e42] hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 size={18} />
                    分享結果
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
