"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody } from "./ui/sidebar";
import { cn } from "@/lib/utils";
import { BadgeCheck, Star } from "lucide-react";
import { testimonials } from "@/constants/testimonials";
import EmailStep from "./email";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col p-2 overflow-hidden bg-background md:flex-row",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-y-auto">
            <p className="font-semibold text-lg text-foreground">OnlineMed</p>
            <div className="flex flex-col gap-6 mt-16">
              <p className="text-sm text-primary font-bold tracking-wide">
                <BadgeCheck className="inline mr-2 w-5 font-extralight text-background fill-primary" />
                Money Back Guarantee
              </p>
              <h1 className="text-4xl sm:text-3xl font-bold text-foreground leading-12 tracking-tight">
                Your <span className="text-primary"> Work </span> Note <br /> is
                Minutes Away
              </h1>
              <p className="text-sm text-foreground font-normal">
                Note: Due to capacity we are currently only able to provide a
                limited number of notes per day. To see if you qualify please
                fill out the following short survey!
              </p>
            </div>

            <div className="mt-auto overflow-hidden">
                <div className="relative w-full">
                  <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {testimonials.map((t, i) => (
                      <div
                        key={i}
                        className="min-w-full bg-secondary p-5 rounded-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <div
                              className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{ backgroundColor: t.color, color: t.avatarcolor }}
                            >
                              {t.initials}
                            </div>
                            <div className="ml-3">
                              <p className="text-foreground font-bold">
                                {t.name}
                              </p>
                              <p className="text-xs text-muted-foreground">{t.role}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 mt-3 text-green-600">
                          {[1, 2, 3, 4, 5].map((_, index) => (
                            <Star key={index} className="h-4 w-4 fill-green-600" />
                          ))}
                          <p className="text-xs ml-auto text-muted-foreground">{t.time}</p>
                        </div>

                        <p className="text-foreground text-sm mt-3">{t.review}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-start mt-4 items-start space-x-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          i === current ? "bg-blue-600" : "bg-blue-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col justify-center items-center gap-2 rounded-2xl border border-background bg-secondary p-2 md:p-10">
        <EmailStep />
      </div>
    </div>
  );
};
