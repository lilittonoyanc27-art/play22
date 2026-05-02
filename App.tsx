import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  RotateCcw, 
  ArrowRight, 
  Sparkles,
  Trophy,
  Crown,
  Star,
  Info,
  BookOpen,
  ThumbsUp,
  XCircle,
  Flag,
  Target,
  ChevronUp,
  Candy,
  Wand2,
  Gift
} from 'lucide-react';
import { RACE_DATA, SOLER_CONJUGATION, SolerQuestion } from './constants';

type Player = 'Gor' | 'Gayane';
type GameState = 'start' | 'theory' | 'playing' | 'results';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentPlayer, setCurrentPlayer] = useState<Player>('Gor');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({ Gor: 0, Gayane: 0 });
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [shuffledQuests, setShuffledQuests] = useState<SolerQuestion[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (gameState === 'start') {
      setShuffledQuests([...RACE_DATA].sort(() => 0.5 - Math.random()));
    }
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setCurrentIndex(0);
    setScores({ Gor: 0, Gayane: 0 });
    setCurrentPlayer('Gor');
    setFeedback(null);
    setShowExplanation(false);
  };

  const handleAnswer = (answer: string) => {
    if (feedback) return;
    const isCorrect = answer === shuffledQuests[currentIndex].correct;
    if (isCorrect) {
      setScores(prev => ({ ...prev, [currentPlayer]: prev[currentPlayer] + 1 }));
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    setFeedback(null);
    setShowExplanation(false);
    if (currentIndex < 14) {
      setCurrentIndex(prev => prev + 1);
      setCurrentPlayer(prev => prev === 'Gor' ? 'Gayane' : 'Gor');
    } else {
      setGameState('results');
    }
  };

  const winner = scores.Gor > scores.Gayane ? 'Gor' : scores.Gayane > scores.Gor ? 'Gayane' : 'Draw';

  return (
    <div className="min-h-screen bg-[#F5F3FF] text-slate-900 font-sans flex flex-col overflow-x-hidden selection:bg-purple-400 selection:text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
         <motion.div 
           animate={{ y: [-20, 20], x: [-10, 10] }}
           transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
           className="absolute top-20 left-10 text-purple-300"
         ><Sparkles size={120} /></motion.div>
         <motion.div 
           animate={{ y: [20, -20], x: [10, -10] }}
           transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
           className="absolute bottom-20 right-10 text-pink-300"
         ><Star size={100} /></motion.div>
      </div>

      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-b-4 border-purple-900 px-4 md:px-6 py-4 z-50 sticky top-0 shadow-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className={`p-2 rounded-2xl flex items-center gap-3 transition-all duration-500 ${currentPlayer === 'Gor' ? 'bg-white text-purple-900 scale-110 shadow-lg' : 'opacity-50'}`}>
             <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black ${currentPlayer === 'Gor' ? 'bg-purple-100' : 'bg-white/20'}`}>Գ</div>
             <div className="hidden sm:block">
               <p className="text-[8px] font-black uppercase tracking-widest">ԽԱՂԱՑՈՂ 1</p>
               <p className="text-sm font-black italic">ԳՈՌ ({scores.Gor})</p>
             </div>
             {currentPlayer === 'Gor' && <ChevronUp className="text-purple-600 animate-bounce" size={20} />}
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-black/20 px-4 py-1 rounded-full border border-white/20 flex items-center gap-2">
               <Wand2 size={16} className="text-yellow-300" />
               <span className="text-xs font-black uppercase tracking-widest">
                  ՄՐՑԱՎԱԶՔ՝ {currentIndex + 1} / 15
               </span>
            </div>
          </div>

          <div className={`p-2 rounded-2xl flex items-center gap-3 transition-all duration-500 ${currentPlayer === 'Gayane' ? 'bg-white text-pink-900 scale-110 shadow-lg' : 'opacity-50'}`}>
             {currentPlayer === 'Gayane' && <ChevronUp className="text-pink-600 animate-bounce" size={20} />}
             <div className="hidden sm:block text-right">
               <p className="text-[8px] font-black uppercase tracking-widest">ԽԱՂԱՑՈՂ 2</p>
               <p className="text-sm font-black italic">ԳԱՅԱՆԵ ({scores.Gayane})</p>
             </div>
             <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black ${currentPlayer === 'Gayane' ? 'bg-pink-100' : 'bg-white/20'}`}>Գ</div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8 relative z-10">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-12 py-10"
            >
              <div className="relative group">
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="bg-white p-4 md:p-6 rounded-[4rem] shadow-2xl border-8 border-purple-100"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600" 
                    alt="Magic Castle" 
                    className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[3rem] shadow-lg"
                  />
                  <div className="absolute -top-10 -left-10 bg-yellow-400 p-6 rounded-full shadow-2xl border-4 border-white -rotate-12">
                     <Crown size={50} className="text-purple-950" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-pink-500 p-6 rounded-full shadow-2xl border-4 border-white rotate-12">
                     <Gift size={50} className="text-white" />
                  </div>
                </motion.div>
                <div className="absolute -inset-10 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
              </div>

              <div className="space-y-4 px-4 w-full flex flex-col items-center">
                <h1 className="text-3xl sm:text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-purple-900 drop-shadow-md break-all w-full max-w-full">
                   ՃԱՄՓՈՐԴՈՒԹՅՈՒՆ
                </h1>
                <p className="text-purple-800/40 font-black uppercase text-xs md:text-sm tracking-[0.4em]">
                  ԳՈՌ VS ԳԱՅԱՆԵ • VERB SOLER
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <button 
                  onClick={() => setGameState('theory')}
                  className="flex-1 py-6 bg-white border-4 border-purple-600 text-purple-900 rounded-[2.5rem] font-black text-xl uppercase tracking-widest hover:bg-purple-50 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <BookOpen size={28} /> ԿԱՆՈՆՆԵՐ
                </button>
                <button 
                  onClick={startGame}
                  className="flex-1 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-[2.5rem] font-black text-xl uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  <Flag size={28} /> ՍԿՍԵԼ
                </button>
              </div>
            </motion.div>
          )}

          {gameState === 'theory' && (
            <motion.div 
              key="theory"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full max-w-4xl mx-auto space-y-8 py-8"
            >
              <div className="bg-white border-8 border-purple-100 p-8 md:p-14 rounded-[4rem] shadow-2xl">
                 <h2 className="text-4xl md:text-6xl font-black text-purple-950 italic uppercase mb-10 border-b-4 border-purple-50 pb-6 flex items-center gap-5">
                    <Wand2 size={40} className="text-pink-500" /> SOLER ԲԱՅԸ
                 </h2>

                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {SOLER_CONJUGATION.map((item, i) => (
                      <div key={i} className="bg-purple-50 p-6 rounded-[2.5rem] border-2 border-purple-100 hover:bg-white hover:border-pink-300 transition-all group">
                        <p className="text-[10px] font-black uppercase text-purple-400 tracking-[0.2em] mb-2">{item.subject}</p>
                        <p className="text-3xl font-black text-purple-900 group-hover:text-pink-600 transition-colors">{item.conjugation}</p>
                        <p className="text-[10px] text-purple-300 font-bold mt-2 uppercase italic">{item.note}</p>
                      </div>
                    ))}
                 </div>

                 <div className="mt-10 p-8 bg-pink-50 rounded-[3rem] border-4 border-pink-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles size={60} /></div>
                    <h4 className="font-black text-pink-600 uppercase text-xs tracking-widest mb-4 flex items-center gap-3">
                       <Info size={18} /> ԿԱԽԱՐԴԱԿԱՆ ՀՈՒՇՈՒՄ՝
                    </h4>
                    <p className="text-purple-900 font-bold text-lg md:text-2xl leading-relaxed italic">
                      "Soler" բայը օգտագործվում է, երբ ուզում ենք ասել, որ մի բան <span className="text-pink-600 underline decoration-wavy">ՍՈՎՈՐԱԲԱՐ</span> ենք անում:
                    </p>
                 </div>
              </div>

              <button 
                onClick={startGame}
                className="w-full py-8 bg-purple-900 text-white rounded-[3rem] font-black text-2xl uppercase tracking-widest hover:bg-black transition-all shadow-2xl flex items-center justify-center gap-4 border-4 border-purple-800"
              >
                ՊԱՏՐԱՍՏ ԵՄ ՄՐՑԱՎԱԶՔԻՆ <ArrowRight size={32} />
              </button>
            </motion.div>
          )}

          {gameState === 'playing' && (
            <div className="flex-1 flex flex-col gap-8">
              {/* Journey Map Path */}
              <div className="w-full bg-white rounded-[2.5rem] p-4 md:p-6 border-4 border-purple-100 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="flex items-center justify-between px-2 mb-2">
                   <p className="text-[10px] font-black uppercase text-purple-400 tracking-widest">ՃԱՄՓՈՐԴՈՒԹՅԱՆ ՈՒՂԻ</p>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-500 rounded-full" /><span className="text-[10px] font-bold">ԳՈՌ</span></div>
                      <div className="flex items-center gap-1"><div className="w-2 h-2 bg-pink-500 rounded-full" /><span className="text-[10px] font-bold">ԳԱՅԱՆԵ</span></div>
                   </div>
                </div>
                
                <div className="h-12 w-full bg-slate-100 rounded-full relative p-1 flex flex-col justify-center gap-1">
                   {/* Track for Gor */}
                   <div className="h-4 w-full relative">
                      <motion.div 
                        initial={false}
                        animate={{ left: `${Math.min((scores.Gor / 8) * 100, 95)}%` }}
                        transition={{ type: "spring", stiffness: 50 }}
                        className="absolute top-0"
                      >
                         <div className="bg-purple-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black shadow-lg border-2 border-white -translate-y-2">Գ</div>
                      </motion.div>
                   </div>
                   {/* Track for Gayane */}
                   <div className="h-4 w-full relative">
                      <motion.div 
                        initial={false}
                        animate={{ left: `${Math.min((scores.Gayane / 7) * 100, 95)}%` }}
                        transition={{ type: "spring", stiffness: 50 }}
                        className="absolute top-0"
                      >
                         <div className="bg-pink-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black shadow-lg border-2 border-white -translate-y-2">Գ</div>
                      </motion.div>
                   </div>
                   <div className="absolute right-2 top-1/2 -translate-y-1/2 text-yellow-500"><Trophy size={20} /></div>
                </div>
              </div>

              <div className="flex-1 flex flex-col lg:flex-row gap-8">
                {/* Question Area */}
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full flex flex-col gap-6"
                >
                  <div className={`bg-white p-6 md:p-14 rounded-[3rem] md:rounded-[4rem] border-8 shadow-2xl relative overflow-hidden flex-1 ${currentPlayer === 'Gor' ? 'border-purple-200' : 'border-pink-200'}`}>
                     <div className={`absolute top-0 left-0 w-full h-3 ${currentPlayer === 'Gor' ? 'bg-purple-500' : 'bg-pink-500'}`} />
                     
                     <div className="flex items-center justify-between mb-6 md:mb-8">
                        <div className={`px-4 py-2 rounded-full border-2 flex items-center gap-3 ${currentPlayer === 'Gor' ? 'bg-purple-50 border-purple-100 text-purple-900' : 'bg-pink-50 border-pink-100 text-pink-900'}`}>
                           <span className="text-xl md:text-2xl">{shuffledQuests[currentIndex]?.icon}</span>
                           <span className="text-[10px] md:text-sm font-black uppercase tracking-widest">{currentPlayer}-Ի ՀԵՐԹՆ Է</span>
                        </div>
                        {shuffledQuests[currentIndex]?.category === 'candy' ? <Candy className="text-pink-400" size={20} /> : <Sparkles className="text-purple-400" size={20} />}
                     </div>

                     <p className="text-slate-400 font-black text-[10px] md:text-xs tracking-widest uppercase mb-4">
                       ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ՝ {shuffledQuests[currentIndex]?.translation}
                     </p>

                     <h2 className="text-lg sm:text-2xl md:text-5xl font-black text-slate-800 leading-tight uppercase italic mb-8 md:mb-12 min-h-[100px] md:min-h-[120px]">
                       {shuffledQuests[currentIndex]?.sentence.split('____').map((part, i) => (
                         <React.Fragment key={i}>
                           {part}
                           {i < shuffledQuests[currentIndex]?.sentence.split('____').length - 1 && (
                             <span className={`inline-block border-b-4 md:border-b-8 mx-1 md:mx-2 transition-all duration-300 px-2 md:px-6 min-w-[80px] md:min-w-[200px] text-center ${feedback ? (feedback === 'correct' ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500') : 'text-slate-100 border-slate-200 border-dashed'}`}>
                               {feedback ? shuffledQuests[currentIndex].correct : '____'}
                             </span>
                           )}
                         </React.Fragment>
                       ))}
                     </h2>

                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                        {shuffledQuests[currentIndex]?.options.map((opt, i) => (
                          <button
                            key={i}
                            disabled={!!feedback}
                            onClick={() => handleAnswer(opt)}
                            className={`
                              py-5 md:py-8 px-4 rounded-[1.5rem] md:rounded-[2.5rem] font-black text-lg md:text-2xl italic uppercase transition-all duration-300 border-4
                              ${feedback && opt === shuffledQuests[currentIndex].correct 
                                ? 'bg-green-500 border-green-400 text-white shadow-xl scale-105 z-10' 
                                : feedback && opt !== shuffledQuests[currentIndex].correct
                                  ? 'bg-slate-50 border-slate-100 text-slate-300 opacity-30 cursor-not-allowed'
                                  : `bg-white ${currentPlayer === 'Gor' ? 'border-purple-100 text-purple-900 hover:border-purple-400' : 'border-pink-100 text-pink-900 hover:border-pink-400'} shadow-md active:scale-95`
                              }
                            `}
                          >
                            {opt}
                          </button>
                        ))}
                     </div>
                  </div>

                  <AnimatePresence>
                    {showExplanation && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-6 md:p-10 rounded-[3rem] text-white shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10 ${feedback === 'correct' ? 'bg-green-600' : 'bg-red-600'}`}
                      >
                         <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 border-4 shadow-xl ${feedback === 'correct' ? 'bg-green-400 border-green-300 animate-bounce' : 'bg-red-400 border-red-300'}`}>
                            {feedback === 'correct' ? <ThumbsUp size={40} /> : <XCircle size={40} />}
                         </div>
                         <div className="flex-1 text-center md:text-left">
                            <p className="text-white/60 font-black uppercase text-[10px] tracking-[0.3em] mb-2">ԲԱՑԱՏՐՈՒԹՅՈՒՆ</p>
                            <p className="text-xl md:text-3xl font-bold italic mb-6 md:mb-8 leading-snug">"{shuffledQuests[currentIndex].explanation}"</p>
                            <button 
                              onClick={handleNext}
                              className="w-full md:w-auto bg-white text-slate-900 px-10 md:px-16 py-4 md:py-6 rounded-2xl font-black uppercase text-lg md:text-xl tracking-widest transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-4"
                            >
                               ՀԱՋՈՐԴԸ {currentIndex === 14 ? 'ԱՎԱՐՏ' : <ArrowRight size={24} />}
                            </button>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          )}

          {gameState === 'results' && (
            <motion.div 
              key="results"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-12 py-10"
            >
              <div className="relative">
                 <motion.div 
                   animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                   }} 
                   transition={{ repeat: Infinity, duration: 4 }}
                   className={`w-72 h-72 md:w-96 md:h-96 rounded-[5rem] md:rounded-[7rem] flex items-center justify-center mx-auto shadow-3xl border-8 ${winner === 'Gor' ? 'border-purple-500 bg-purple-50' : winner === 'Gayane' ? 'border-pink-500 bg-pink-50' : 'border-slate-500 bg-slate-50'}`}
                 >
                    {winner === 'Draw' ? <Trophy size={160} className="text-slate-300" /> : <Crown size={180} className={winner === 'Gor' ? 'text-purple-500' : 'text-pink-500'} />}
                 </motion.div>
                 <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-12 py-4 rounded-full font-black text-2xl text-purple-900 shadow-2xl border-4 border-purple-100 flex items-center gap-3">
                    <Sparkles className="text-yellow-500" /> {winner === 'Draw' ? 'ՀԱՎԱՍԱՐ' : 'ՀԱՂԹԱՆԱԿ'} <Sparkles className="text-yellow-500" />
                 </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-7xl md:text-9xl font-black italic uppercase text-purple-900 tracking-tighter leading-none">
                  {winner === 'Draw' ? "ՈՉ-ՈՔԻ" : `${winner === 'Gor' ? 'ԳՈՌԸ' : 'ԳԱՅԱՆԵՆ'} ՀԱՂԹԵՑ`}
                </h2>
                <div className="flex justify-center gap-14 py-12">
                   <div className="flex flex-col items-center gap-4">
                      <div className="w-24 h-24 bg-purple-500 rounded-[2rem] flex items-center justify-center text-white text-4xl font-black shadow-xl border-4 border-white">Գ</div>
                      <p className="text-4xl font-black text-purple-900">{scores.Gor}</p>
                      <p className="text-xs font-black text-purple-300 uppercase tracking-widest leading-none">ԳՈՌ</p>
                   </div>
                   <div className="flex flex-col items-center gap-4">
                      <div className="w-24 h-24 bg-pink-500 rounded-[2rem] flex items-center justify-center text-white text-4xl font-black shadow-xl border-4 border-white">Գ</div>
                      <p className="text-4xl font-black text-pink-900">{scores.Gayane}</p>
                      <p className="text-xs font-black text-pink-300 uppercase tracking-widest leading-none">ԳԱՅԱՆԵ</p>
                   </div>
                </div>
              </div>

              <button 
                onClick={() => setGameState('start')}
                className={`group px-16 py-8 bg-purple-900 text-white rounded-[3rem] font-black text-2xl uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-5 shadow-2xl active:scale-95 border-4 border-purple-800`}
              >
                <RotateCcw size={32} className="group-hover:rotate-180 transition-transform duration-1000" /> ՆՈՐԻՑ ԽԱՂԱԼ
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="p-8 text-center opacity-30 mt-auto">
         <p className="text-[10px] font-black uppercase tracking-[0.6em] text-purple-900">
           ԳՈՌ VS ԳԱՅԱՆԵ • JOURNEY CHALLENGE • 2026
         </p>
      </footer>
    </div>
  );
}
