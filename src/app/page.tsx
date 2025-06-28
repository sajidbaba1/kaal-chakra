import CalendarView from '@/components/calendar-view';

export default function Home() {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-headline mb-2 text-primary tracking-tight">
            The 13-Month Calendar
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through a different conception of time. The calendar below
            shows a 13-month structure, each with 28 days, plus special year-end
            days.
          </p>
        </div>
        <CalendarView />
      </div>
    </main>
  );
}
