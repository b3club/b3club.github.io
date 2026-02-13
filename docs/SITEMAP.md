# B3 Website Sitemap

This sitemap defines the full content structure for **Bricks, Blocks, and Bots (B3)** at `b3fc.org`, aligned to the brand in `/Users/smgil/Projects/b3club.github.io/docs/BRAND.md`.

## 1. Top-Level Navigation

1. Home
2. About
3. Curriculum
4. Community
5. Blog
6. Join
7. Contact

## 2. Sitemap Tree With Content Descriptions

### /
**Page:** Home  
**Purpose:** Immediate brand introduction and conversion entry point for the Founding 50 waitlist.  
**Primary audience:** Parents first, kids second (shared family decision page).

**Core content:**
- Hero with B3 value proposition and primary tagline: "Build. Learn. Connect."
- Secondary supporting line: "Where play meets purpose."
- Explanation of B3 as a family innovation hub (not a drop-off daycare model)
- 3-pillar visual summary: Bricks, Blocks, Bots
- AI Track teaser as "new literacy"
- Trust cues (Austin/Cedar Park focus, mentor-led environment)
- Quick links to About, Curriculum, and Join

### /about/
**Page:** About & Philosophy  
**Purpose:** Explain the mission, positioning, and why the family co-learning model is different.  
**Primary audience:** Parents evaluating fit and educational philosophy.

**Core content:**
- Mission statement and brand story
- "Why B3 exists" narrative (bridging play, technology, and mentorship)
- "Y Combinator for families" framing with plain-language explanation
- Dual audience model:
  - Kids as builders
  - Parents as mentors
- Local relevance section for Cedar Park/Austin tech corridor families
- Brand tone and approach: curious, collaborative, forward-thinking, playful-professional

### /curriculum/
**Page:** Curriculum Overview  
**Purpose:** High-level map of program tracks and outcomes.  
**Primary audience:** Parents and kids exploring what they will build and learn.

**Core content:**
- Program structure and progression model
- Learning outcomes by age/stage (with 6-12 sweet spot emphasis)
- Overview cards linking to all tracks
- Sample project lifecycle from idea to demo
- Safety and mentorship framing for AI use

### /curriculum/bricks/
**Page:** Bricks (Physical Foundation)  
**Purpose:** Detail tactile engineering foundations using Lego/Lego Technic.  
**Primary audience:** Families who want hands-on engineering fundamentals.

**Core content:**
- Structural integrity basics
- Mechanics and gear ratio fundamentals
- Team build challenges and iteration loops
- Example project gallery (physical prototypes)

### /curriculum/blocks/
**Page:** Blocks (Digital Logic)  
**Purpose:** Explain software/system thinking with kid-friendly platforms.  
**Primary audience:** Kids transitioning from play to logic and code.

**Core content:**
- Scratch logic and control flow
- Minecraft redstone/systems thinking applications
- Intro to computational problem solving
- Example digital projects and learning milestones

### /curriculum/bots/
**Page:** Bots (Hardware Integration)  
**Purpose:** Show how code connects to real hardware using micro:bit and Arduino.  
**Primary audience:** Families interested in robotics/physical computing.

**Core content:**
- Sensor, input/output, and simple electronics concepts
- Micro:bit and Arduino starter pathways
- Debugging and fail-forward mindset examples
- Example robot/prototype integrations

### /curriculum/ai-track/
**Page:** AI Track (New Literacy)  
**Purpose:** Define age-appropriate AI education and safe usage boundaries.  
**Primary audience:** Parents seeking future-ready skills with responsible guardrails.

**Core content:**
- Intro to ML concepts through block coding
- Generative AI as brainstorming and iteration partner
- Safety, ethics, and prompt hygiene basics for kids
- Practical parent-child co-learning activities

### /curriculum/entrepreneurship/
**Page:** Entrepreneurship (Pitch Pods)  
**Purpose:** Translate projects into communication, leadership, and real-world thinking.  
**Primary audience:** Families who value agency, confidence, and presentation skills.

