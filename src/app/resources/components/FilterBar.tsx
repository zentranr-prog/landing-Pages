'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  selectedType: string;
  selectedCategory: string;
  selectedIndustry: string;
  searchQuery: string;
  onTypeChange: (type: string) => void;
  onCategoryChange: (category: string) => void;
  onIndustryChange: (industry: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const FilterBar = ({
  selectedType,
  selectedCategory,
  selectedIndustry,
  searchQuery,
  onTypeChange,
  onCategoryChange,
  onIndustryChange,
  onSearchChange,
  onClearFilters,
}: FilterBarProps) => {
  const types = [
    { value: 'all', label: 'Todos' },
    { value: 'blog', label: 'Artículos' },
    { value: 'whitepaper', label: 'Whitepapers' },
    { value: 'webinar', label: 'Webinars' },
  ];

  const categories = [
    { value: 'all', label: 'Todas las categorías' },
    { value: 'Transformación Digital', label: 'Transformación Digital' },
    { value: 'Desarrollo de Software', label: 'Desarrollo de Software' },
    { value: 'Consultoría IT', label: 'Consultoría IT' },
    { value: 'Tecnologías Emergentes', label: 'Tecnologías Emergentes' },
    { value: 'Seguridad', label: 'Seguridad' },
  ];

  const industries = [
    { value: 'all', label: 'Todas las industrias' },
    { value: 'Finanzas', label: 'Finanzas' },
    { value: 'Salud', label: 'Salud' },
    { value: 'Manufactura', label: 'Manufactura' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Educación', label: 'Educación' },
  ];

  const hasActiveFilters =
    selectedType !== 'all' ||
    selectedCategory !== 'all' ||
    selectedIndustry !== 'all' ||
    searchQuery !== '';

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Search */}
        <div className="relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={20}
            variant="outline"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Buscar recursos..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>

        {/* Type Filter */}
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="px-4 py-2.5 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 cursor-pointer"
        >
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2.5 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 cursor-pointer"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        {/* Industry Filter */}
        <select
          value={selectedIndustry}
          onChange={(e) => onIndustryChange(e.target.value)}
          className="px-4 py-2.5 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 cursor-pointer"
        >
          {industries.map((industry) => (
            <option key={industry.value} value={industry.value}>
              {industry.label}
            </option>
          ))}
        </select>
      </div>

      {hasActiveFilters && (
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Filtros activos aplicados
          </p>
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-1 text-sm text-primary hover:text-primary/80 font-semibold transition-colors duration-300"
          >
            <Icon name="XMarkIcon" size={16} variant="outline" />
            <span>Limpiar filtros</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;