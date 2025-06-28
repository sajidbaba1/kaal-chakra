'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, CalendarHeart } from 'lucide-react';
import {
  gregorianTo13Month,
  getCalendarYear,
  MONTH_NAMES,
  DAYS_IN_WEEK,
  DAYS_IN_MONTH,
} from '@/lib/thirteen-month-calendar';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type CurrentDateInfo = {
  year: number;
  month: number;
  day: number;
  specialDay: string | null;
} | null;

const MonthGrid = ({ monthIndex, year, currentDateInfo }: { monthIndex: number; year: number; currentDateInfo: CurrentDateInfo }) => {
  const isCurrentMonth = currentDateInfo?.year === year && currentDateInfo?.month === monthIndex;
  
  return (
    <div className="grid grid-cols-7 gap-1 text-center text-sm">
      {DAYS_IN_WEEK.map((day) => (
        <div key={day} className="font-medium text-muted-foreground text-xs">
          {day}
        </div>
      ))}
      {Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1).map((day) => {
        const isCurrentDay = isCurrentMonth && currentDateInfo?.day === day;
        return (
          <div
            key={day}
            className={cn(
              'flex items-center justify-center h-8 w-8 rounded-full transition-colors',
              isCurrentDay
                ? 'bg-accent text-accent-foreground font-bold'
                : 'hover:bg-secondary'
            )}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const calendarYear = getCalendarYear(year);
  const currentDateInfo: CurrentDateInfo = currentDate ? gregorianTo13Month(currentDate) : null;

  const isCurrentYear = currentDate?.getFullYear() === year;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center gap-4 mb-8">
        <Button variant="outline" size="icon" onClick={() => setYear(year - 1)} aria-label="Previous Year">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold font-headline w-32 text-center">
          {year}
        </h2>
        <Button variant="outline" size="icon" onClick={() => setYear(year + 1)} aria-label="Next Year">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calendarYear.months.map((month, index) => (
          <Card key={month.name} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-4 bg-secondary/50">
              <CardTitle className="font-headline text-primary">{month.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <MonthGrid monthIndex={index} year={year} currentDateInfo={currentDateInfo} />
            </CardContent>
          </Card>
        ))}

        {calendarYear.hasLeapDay && (
          <Card className={cn(
            "bg-gradient-to-br from-primary/80 to-primary text-primary-foreground flex flex-col items-center justify-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300",
            isCurrentYear && currentDateInfo?.specialDay === 'Leap Day' && "ring-4 ring-offset-2 ring-accent"
          )}>
            <CalendarHeart className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold font-headline">Leap Day</h3>
            <p>An extra day after June to keep the calendar in sync.</p>
          </Card>
        )}
        
        <Card className={cn(
          "bg-gradient-to-br from-amber-400 to-amber-500 text-accent-foreground flex flex-col items-center justify-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300",
          isCurrentYear && currentDateInfo?.specialDay === 'Year Day' && "ring-4 ring-offset-2 ring-accent"
        )}>
          <Star className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold font-headline">Year Day</h3>
          <p>A special day of celebration at the end of the year.</p>
        </Card>

      </div>
    </div>
  );
}
