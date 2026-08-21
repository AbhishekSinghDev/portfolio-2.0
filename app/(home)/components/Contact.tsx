"use client";

import { PERSONAL_INFO } from "../constants/personal";
import { BlurFade } from "./BlurFade";

export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={0.1} inView>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a mail at{" "}
              <a className="text-blue-500 hover:underline" href={`mailto:${PERSONAL_INFO.email}`}>
                {PERSONAL_INFO.email}
              </a>{" "}
              and I&apos;ll respond 😊.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
