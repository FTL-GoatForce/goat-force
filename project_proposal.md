# Capstone Project Planning

## Step 1: Themes
- Information/Computing
- Productivity/Professional Services
- Finance (indirectly through sales workflows and revenue optimization)

---

## Step 2: Problem Statements

**Problem Statement 1**  
Sales representatives often neglect CRM updates due to the fast pace of their workflows, leading to missing or outdated data that hurts forecasting and follow-up effectiveness.  
**Audience**: Sales Representatives

**Problem Statement 2**  
Sales managers lack real-time visibility into which deals are at risk, making it harder to coach reps effectively or intervene before deals fall through.  
**Audience**: Sales Managers

**Problem Statement 3**  
Sales reps often communicate without knowing the prospect’s tone, preferred communication style, or objection patterns — reducing the effectiveness of outreach.  
**Audience**: Sales Representatives

---

## Step 3: Solutions Brainstorm

### Problem Statement 1 – Outdated CRM Data

- **App Idea 1**: An AI assistant that highlights outdated fields in deals and offers autofill suggestions based on historical data.
- **App Idea 2**: A Slack bot that reminds reps to log activities and syncs summaries directly into CRM.
- **App Idea 3**: A mobile-first CRM hygiene checklist with GPT-generated fill-ins for missing fields.

### Problem Statement 2 – Lack of Real-Time Deal Visibility

- **App Idea 1**: A dashboard that shows risky deals based on activity signals (e.g. inactivity, repeated stage changes).
- **App Idea 2**: A weekly AI-generated summary report that managers can read like a narrative email.
- **App Idea 3**: A manager-only view of rep performance showing deal health scores and outreach consistency.

### Problem Statement 3 – Ineffective Outreach Due to Personality Mismatch

- **App Idea 1**: A sandbox simulator where reps can test how different messages would be received based on inferred personality traits.
- **App Idea 2**: A tone-suggestion tool that rewrites emails based on the recipient’s preferred tone and behavior patterns.
- **App Idea 3**: A “prospect profile” page that visualizes response time, tone, and best practices learned from past engagements.

---

## Step 4: Feature Brainstorm

### Selected App: AI CRM Assistant Layer + Personality-Aware Deal Simulator

#### Core Features
- User authentication system for sales reps and managers
- Deal Risk Detection Engine based on inactivity and engagement metrics
- Follow-Up Generator that drafts messages using past conversations
- CRM Hygiene Assistant that identifies and suggests autofill for missing fields
- Weekly AI-generated Storytelling Summaries of pipeline performance
- Personality-Aware Sandbox for previewing prospect reactions
- Visual dashboard showing deal statuses, risks, and recommended actions
- Backend orchestration layer to simulate multi-channel inputs (Slack, Zoom, Gmail)
- PostgreSQL to simulate Salesforce CRM objects (Deals, Contacts, Tasks)

#### Optional Add-ons
- Gmail/Slack plugin for inline CRM suggestions
- Rep leaderboard for hygiene and deal recovery performance
- Feedback prompt after sandbox simulations to rate usefulness
- Admin heatmap view for reps’ engagement and deal status

#### Feasibility & Excitement
- All features are feasible within the capstone timeline if scoped properly
- Capstone-ready with simulated data; aligns with agentic workflows and MCP-style orchestration
- High motivation from team to explore AI workflows in real-world enterprise scenarios

---

## Step 5: Rinse and Repeat

To iterate further:
- Revisit Problem 1 with narrower scope (e.g. just activity reminders)
- Merge Problem 2 and 3 into a hybrid manager dashboard with real-time deal health + communication tone analysis
- Reframe Problem 3 to focus on coaching reps rather than simulating outreach