**Core content:**
- Pitch Pod format and cadence
- Budgeting, supply chain, and decision-making basics
- Public speaking and storytelling for demos
- Mentor feedback loops and showcase expectations

### /community/
**Page:** Community  
**Purpose:** Demonstrate local ecosystem involvement and social proof.  
**Primary audience:** Cedar Park/Austin families evaluating community quality.

**Core content:**
- Community values and collaboration norms
- Mentor spotlights (parent expertise profiles)
- Family testimonials and outcomes
- Local partnerships/events overview

### /community/events/
**Page:** Events  
**Purpose:** Publish upcoming and past local events with clear participation details.  
**Primary audience:** Families deciding when/how to engage.

**Core content:**
- Monthly workshops and demo days
- Cedar Park and greater Austin event calendar
- Registration links and attendance guidance
- Recaps with project highlights

### /blog/
**Page:** Blog / Project Spotlight Index  
**Purpose:** Ongoing content hub for projects, interviews, and local updates.  
**Primary audience:** Current and prospective families; local community.

**Core content:**
- Filterable post list (Project Spotlight, Mentor Interview, Community Update)
- Featured monthly kid project
- Internal links to curriculum tracks and Join page

### /blog/project-spotlights/[slug]/
**Page Type:** Project Spotlight Post  
**Purpose:** Showcase student builds, process, and lessons learned.  
**Primary audience:** Families seeking concrete evidence of outcomes.

**Core content template:**
- Project summary and track alignment
- Build process and iteration moments
- What worked/what changed during debugging
- Skills gained and next-step ideas

### /blog/mentor-interviews/[slug]/
**Page Type:** Mentor Interview Post  
**Purpose:** Highlight parent mentor experience and expertise transfer.  
**Primary audience:** Potential parent mentors and enrolled families.

**Core content template:**
- Mentor background
- Why they joined B3
- Advice for family innovation projects
- Call-to-action for mentor participation

### /blog/community-updates/[slug]/
**Page Type:** Community Update Post  
**Purpose:** Share local activity, milestones, and announcements.  
**Primary audience:** Existing community and local prospects.

**Core content template:**
- Event or milestone summary
- Photos/projects recap
- Upcoming dates and links

### /join/
**Page:** Join / Waitlist  
**Purpose:** Primary conversion page for Founding 50 Cohort interest capture.  
**Primary audience:** Parents ready to take action.

**Core content:**
- Enrollment overview and cohort framing
- Waitlist form (name, email, child age, interest area)
- Program fit checklist
- FAQ snippet and next-step timeline

### /contact/
**Page:** Contact  
**Purpose:** Direct communication channel for questions and partnerships.  
**Primary audience:** Parents, mentors, local partners.

**Core content:**
- Contact form and response expectation
- Email and social links (if applicable)
- Partnership inquiry section

## 3. Utility Pages

### /faq/
**Page:** FAQ  
**Purpose:** Remove enrollment friction and answer common parent concerns.  
**Core content:**
- Age suitability (6-12 focus)
- Parent participation expectations
- Equipment/tools required
- Safety and supervision model
- Program logistics and scheduling

### /privacy/
**Page:** Privacy Policy  
**Purpose:** Legal and trust requirement, especially for family and child-related data.  
**Core content:**
- Data collected from forms
- Usage and retention policy
- Contact for privacy requests

### /terms/
**Page:** Terms of Use  
**Purpose:** Standard legal usage terms for site and participation information.  
**Core content:**
- Website usage terms
- Program participation disclaimers
- IP/content policy for submissions

## 4. Footer Navigation

- About
- Curriculum
- Community
- Blog
- Join
- Contact
- FAQ
- Privacy
- Terms

## 5. Content Model Notes (Astro + Markdown)

- Use markdown collections for:
  - Blog posts (`project-spotlights`, `mentor-interviews`, `community-updates`)
  - Curriculum track pages
- Keep landing pages (`Home`, `About`, `Join`) as Astro pages with reusable content sections.
- Ensure every page supports the brand voice: curious, collaborative, forward-thinking, playful yet professional.
