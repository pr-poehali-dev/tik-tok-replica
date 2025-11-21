import { useRef, useState, useEffect } from 'react';
import VideoCard from '@/components/VideoCard';

const videos = [
  {
    id: 1,
    username: '@dance_pro',
    description: 'Новый танец под трек 🔥 Повторишь? #dance #viral',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-person-dancing-in-a-studio-5372-large.mp4',
    likes: 1245000,
    comments: 8234,
    shares: 3421,
    musicName: 'Original sound - dance_pro'
  },
  {
    id: 2,
    username: '@travel_world',
    description: 'Закат на Бали - место, где хочется остаться навсегда 🌅 #travel #bali',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sunset-over-the-sea-4119-large.mp4',
    likes: 892000,
    comments: 5123,
    shares: 2890,
    musicName: 'Chill Vibes - Tropical Sound'
  },
  {
    id: 3,
    username: '@food_lover',
    description: 'Идеальный стейк за 5 минут 🥩 Сохрани рецепт! #food #cooking',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-4278-large.mp4',
    likes: 654000,
    comments: 4567,
    shares: 1234,
    musicName: 'Kitchen Beats - Chef Mode'
  },
  {
    id: 4,
    username: '@fitness_guru',
    description: 'Тренировка пресса - всего 3 упражнения! 💪 #fitness #workout',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-athlete-doing-exercises-726-large.mp4',
    likes: 1567000,
    comments: 9876,
    shares: 4321,
    musicName: 'Gym Motivation - Power Up'
  }
];

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const videoHeight = window.innerHeight;
      const newIndex = Math.round(scrollPosition / videoHeight);
      setCurrentVideo(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
      >
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>

      <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-center p-4">
        <div className="flex items-center gap-6">
          <button className="text-white/60 text-lg font-semibold hover:text-white transition">
            Подписки
          </button>
          <button className="text-white text-lg font-bold border-b-2 border-white pb-1">
            Для вас
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="flex items-center justify-around py-2">
          <button className="flex flex-col items-center gap-1 p-2">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 3v2.01L3 11v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9l-6-5.99V3H9zm3 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            <span className="text-xs text-white">Главная</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 p-2">
            <svg className="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <span className="text-xs text-white/60">Поиск</span>
          </button>
          
          <button className="relative -mt-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-tiktok-cyan via-white to-tiktok-pink flex items-center justify-center">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4v16m8-8H4"/>
              </svg>
            </div>
          </button>
          
          <button className="flex flex-col items-center gap-1 p-2">
            <svg className="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
            <span className="text-xs text-white/60">Входящие</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 p-2">
            <svg className="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
            <span className="text-xs text-white/60">Профиль</span>
          </button>
        </div>
      </div>
    </div>
  );
}
