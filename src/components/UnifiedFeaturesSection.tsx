'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  LineChart,
  CreditCard,
  FileText,
  Database,
  ClipboardCheck,
  Calendar,
  MessageSquare,
  TrendingUp,
  CalendarDays,
  Wallet,
  Activity,
  Bell,
  Building2,
  Dumbbell,
  Users,
  type LucideIcon,
} from 'lucide-react';

const ROLES = ['owners', 'coaches', 'parents'] as const;
type Role = (typeof ROLES)[number];

const AUTO_ROTATE_MS = 15000;

// App screenshot background color
const APP_BG = '#141414';

// Phone (Trener / Clan)
const PHONE_W = 280;
const PHONE_H = Math.round(PHONE_W * (19.5 / 9));

// Desktop monitor (Vlasnik)
const MONITOR_W = 480;
const MONITOR_H = 270;

interface FeatureItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  mockup: string;
}

interface RoleConfig {
  icon: LucideIcon;
  tabKey: string;
  titleKey: string;
  subtitleKey: string;
  defaultMockup: string;
  items: FeatureItem[];
}

const roleConfig: Record<Role, RoleConfig> = {
  owners: {
    icon: Building2,
    tabKey: 'features.owners.tab',
    titleKey: 'features.owners.title',
    subtitleKey: 'features.owners.subtitle',
    defaultMockup: '/assets/mockups/Vlasnik/pocetna.png',
    items: [
      {
        icon: LineChart,
        titleKey: 'features.owners.dashboard.title',
        descKey: 'features.owners.dashboard.desc',
        mockup: '/assets/mockups/Vlasnik/finansije.png',
      },
      {
        icon: CreditCard,
        titleKey: 'features.owners.memberships.title',
        descKey: 'features.owners.memberships.desc',
        mockup: '/assets/mockups/Vlasnik/clanovi.png',
      },
      {
        icon: FileText,
        titleKey: 'features.owners.reports.title',
        descKey: 'features.owners.reports.desc',
        mockup: '/assets/mockups/Vlasnik/evidencija.png',
      },
      {
        icon: Database,
        titleKey: 'features.owners.data.title',
        descKey: 'features.owners.data.desc',
        mockup: '/assets/mockups/Vlasnik/novosti.png',
      },
    ],
  },
  coaches: {
    icon: Dumbbell,
    tabKey: 'features.coaches.tab',
    titleKey: 'features.coaches.title',
    subtitleKey: 'features.coaches.subtitle',
    defaultMockup: '/assets/mockups/Trener/home.jpg',
    items: [
      {
        icon: ClipboardCheck,
        titleKey: 'features.coaches.attendance.title',
        descKey: 'features.coaches.attendance.desc',
        mockup: '/assets/mockups/Trener/evidencija.jpg',
      },
      {
        icon: Calendar,
        titleKey: 'features.coaches.calendar.title',
        descKey: 'features.coaches.calendar.desc',
        mockup: '/assets/mockups/Trener/kalendar.jpg',
      },
      {
        icon: MessageSquare,
        titleKey: 'features.coaches.communication.title',
        descKey: 'features.coaches.communication.desc',
        mockup: '/assets/mockups/Trener/Chat.jpg',
      },
      {
        icon: TrendingUp,
        titleKey: 'features.coaches.progress.title',
        descKey: 'features.coaches.progress.desc',
        mockup: '/assets/mockups/Trener/memberDetailsAttendace.jpg',
      },
    ],
  },
  parents: {
    icon: Users,
    tabKey: 'features.parents.tab',
    titleKey: 'features.parents.title',
    subtitleKey: 'features.parents.subtitle',
    defaultMockup: '/assets/mockups/Clan/homepage.jpg',
    items: [
      {
        icon: CalendarDays,
        titleKey: 'features.parents.schedule.title',
        descKey: 'features.parents.schedule.desc',
        mockup: '/assets/mockups/Clan/kalendarpage.jpg',
      },
      {
        icon: Wallet,
        titleKey: 'features.parents.payments.title',
        descKey: 'features.parents.payments.desc',
        mockup: '/assets/mockups/Clan/evidencijaPagePayments.jpg',
      },
      {
        icon: Activity,
        titleKey: 'features.parents.tracking.title',
        descKey: 'features.parents.tracking.desc',
        mockup: '/assets/mockups/Clan/evidencijaDolazsci.jpg',
      },
      {
        icon: Bell,
        titleKey: 'features.parents.notifications.title',
        descKey: 'features.parents.notifications.desc',
        mockup: '/assets/mockups/Clan/chatpage.jpg',
      },
    ],
  },
};

