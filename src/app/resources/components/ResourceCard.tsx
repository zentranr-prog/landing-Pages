'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  tags: string[];
  type: 'blog' | 'whitepaper' | 'webinar';
  onDownload?: () => void;
  onRead?: () => void;
}

const ResourceCard = ({
  title,
  description,
  category,
  readTime,
  image,
  imageAlt,
  author,
  date,
  tags,
  type,
  onDownload,
  onRead,
}: ResourceCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'blog':
        return 'DocumentTextIcon';
      case 'whitepaper':
        return 'DocumentArrowDownIcon';
      case 'webinar':
        return 'VideoCameraIcon';
      default:
        return 'DocumentTextIcon';
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'blog':
        return 'Artículo';
      case 'whitepaper':
        return 'Whitepaper';
      case 'webinar':
        return 'Webinar';
      default:
        return 'Recurso';
    }
  };

  return (
    <article className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center space-x-1 px-3 py-1 bg-primary text-primary-foreground rounded-md text-xs font-semibold">
            <Icon name={getTypeIcon() as any} size={14} variant="solid" />
            <span>{getTypeLabel()}</span>
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            {category}
          </span>
          <span className="text-xs text-muted-foreground flex items-center space-x-1">
            <Icon name="ClockIcon" size={14} variant="outline" />
            <span>{readTime}</span>
          </span>
        </div>

        <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="UserIcon" size={16} variant="solid" className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">{author}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
          </div>

          {type === 'whitepaper' && onDownload && (
            <button
              onClick={onDownload}
              className="flex items-center space-x-1 px-3 py-1.5 bg-accent text-accent-foreground rounded-md text-xs font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              <Icon name="ArrowDownTrayIcon" size={14} variant="solid" />
              <span>Descargar</span>
            </button>
          )}

          {(type === 'blog' || type === 'webinar') && onRead && (
            <button
              onClick={onRead}
              className="flex items-center space-x-1 text-primary text-xs font-semibold hover:text-primary/80 transition-colors duration-300"
            >
              <span>Leer más</span>
              <Icon name="ArrowRightIcon" size={14} variant="outline" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ResourceCard;