# GoatForce – Project Plan

## Team Name: GoatForce  
**Team Members:**  
- Oliver Majano  
- Dariel Gutierrez
- Costas Papanicolaou

---

## Problem Recap  
Sales reps today juggle multiple deals across email, Slack, and CRM tools like Salesforce. These systems are often bloated, disjointed, and difficult to keep up with. Important deal signals like tone shifts, objections, or personality traits get buried. Bruce, our primary user, struggles to track conversations and extract valuable insight fast enough to close deals confidently.

**GoatForce** solves this by providing a lightweight AI-powered CRM layer that integrates with Gmail and Slack to surface deal insights, risks, and engagement signals. Through natural language queries and intelligent updates, reps stay on top of deals—no clunky tabs required.

---

## User Roles & Personas

### Bruce Wayne – Sales Representative  
- Works at a fast-paced tech company  
- Handles 5–10 deals at once  
- Wants quick visibility into deal risk, tone shifts, objections  
- Hates bloated CRMs, prefers fast insights  

### James Smith – Enterprise Prospect  
- Head of IT at Nike  
- Polite, inquisitive, decisive  
- Responds well to clear value props  

### Sophia Nguyen – Strategic Partnerships at Airbnb  
- Tough negotiator, high standards  
- Prefers clarity and professionalism  
- Slow to trust new tools  

---

## User Stories

**1. As a sales rep**, I want to see a summary of all active deals so I can understand their risk and urgency.

**2. As a sales rep**, I want to receive AI-generated deal risk scores based on Gmail and Slack conversations.

**3. As a sales rep**, I want to ask questions like "Which deals are at risk?" and get meaningful insights in plain English.

**4. As a sales rep**, I want to view personality insights about the buyer to tailor my communication.

**5. As a sales rep**, I want to refresh all deal data with one click so that everything is up-to-date.

**6. As a sales rep**, I want to view all past communications in one timeline so I don’t have to switch platforms.

---

## Pages / Screens & Wireframes

### Pages
1. Home Dashboard
2. Deal Detail View
3. Deal Timeline Modal
4. Chat Interface
5. Settings

> **Wireframes:**  
- **Home Page** `home_page.png`
- **Create Deal** `create_deal.png`  
- **View Deal** `view_deal.png`  

(Add wireframe screenshots to the repo under `/planning/wireframes`)

---

## Data Model

### Deal
| Column Name       | Type       | Description                          |
|------------------|------------|--------------------------------------|
| id               | Int        | Primary key                          |
| deal_name        | String     | Name of the deal                     |
| company_name     | String     | Name of the prospect's company       |
| rep_id           | Int        | FK to sales rep                      |
| amount           | Float      | Deal value in USD                    |
| expected_close   | DateTime   | Expected close date                  |
| stage            | String     | Current CRM stage                    |
| risk_score       | Float      | AI-evaluated deal risk (0–100)       |

### Message
| Column Name | Type     | Description                  |
|-------------|----------|------------------------------|
| id          | Int      | Primary key                  |
| deal_id     | Int      | FK to Deal                   |
| channel     | String   | Email or Slack               |
| sender      | String   | Rep or Prospect              |
| timestamp   | DateTime | Time message was sent        |
| content     | Text     | Body of the message          |

### Insight
| Column Name     | Type     | Description                      |
|----------------|----------|----------------------------------|
| id             | Int      | Primary key                      |
| deal_id        | Int      | FK to Deal                       |
| sentiment      | String   | Positive, Neutral, or Negative   |
| intent         | String   | Inquire, Stall, Escalate, etc.   |
| tone           | String   | Casual, Formal, etc.             |
| objections     | Text     | Detected objections              |
| personality    | Text     | Buyer personality traits         |

---

## Endpoints

| CRUD    | HTTP Verb | Description                              | User Stories |
|---------|-----------|------------------------------------------|--------------|
| Create  | POST       | Create a new deal                        | 1            |
| Read    | GET        | Fetch all deals for dashboard            | 1            |
| Read    | GET        | Fetch specific deal details              | 1, 2         |
| Update  | PUT        | Refresh deal data (Gmail + Slack parse)  | 5            |
| Create  | POST       | Create a new message                     | 6            |
| Read    | GET        | Fetch full timeline for a deal           | 6            |
| Create  | POST       | Generate AI insights via Einstein        | 2, 3, 4      |
| Read    | GET        | Query insights with natural language     | 3            |

---
