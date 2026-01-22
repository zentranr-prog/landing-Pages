'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface FeaturedResourceProps {
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  readTime: string;
  onRead: () => void;
}

const FeaturedResource = ({
  title,
  description,
  category,
  image,
  imageAlt,
  author,
  date,
  readTime,
  onRead,
}: FeaturedResourceProps) => {
  return (
    <article className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden shadow-brand mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative h-64 lg:h-full overflow-hidden">
          <AppImage
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center space-x-1 px-3 py-1.5 bg-accent text-accent-foreground rounded-md text-xs font-bold uppercase tracking-wider">
              <Icon name="StarIcon" size={14} variant="solid" />
              <span>Destacado</span>
            </span>
          </div>
        </div>

        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              {category}
            </span>
            <span className="text-sm text-muted-foreground flex items-center space-x-1">
              <Icon name="ClockIcon" size={16} variant="outline" />
              <span>{readTime}</span>
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
            {title}
          </h2>

          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="UserIcon" size={20} variant="solid" className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{author}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </div>

            <button
              onClick={onRead}
              className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold hover:bg-primary/90 hover:shadow-brand hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Leer ahora</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedResource;