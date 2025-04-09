"use client";

import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // FIXED launch date: 7 days and 6 hours from April 10, 2025
    // This ensures everyone sees the same countdown regardless of when they visit
    // You would update this date based on when you actually deploy the site
    const fixedLaunchDate = new Date("2025-04-17T06:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = fixedLaunchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleNotifyMe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitted(true);
    // Store submission in localStorage to persist between refreshes
    localStorage.setItem("emailSubmitted", "true");
    localStorage.setItem("submittedEmail", email);
    console.log("Notify me with email:", email);
  };

  // Check if email was already submitted (on page load)
  useEffect(() => {
    const emailSubmitted = localStorage.getItem("emailSubmitted") === "true";

    if (emailSubmitted) {
      setIsSubmitted(true);
      setEmail(localStorage.getItem("submittedEmail") || "");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 md:px-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Coming Soon
        </h1>
        <p className="text-muted-foreground md:text-xl">
          We are working hard to launch our personal portfolio site...
        </p>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="bg-muted rounded-lg p-4">
            <div className="text-4xl font-bold text-primary">
              {timeLeft.days}
            </div>
            <div className="text-sm text-muted-foreground">Days</div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-4xl font-bold text-primary">
              {timeLeft.hours}
            </div>
            <div className="text-sm text-muted-foreground">Hours</div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-4xl font-bold text-primary">
              {timeLeft.minutes}
            </div>
            <div className="text-sm text-muted-foreground">Minutes</div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-4xl font-bold text-primary">
              {timeLeft.seconds}
            </div>
            <div className="text-sm text-muted-foreground">Seconds</div>
          </div>
        </div>
        {isSubmitted ? (
          <p className="text-green-500 font-medium">You will be notified ❤️</p>
        ) : (
          <form
            className="flex gap-2 w-full max-w-sm mx-auto"
            onSubmit={handleNotifyMe}
          >
            <Input
              required
              className="flex-1"
              disabled={isSubmitted}
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <Button disabled={isSubmitted} type="submit">
              Notify Me
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
