export const COLORS = {
  // Primary Colors
  primary: '#3B82F6',
  secondary: '#6366F1',
  tertiary: '#8B5CF6',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#06B6D4',
  
  // Neutral Colors
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A'
  },
  
  // Brand Colors
  blue: {
    light: '#DBEAFE',
    main: '#3B82F6',
    dark: '#1D4ED8'
  },
  emerald: {
    light: '#D1FAE5',
    main: '#10B981',
    dark: '#047857'
  },
  purple: {
    light: '#E9D5FF',
    main: '#8B5CF6',
    dark: '#6D28D9'
  },
  orange: {
    light: '#FED7AA',
    main: '#F59E0B',
    dark: '#D97706'
  },
  red: {
    light: '#FEE2E2',
    main: '#EF4444',
    dark: '#DC2626'
  },
  
  // Chart Colors (for data visualization)
  chartColors: [
    '#3B82F6', // Blue
    '#10B981', // Emerald
    '#8B5CF6', // Purple
    '#F59E0B', // Orange
    '#EF4444', // Red
    '#06B6D4', // Cyan
    '#EC4899', // Pink
    '#84CC16', // Lime
    '#F97316', // Orange (darker)
    '#6366F1'  // Indigo
  ],
  
  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F8FAFC',
    tertiary: '#F1F5F9',
    accent: 'rgba(255, 255, 255, 0.8)'
  },
  
  // Text Colors
  text: {
    primary: '#0F172A',
    secondary: '#475569',
    tertiary: '#64748B',
    muted: '#94A3B8',
    light: '#CBD5E1'
  },
  
  // Border Colors
  border: {
    light: '#E2E8F0',
    main: '#CBD5E1',
    dark: '#94A3B8'
  },
  
  // Gradient Combinations
  gradients: {
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    cyan: 'from-cyan-500 to-cyan-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600',
    
    // Special gradients
    rainbow: 'from-blue-500 via-purple-500 to-pink-500',
    sunset: 'from-orange-400 via-red-500 to-pink-500',
    ocean: 'from-blue-400 via-cyan-500 to-teal-500',
    forest: 'from-green-400 via-emerald-500 to-teal-500'
  },
  
  // Status-based color mappings
  status: {
    active: {
      bg: '#D1FAE5',
      text: '#047857',
      border: '#6EE7B7'
    },
    inactive: {
      bg: '#F3F4F6',
      text: '#6B7280',
      border: '#D1D5DB'
    },
    pending: {
      bg: '#FEF3C7',
      text: '#D97706',
      border: '#FCD34D'
    },
    error: {
      bg: '#FEE2E2',
      text: '#DC2626',
      border: '#FCA5A5'
    }
  },
  
  // Risk level colors
  risk: {
    low: {
      bg: '#D1FAE5',
      text: '#047857',
      main: '#10B981'
    },
    medium: {
      bg: '#FEF3C7',
      text: '#D97706',
      main: '#F59E0B'
    },
    high: {
      bg: '#FEE2E2',
      text: '#DC2626',
      main: '#EF4444'
    }
  },
  
  // Investment stage colors
  stage: {
    seed: {
      bg: '#FEF3C7',
      text: '#D97706',
      border: '#FCD34D'
    },
    seriesA: {
      bg: '#FED7AA',
      text: '#EA580C',
      border: '#FDBA74'
    },
    seriesB: {
      bg: '#FEE2E2',
      text: '#DC2626',
      border: '#FCA5A5'
    },
    seriesC: {
      bg: '#E9D5FF',
      text: '#7C3AED',
      border: '#C4B5FD'
    },
    ipo: {
      bg: '#DBEAFE',
      text: '#2563EB',
      border: '#93C5FD'
    }
  },
  
  // Industry colors
  industry: {
    fintech: '#3B82F6',
    healthtech: '#10B981',
    edtech: '#8B5CF6',
    proptech: '#F59E0B',
    saas: '#EF4444',
    ecommerce: '#06B6D4',
    logistics: '#EC4899',
    gaming: '#84CC16',
    media: '#F97316',
    enterprise: '#6366F1'
  }
};

// Navigation item configurations
export const NAV_ITEMS = [
  { 
    id: 'dashboard', 
    iconName: 'LayoutDashboard', 
    label: 'Dashboard', 
    active: true,
    color: COLORS.blue.main
  },
  { 
    id: 'companies', 
    iconName: 'Building2', 
    label: 'Companies', 
    color: COLORS.emerald.main
  },
  { 
    id: 'analytics', 
    iconName: 'BarChart3', 
    label: 'Analytics',
    color: COLORS.purple.main
  },
  { 
    id: 'portfolio', 
    iconName: 'PieChart', 
    label: 'Portfolio',
    color: COLORS.orange.main
  },
  { 
    id: 'financials', 
    iconName: 'FileBarChart', 
    label: 'Financial Reports',
    color: COLORS.red.main
  },
  { 
    id: 'performance', 
    iconName: 'Award', 
    label: 'Performance',
    color: COLORS.info
  },
  { 
    id: 'risk', 
    iconName: 'Shield', 
    label: 'Risk Analysis',
    color: COLORS.warning
  },
  { 
    id: 'documents', 
    iconName: 'FileText', 
    label: 'Documents',
    color: COLORS.slate[600]
  }
];

export const DOCUMENT_CATEGORIES = [
  { 
    id: 'all', 
    name: 'All Documents', 
    iconName: 'FileText',
    color: COLORS.slate[600]
  },
  { 
    id: 'financial', 
    name: 'Financial', 
    iconName: 'FileBarChart',
    color: COLORS.blue.main
  },
  { 
    id: 'legal', 
    name: 'Legal', 
    iconName: 'FileText',
    color: COLORS.purple.main
  },
  { 
    id: 'compliance', 
    name: 'Compliance', 
    iconName: 'CheckCircle',
    color: COLORS.emerald.main
  },
  { 
    id: 'board', 
    name: 'Board Materials', 
    iconName: 'Users',
    color: COLORS.orange.main
  }
];

// Animation durations
export const ANIMATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Z-index layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080
};

export default COLORS;