const UnifiedFeaturesSection = () => {
  const { t } = useLanguage();
  const [activeRole, setActiveRole] = useState<Role>('owners');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [timerKey, setTimerKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const config = roleConfig[activeRole];
  const isOwner = activeRole === 'owners';
  const currentMockup =
    hoveredFeature !== null
      ? config.items[hoveredFeature].mockup
      : config.defaultMockup;

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerKey((k) => k + 1);
    timerRef.current = setInterval(() => {
      setActiveRole((prev) => {
        const idx = ROLES.indexOf(prev);
        return ROLES[(idx + 1) % ROLES.length];
      });
      setHoveredFeature(null);
      setTimerKey((k) => k + 1);
    }, AUTO_ROTATE_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  useEffect(() => {
    Object.values(roleConfig).forEach((c) => {
      [c.defaultMockup, ...c.items.map((i) => i.mockup)].forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  const handleRoleChange = (role: Role) => {
    setActiveRole(role);
    setHoveredFeature(null);
    resetTimer();
  };

  const handleFeatureHover = (idx: number) => {
    setHoveredFeature(idx);
    resetTimer();
  };

  const leftFeatures = config.items.slice(0, 2);
  const rightFeatures = config.items.slice(2, 4);

  const deviceH = isOwner ? MONITOR_H : PHONE_H;
  const lineWidth = isOwner ? '1.25rem' : '2.5rem';
  const featureMaxW = isOwner ? 'max-w-[220px]' : 'max-w-[260px]';

  // Shared image transition props
  const imgTransition = { duration: 0.4, ease: 'easeInOut' as const };

  const renderLeftCard = (item: FeatureItem, index: number) => {
    const ItemIcon = item.icon;
    const active = hoveredFeature === index;
    return (
      <div
        key={item.titleKey}
        className="relative"
        onMouseEnter={() => handleFeatureHover(index)}
        onMouseLeave={() => setHoveredFeature(null)}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-right ${
            active
              ? 'bg-neutral-900/80 border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.08)]'
              : 'bg-neutral-900/30 border-white/5 hover:border-white/10'
          }`}
        >
          <div className="flex items-start gap-4 justify-end">
            <div>
              <h4
                className={`text-base font-bold mb-1.5 transition-colors duration-300 ${
                  active ? 'text-primary' : 'text-white'
                }`}
              >
                {t(item.titleKey)}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                active ? 'bg-primary/20' : 'bg-white/5'
              }`}
            >
              <ItemIcon
                className={`w-5 h-5 transition-colors duration-300 ${
                  active ? 'text-primary' : 'text-gray-500'
                }`}
              />
            </div>
          </div>
        </motion.div>
        {/* Line → device */}
        <div
          className="absolute top-1/2 left-full -translate-y-1/2 flex items-center pointer-events-none z-10"
          style={{ width: lineWidth }}
        >
          <div
            className={`flex-1 h-px transition-all duration-500 ${
              active ? 'bg-gradient-to-r from-primary/30 to-primary' : 'bg-white/10'
            }`}
          />
          <div
            className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-500 ${
              active
                ? 'bg-primary shadow-[0_0_10px_rgba(34,197,94,0.6)] scale-125'
                : 'bg-white/20 scale-100'
            }`}
          />
        </div>
      </div>
    );
  };

  const renderRightCard = (item: FeatureItem, index: number) => {
    const ItemIcon = item.icon;
    const actualIndex = index + 2;
    const active = hoveredFeature === actualIndex;
    return (
      <div
        key={item.titleKey}
        className="relative"
        onMouseEnter={() => handleFeatureHover(actualIndex)}
        onMouseLeave={() => setHoveredFeature(null)}
      >
        {/* Line ← device */}
        <div
          className="absolute top-1/2 right-full -translate-y-1/2 flex items-center pointer-events-none z-10"
          style={{ width: lineWidth }}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-500 ${
              active
                ? 'bg-primary shadow-[0_0_10px_rgba(34,197,94,0.6)] scale-125'
                : 'bg-white/20 scale-100'
            }`}
          />
          <div
            className={`flex-1 h-px transition-all duration-500 ${
              active ? 'bg-gradient-to-r from-primary to-primary/30' : 'bg-white/10'
            }`}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
            active
              ? 'bg-neutral-900/80 border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.08)]'
              : 'bg-neutral-900/30 border-white/5 hover:border-white/10'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                active ? 'bg-primary/20' : 'bg-white/5'
              }`}
            >
              <ItemIcon
                className={`w-5 h-5 transition-colors duration-300 ${
                  active ? 'text-primary' : 'text-gray-500'
                }`}
              />
            </div>
            <div>
              <h4
                className={`text-base font-bold mb-1.5 transition-colors duration-300 ${
                  active ? 'text-primary' : 'text-white'
                }`}
              >
                {t(item.titleKey)}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  // Role tab button (used for both mobile horizontal and desktop vertical)
  const renderRoleTab = (
    role: Role,
    idx: number,
    layout: 'horizontal' | 'vertical'
  ) => {
    const rc = roleConfig[role];
    const Icon = rc.icon;
    const active = activeRole === role;
    const isVertical = layout === 'vertical';

    return (
      <motion.button
        key={role}
        initial={isVertical ? { opacity: 0, x: -30 } : undefined}
        whileInView={isVertical ? { opacity: 1, x: 0 } : undefined}
        transition={isVertical ? { delay: idx * 0.12, duration: 0.5 } : undefined}
        viewport={isVertical ? { once: true } : undefined}
        onClick={() => handleRoleChange(role)}
        className={`relative overflow-hidden transition-all duration-300 flex items-center ${
          isVertical
            ? `w-full gap-4 px-6 py-5 rounded-2xl ${
                active
                  ? 'bg-white/[0.07] shadow-[0_0_25px_rgba(34,197,94,0.06)]'
                  : 'bg-transparent hover:bg-white/[0.03]'
              }`
            : `gap-2 px-6 py-3 rounded-2xl ${
                active
                  ? 'text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                  : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'
              }`
        }`}
      >
        {/* Icon box */}
        <div
          className={`flex items-center justify-center shrink-0 rounded-xl border transition-all duration-300 ${
            isVertical
              ? `w-14 h-14 ${
                  active
                    ? 'bg-primary/15 border-primary/30'
                    : 'bg-white/5 border-white/10'
                }`
              : `w-8 h-8 ${
                  active ? 'bg-white border-white/20' : 'bg-white/5 border-white/10'
                }`
          }`}
        >
          <Icon
            className={`transition-colors duration-300 ${
              isVertical
                ? `w-7 h-7 ${active ? 'text-primary' : 'text-gray-500'}`
                : `w-4 h-4 ${active ? 'text-black' : 'text-gray-400'}`
            }`}
          />
        </div>
        <span
          className={`font-semibold whitespace-nowrap transition-colors duration-300 ${
            isVertical
              ? `text-xl ${active ? 'text-white' : 'text-gray-500'}`
              : `text-base ${active ? 'text-black' : ''}`
          }`}
        >
          {t(rc.tabKey)}
        </span>
        {/* Progress bar */}
        {active && (
          <div
            key={timerKey}
            className={`absolute bottom-0 left-0 h-[3px] rounded-full ${
              isVertical ? 'bg-primary/50' : 'bg-primary/70'
            }`}
            style={{ animation: `progressFill ${AUTO_ROTATE_MS}ms linear forwards` }}
          />
        )}
        {/* Active indicator for vertical */}
        {active && isVertical && (
          <motion.div
            layoutId="activeRoleIndicator"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"
            initial={false}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        {/* Mobile layout id */}
        {active && !isVertical && (
          <motion.div
            layoutId="activeRoleTabMobile"
            className="absolute inset-0 rounded-2xl bg-white z-[-1]"
            initial={false}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </motion.button>
    );
  };

  return (
    <section
      id="features"
      className="py-24 lg:py-32 bg-black relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none opacity-20" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          {/* Logo */}
          <div className="flex justify-center items-center gap-3 mb-5">
            <img
              src="/assets/logo.jpg"
              alt="4sports"
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-black text-white">4sports</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-white">
            {t('mockupShowcase.hero.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            {t('mockupShowcase.hero.subtitle')}
          </p>
        </motion.div>

        {/* ===== MOBILE / TABLET: horizontal tabs (< xl) ===== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 xl:hidden">
          {ROLES.map((role, idx) => renderRoleTab(role, idx, 'horizontal'))}
        </div>

        {/* ===== DESKTOP (xl+): vertical tabs left + content right ===== */}
        <div className="hidden xl:flex items-start gap-6">
          {/* Vertical role selector */}
          <div className="flex flex-col gap-5 shrink-0 pt-12 -ml-2" style={{ width: '260px' }}>
            {ROLES.map((role, idx) => renderRoleTab(role, idx, 'vertical'))}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5 }}
              >
                {/* Subtitle */}
                <div className="text-center mb-10">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                    {t(config.titleKey)}
                  </h3>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    {t(config.subtitleKey)}
                  </p>
                </div>

                {/* Features + Device + Features */}
                <div className="flex items-center justify-center">
                  {/* Left features */}
                  <div
                    className={`flex-1 ${featureMaxW} ${
                      isOwner
                        ? 'flex flex-col justify-center gap-8'
                        : 'flex flex-col justify-around'
                    }`}
                    style={{ minHeight: `${deviceH}px` }}
                  >
                    {leftFeatures.map((item, i) => renderLeftCard(item, i))}
                  </div>

                  {/* Device */}
                  <div className={`relative shrink-0 ${isOwner ? 'mx-5' : 'mx-10'}`}>
                    {isOwner ? (
                      /* ---- DESKTOP MONITOR ---- */
                      <div className="flex flex-col items-center">
                        <div
                          className="relative rounded-xl border-[5px] border-neutral-600/80 shadow-2xl overflow-hidden"
                          style={{
                            width: `${MONITOR_W}px`,
                            height: `${MONITOR_H}px`,
                            backgroundColor: APP_BG,
                          }}
                        >
                          {/* Camera */}
                          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-500/40 rounded-full z-20" />
                          {/* Screen */}
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={currentMockup}
                              src={currentMockup}
                              alt="Dashboard"
                              className="absolute inset-0 w-full h-full object-cover"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={imgTransition}
                            />
                          </AnimatePresence>
                        </div>
                        {/* Stand */}
                        <div className="w-20 h-5 bg-neutral-600/80 rounded-b-sm" />
                        <div className="w-36 h-[6px] bg-neutral-600/60 rounded-b-lg" />
                      </div>
                    ) : (
                      /* ---- PHONE ---- */
                      <div
                        className="relative rounded-[3rem] border-[6px] border-neutral-700/80 shadow-2xl overflow-hidden"
                        style={{
                          width: `${PHONE_W}px`,
                          height: `${PHONE_H}px`,
                          backgroundColor: APP_BG,
                        }}
                      >
                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full z-20" />
                        {/* Screen - 5% zoomed out */}
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentMockup}
                            src={currentMockup}
                            alt="App mockup"
                            className="absolute object-cover object-top rounded-md"
                            style={{
                              top: '2.5%',
                              left: '2.5%',
                              width: '95%',
                              height: '95%',
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={imgTransition}
                          />
                        </AnimatePresence>
                        {/* Home indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/15 rounded-full z-20" />
                      </div>
                    )}
                    {/* Glow */}
                    <div className="absolute inset-0 -z-10 bg-primary/10 blur-[80px] scale-150 rounded-full" />
                  </div>

                  {/* Right features */}
                  <div
                    className={`flex-1 ${featureMaxW} ${
                      isOwner
                        ? 'flex flex-col justify-center gap-8'
                        : 'flex flex-col justify-around'
                    }`}
                    style={{ minHeight: `${deviceH}px` }}
                  >
                    {rightFeatures.map((item, i) => renderRightCard(item, i))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ===== MOBILE / TABLET LAYOUT (< xl) ===== */}
        <div className="xl:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
            >
              {/* Subtitle */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  {t(config.titleKey)}
                </h3>
                <p className="text-base text-gray-400 max-w-lg mx-auto">
                  {t(config.subtitleKey)}
                </p>
              </div>

              {/* Device */}
              <div className="flex justify-center mb-10">
                {isOwner ? (
                  <div className="flex flex-col items-center">
                    <div
                      className="relative rounded-lg border-[4px] border-neutral-600/80 shadow-2xl overflow-hidden"
                      style={{
                        width: '340px',
                        height: '190px',
                        backgroundColor: APP_BG,
                      }}
                    >
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-500/40 rounded-full z-20" />
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentMockup}
                          src={currentMockup}
                          alt="Dashboard"
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={imgTransition}
                        />
                      </AnimatePresence>
                    </div>
                    <div className="w-14 h-3 bg-neutral-600/80 rounded-b-sm" />
                    <div className="w-24 h-1 bg-neutral-600/60 rounded-b-lg" />
                  </div>
                ) : (
                  <div
                    className="relative w-[220px] rounded-[2.5rem] border-[5px] border-neutral-700/80 shadow-2xl overflow-hidden"
                    style={{ aspectRatio: '9/19.5', backgroundColor: APP_BG }}
                  >
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[70px] h-[20px] bg-black rounded-full z-20" />
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentMockup}
                        src={currentMockup}
                        alt="App mockup"
                        className="absolute object-cover object-top"
                        style={{
                          top: '2.5%',
                          left: '2.5%',
                          width: '95%',
                          height: '95%',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={imgTransition}
                      />
                    </AnimatePresence>
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[100px] h-[3px] bg-white/15 rounded-full z-20" />
                  </div>
                )}
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {config.items.map((item, index) => {
                  const ItemIcon = item.icon;
                  const active = hoveredFeature === index;
                  return (
                    <motion.div
                      key={item.titleKey}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() =>
                        setHoveredFeature(hoveredFeature === index ? null : index)
                      }
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        active
                          ? 'bg-neutral-900/80 border-primary/30'
                          : 'bg-neutral-900/30 border-white/5'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                            active ? 'bg-primary/20' : 'bg-white/5'
                          }`}
                        >
                          <ItemIcon
                            className={`w-4 h-4 transition-colors ${
                              active ? 'text-primary' : 'text-gray-500'
                            }`}
                          />
                        </div>
                        <div>
                          <h4
                            className={`text-sm font-bold mb-1 transition-colors ${
                              active ? 'text-primary' : 'text-white'
                            }`}
                          >
                            {t(item.titleKey)}
                          </h4>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {t(item.descKey)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UnifiedFeaturesSection;
