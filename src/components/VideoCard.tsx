import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface VideoCardProps {
  username: string;
  description: string;
  videoUrl: string;
  avatarUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  musicName: string;
}

export default function VideoCard({
  username,
  description,
  videoUrl,
  avatarUrl,
  likes,
  comments,
  shares,
  musicName
}: VideoCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative w-full h-screen snap-start">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        loop
        playsInline
        autoPlay
        muted
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 pb-20">
        <div className="flex items-end justify-between">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>{username[0]}</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-white">{username}</span>
              <button className="px-4 py-1 text-sm font-semibold border border-white text-white rounded-md hover:bg-white/10 transition">
                Подписаться
              </button>
            </div>
            
            <p className="text-white text-sm">{description}</p>
            
            <div className="flex items-center gap-2 text-white text-xs">
              <Icon name="Music" size={14} />
              <span className="truncate">{musicName}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 ml-4">
            <button
              onClick={handleLike}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Icon
                  name="Heart"
                  size={32}
                  className={`transition-all ${
                    isLiked
                      ? 'fill-tiktok-pink text-tiktok-pink animate-like-pop'
                      : 'text-white group-hover:scale-110'
                  }`}
                />
              </div>
              <span className="text-white text-xs font-semibold">
                {likeCount > 999 ? `${(likeCount / 1000).toFixed(1)}K` : likeCount}
              </span>
            </button>
            
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <Icon
                  name="MessageCircle"
                  size={32}
                  className="text-white group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="text-white text-xs font-semibold">
                {comments > 999 ? `${(comments / 1000).toFixed(1)}K` : comments}
              </span>
            </button>
            
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <Icon
                  name="Share2"
                  size={32}
                  className="text-white group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="text-white text-xs font-semibold">
                {shares > 999 ? `${(shares / 1000).toFixed(1)}K` : shares}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
