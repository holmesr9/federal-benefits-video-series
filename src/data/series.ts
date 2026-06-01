export type Scene = {
  visual: string;
  script: string;
};

export type VideoData = {
  id: string;
  title: string;
  subtitle: string;
  durationSecs: number;
  scenes: Scene[];
};

export const SERIES: VideoData[] = [
  {
    id: "video1-hook",
    title: "The Hook",
    subtitle: "They're Changing Your Federal Retirement — And Most Employees Don't Know It",
    durationSecs: 75,
    scenes: [
      {
        visual: "The United States Capitol building at dramatic dusk, dark storm clouds, cinematic lighting",
        script: "A single change to your retirement formula could cost you five hundred to one thousand dollars every single year for the rest of your life.",
      },
      {
        visual: "A federal government employee reviewing retirement documents at their desk, worried expression",
        script: "Congress is proposing to change how your federal retirement is calculated. And most federal employees have absolutely no idea this is happening.",
      },
      {
        visual: "Close-up of official government policy document with HIGH-3 and HIGH-5 visible",
        script: "It is called the shift from High-3 to High-5. And it could permanently reduce your monthly retirement check starting as soon as January 2028.",
      },
      {
        visual: "United States Senate chamber in session, American flags, dramatic lighting",
        script: "This proposal is buried inside a massive piece of legislation moving through Congress right now. Most federal employees will not find out until it is too late to act.",
      },
      {
        visual: "Confident professional federal employee looking directly at camera, American flag in background",
        script: "In this series I am going to break down exactly what this means for your paycheck in retirement. If this concerns you — and it should — hit that subscribe button right now. Your retirement depends on it.",
      },
    ],
  },
  {
    id: "video2-basics",
    title: "The Basics",
    subtitle: "What Is the High-3 Retirement Formula?",
    durationSecs: 105,
    scenes: [
      {
        visual: "The OPM Office of Personnel Management building in Washington D.C.",
        script: "For decades, your federal retirement has been protected by a formula called the High-3. But do you actually know how it works?",
      },
      {
        visual: "A professional timeline graphic showing salary increases over a federal career",
        script: "Under current law, the Office of Personnel Management takes your highest 36 consecutive months of basic pay — that is your three highest-earning years — to calculate your retirement annuity.",
      },
      {
        visual: "Whiteboard showing formula: High-3 Average x 1% x Years of Service",
        script: "The formula is simple. Your High-3 average, multiplied by one percent, multiplied by your total years of service. That is your annual retirement annuity.",
      },
      {
        visual: "GS-12 federal employee at a government office desk, confident, American flag in background",
        script: "Here is a real example. A GS-12 employee earning seventy-five thousand dollars a year with twenty-five years of service would receive an annuity of eighteen thousand, seven hundred and fifty dollars per year — or about fifteen hundred dollars every month.",
      },
      {
        visual: "Retirement check or direct deposit notification, happy senior couple in background",
        script: "That monthly check is what federal employees have planned their retirements around for decades. It is reliable, predictable, and protected by law.",
      },
      {
        visual: "United States Capitol building with storm clouds gathering overhead",
        script: "But this formula has protected federal workers for decades. Now Congress wants to change it. Subscribe so you never miss an update — and drop a comment telling me how many years you have in federal service.",
      },
    ],
  },
  {
    id: "video3-change",
    title: "The Change",
    subtitle: "High-3 vs. High-5 — Here's What Changes",
    durationSecs: 105,
    scenes: [
      {
        visual: "Split screen comparison graphic — OLD RULES vs NEW RULES",
        script: "You have heard the terms High-3 and High-5. But what is the actual difference — and why does it matter to your wallet?",
      },
      {
        visual: "Salary history chart for GS-12 employee showing three highest earning years in green",
        script: "Under the current High-3 system, OPM takes your three highest consecutive earning years. For a GS-12 earning seventy-five thousand dollars, that average stays strong.",
      },
      {
        visual: "Same chart now showing five years highlighted, two lower-earning years in red",
        script: "Under the proposed High-5 system, two additional lower-earning years get pulled into that average. That drags your salary baseline down — and your retirement check along with it.",
      },
      {
        visual: "Side by side comparison table: High-3 annuity vs High-5 annuity for same GS-12 employee",
        script: "For that same GS-12 employee with twenty-five years of service, the difference could be five hundred to over one thousand dollars per year. Every single year. For the rest of their retirement.",
      },
      {
        visual: "Calendar showing months passing, money slowly decreasing, symbolic and dramatic",
        script: "It may not sound like much at first. But multiply that by twenty or thirty years of retirement — and you are looking at tens of thousands of dollars lost over your lifetime.",
      },
      {
        visual: "Federal employee sharing a document with a coworker, both looking concerned",
        script: "Subscribe and share this video with every federal employee you know. They need to see this comparison before it is too late.",
      },
    ],
  },
  {
    id: "video4-impact",
    title: "The Impact",
    subtitle: "These Federal Employees Will Be Hit Hardest by the High-5 Change",
    durationSecs: 105,
    scenes: [
      {
        visual: "Three federal employee profile cards side by side, diverse professionals",
        script: "Not every federal employee will be hit the same way by the High-5 change. Here are the three groups who stand to lose the most.",
      },
      {
        visual: "Confident female GS-13 employee at her desk, recently promoted",
        script: "First: employees who received rapid promotions in the last five years. Take Maria — a GS-13 who was promoted from GS-11 just two years ago. Her lower GS-11 salary years would now count against her under High-5, cutting her retirement check significantly.",
      },
      {
        visual: "Older federal employee reviewing retirement paperwork, calendar showing 2-3 years away",
        script: "Second: employees who are close to retirement within the next two to three years. If this bill passes, you may be locked into the new lower calculation with no time to adjust your plans.",
      },
      {
        visual: "Official CSRS retirement documents on a government desk",
        script: "Third: certain CSRS employees who could see losses exceeding one thousand dollars per year. That is money that compounds over every single year of your retirement.",
      },
      {
        visual: "Federal employee with flat steady salary history chart, relaxed expression",
        script: "By contrast, employees with a flat salary history throughout their career will feel this change far less. The impact depends entirely on your promotion history.",
      },
      {
        visual: "Empathetic professional speaking directly to camera, American flag, caring expression",
        script: "These are not just numbers. These changes affect your family, your future, and your financial security. If you fall into one of these categories, subscribe right now — the next video reveals a deadline that could save your retirement.",
      },
    ],
  },
  {
    id: "video5-deadline",
    title: "The Deadline",
    subtitle: "The Retirement Deadline You Cannot Afford to Miss",
    durationSecs: 90,
    scenes: [
      {
        visual: "Dramatic countdown clock with January 1 2028 in bold red text",
        script: "There is a retirement deadline you cannot afford to miss. And the clock is already ticking.",
      },
      {
        visual: "Official FERS retirement eligibility documents, calendar showing planning dates",
        script: "The proposed effective date in the bill is January 1st, 2028. That means any federal employee who retires before that date would lock in the current High-3 calculation permanently.",
      },
      {
        visual: "FERS eligibility chart showing MRA+10, MRA+30, age 60+20, age 62+5",
        script: "To retire under the old rules, you need to be eligible. Under FERS that means: your Minimum Retirement Age plus 10 years of service, MRA plus 30, age 60 with 20 years, or age 62 with just 5 years of service.",
      },
      {
        visual: "Calendar split — before January 2028 with green checkmark, after with red X",
        script: "If you retire before January 2028 and you are eligible, you keep the High-3. If you retire after — you get the High-5. It is that simple. And that consequential.",
      },
      {
        visual: "Professional speaking to camera, Congress.gov visible in background",
        script: "To be clear — this is a proposed change. It is not yet law. But the time to plan is now, not after it passes. Subscribe and turn on notifications — I will cover every update to this bill as it moves through Congress.",
      },
    ],
  },
  {
    id: "video6-action-plan",
    title: "The Action Plan",
    subtitle: "5 Things Federal Employees Should Do RIGHT NOW About the High-5 Change",
    durationSecs: 120,
    scenes: [
      {
        visual: "Bold numbered checklist — 5 Steps to Protect Your Retirement, federal blue and gold",
        script: "The High-5 change is not final yet. And there are five things you can do right now to protect your federal retirement.",
      },
      {
        visual: "Official Personnel File folder open on a desk, salary history documents visible",
        script: "Step one: Pull your Official Personnel File and review your complete salary history. You need to know exactly what your High-3 and High-5 averages would look like under both formulas.",
      },
      {
        visual: "Federal employee using OPM website retirement calculator on computer",
        script: "Step two: Use the OPM retirement calculator to run both a High-3 and a High-5 estimate side by side. Seeing the actual dollar difference in your specific situation is a game changer.",
      },
      {
        visual: "Federal employee in meeting with HR benefits counselor, documents on table",
        script: "Step three: Schedule a retirement counseling session with your agency HR office. They can walk you through your specific eligibility dates and help you model different retirement scenarios.",
      },
      {
        visual: "Calendar with retirement eligibility date circled, January 2028 also visible",
        script: "Step four: Check your FERS eligibility date and how close you are to that January 2028 proposed deadline. If you are within two years of eligibility, this decision could be worth thousands of dollars.",
      },
      {
        visual: "Congress.gov website on laptop screen, bill tracking page visible",
        script: "Step five: Monitor the bill on Congress.gov. Search for the One Big Beautiful Bill and track it as it moves through the House and Senate. Subscribe for more actionable tips and share this with a coworker who needs to take these steps today.",
      },
    ],
  },
  {
    id: "video7-big-picture",
    title: "The Big Picture",
    subtitle: "The High-5 Change Is Part of Something Bigger — Here's What Federal Employees Need to Understand",
    durationSecs: 150,
    scenes: [
      {
        visual: "Sweeping aerial view of Washington D.C., golden hour lighting, cinematic",
        script: "The High-5 change is not happening in a vacuum. It is part of something much bigger. And every federal employee in America needs to understand what is really going on.",
      },
      {
        visual: "Bold graphic: One Big Beautiful Bill with multiple policy items listed",
        script: "The High-3 to High-5 shift is buried inside the One Big Beautiful Bill — a sweeping piece of legislation that targets multiple pillars of federal employment simultaneously.",
      },
      {
        visual: "FERS supplement document with large red ELIMINATED stamp",
        script: "First: the FERS Supplement — the bridge payment that helps federal employees who retire before age 62 — is proposed to be eliminated entirely. That can mean thousands of dollars per year gone for early retirees.",
      },
      {
        visual: "Health insurance card and FEHB documents with question marks overlaid",
        script: "Second: the Federal Employee Health Benefits program is being restructured. Changes to premium sharing and plan availability could significantly increase what federal workers pay out of pocket for healthcare.",
      },
      {
        visual: "New federal employee signing at-will employment contract, uncertain expression",
        script: "Third: new federal hires could be classified as at-will employees — stripping away civil service protections that have defined federal work for generations.",
      },
      {
        visual: "Federal employee family at home together, warmth with subtle worry",
        script: "Taken together these changes do not just affect your paycheck. They affect your family, your healthcare, your job security, and the entire value proposition of a federal career.",
      },
      {
        visual: "Map of the United States with federal employee silhouettes across it",
        script: "There are over two million federal employees across this country. Teachers, veterans, scientists, law enforcement, social workers. These changes touch all of them.",
      },
      {
        visual: "Person writing email to Congressional representative, American flag in background",
        script: "I encourage you to contact your Congressional representatives and make your voice heard. Go to Congress.gov, find your senators and representative, and tell them exactly how these changes would affect you.",
      },
      {
        visual: "Passionate professional looking directly into camera, warm and determined",
        script: "If this series helped you understand what is at stake, please subscribe, like, and share every video. Comment below with your biggest concern. I read every single comment. Your voice matters. Let us keep fighting for federal employees together.",
      },
    ],
  },
];
