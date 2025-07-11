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

> **Wireframes:**  
- **Home Page** <img width="1728" height="954" alt="home_page" src="https://github.com/user-attachments/assets/1b5a0092-fd9c-4cdc-b96d-9e8d3e31bf95" />
- **Create Deal** <img width="1728" height="957" alt="create_deal" src="https://github.com/user-attachments/assets/73f419b1-0930-4a70-986d-cd9856506efa" /> 
- **View Deal** <img width="1728" height="958" alt="view_deal" src="https://github.com/user-attachments/assets/a890c86a-07b0-42ea-82de-e500ff20ba73" />  

---

Below is a breakdown of all the primary models in GoatForce. This structure supports deal tracking, risk analysis, communication insights, and AI-powered recommendations.

### Deals
| Field                  | Type      | Description                                      |
|------------------------|-----------|--------------------------------------------------|
| id                     | Int       | Unique deal identifier (PK)                      |
| deal_name              | String    | Name/title of the deal                           |
| company_name           | String    | Name of the prospect's company                   |
| stage                  | String    | Sales stage (e.g., Discovery, Negotiation)       |
| status                 | String    | Status of the deal (e.g., Active, Closed)        |
| deal_amount            | Float     | Value of the deal                                |
| expected_close_date    | DateTime  | Forecasted close date                            |
| created_at             | DateTime  | Deal creation timestamp                          |
| updated_at             | DateTime  | Deal last updated                                |

Relations:
- `Participants[]` – Buyer-side participants
- `Risks[]` – Risk scores + explanations
- `ActivityMetrics[]` – Message engagement metrics
- `AiRecommendation[]` – AI-suggested actions
- `FollowUp[]` – Follow-up comms
- `Tags[]` – Custom tagging
- `ConversationHistory[]` – Slack & email records
- `DealInsights[]` – KPI summaries

---

### Participants
| Field                | Type     | Description                          |
|----------------------|----------|--------------------------------------|
| id                   | Int      | Unique ID (PK)                       |
| deal_id              | Int      | FK to Deal                           |
| prospect_name        | String   | Name of the person on buyer's side   |
| email                | String   | Email address                        |
| slack_id             | String   | Slack identifier                     |
| role                 | String   | Role at the company                  |
| sentiment            | String   | Current sentiment (e.g., Positive)   |
| communication_score  | Float    | AI-evaluated score of communication  |
| created_at           | DateTime | Timestamp of creation                |
| updated_at           | DateTime | Last update timestamp                |

Relations:
- `Personality[]` – AI-evaluated personality traits

---

### Risks
| Field               | Type     | Description                         |
|---------------------|----------|-------------------------------------|
| id                  | Int      | Unique ID (PK)                      |
| deal_id             | Int      | FK to Deal                          |
| deal_risk_score     | Float    | Overall deal risk                   |
| churn_risk_score    | Float    | Risk of customer walking away       |
| timeline_risk_score | Float    | Risk based on timing delays         |
| budget_risk_score   | Float    | Risk related to budget discussions  |
| created_at          | DateTime | Created timestamp                   |
| updated_at          | DateTime | Last updated timestamp              |

Relations:
- `RiskExplanation[]` – Detailed breakdown of risk components

---

### ActivityMetrics
| Field                        | Type     | Description                              |
|------------------------------|----------|------------------------------------------|
| id                           | Int      | Unique ID (PK)                           |
| deal_id                      | Int      | FK to Deal                               |
| message_count                | Int      | Total number of exchanged messages       |
| prospect_response_time       | Float    | Avg. time for prospect to respond        |
| engagement_trend            | String   | Trend summary (e.g., Increasing)         |
| last_communication_source   | String   | Slack or Email                           |
| last_communication_summary  | String   | TL;DR of the last message                |
| created_at                  | DateTime | Timestamp of creation                    |
| updated_at                  | DateTime | Last update timestamp                    |

Relations:
- `Timeline[]` – Event log for communication history

---

### AiRecommendation
| Field                    | Type       | Description                          |
|--------------------------|------------|--------------------------------------|
| id                       | Int        | Unique ID (PK)                       |
| deal_id                  | Int        | FK to Deal                           |
| next_steps               | String[]   | AI-suggested next actions            |
| escalation_triggers      | String     | Phrases/flags indicating risk        |
| deal_acceleration_tactics| String     | AI-suggested ways to close faster    |
| created_at               | DateTime   | Creation time                        |
| updated_at               | DateTime   | Last modified time                   |

---

### FollowUp
| Field              | Type     | Description                         |
|--------------------|----------|-------------------------------------|
| id                 | Int      | Unique ID (PK)                      |
| deal_id            | Int      | FK to Deal                          |
| communication_type | String   | Email, Call, etc.                   |
| contact_address    | String   | Email or phone                      |
| subject            | String?  | Optional subject                    |
| body               | String?  | Optional message body               |
| message_id         | String?  | Associated external message ID      |
| scheduled_at       | DateTime?| Scheduled time of follow-up        |
| created_at         | DateTime | Created timestamp                   |
| updated_at         | DateTime | Last modified                       |

---

### Tags
| Field       | Type     | Description               |
|-------------|----------|---------------------------|
| id          | Int      | Unique ID (PK)            |
| deal_id     | Int      | FK to Deal                |
| tag         | String[] | Array of string tags      |
| created_at  | DateTime | Created timestamp         |
| updated_at  | DateTime | Last modified             |

---

### ConversationHistory
| Field         | Type     | Description                         |
|---------------|----------|-------------------------------------|
| id            | Int      | Unique ID (PK)                      |
| deal_id       | Int      | FK to Deal                          |
| slack         | Json     | Full Slack message thread           |
| email         | Json     | Full email thread                   |
| deal_summary  | String   | Summarized context                  |
| created_at    | DateTime | Created timestamp                   |
| updated_at    | DateTime | Last updated timestamp              |

---

### DealInsights
| Field         | Type   | Description                 |
|---------------|--------|-----------------------------|
| id            | Int    | Unique ID (PK)              |
| deal_id       | Int    | FK to Deal                  |
| kpi_insights  | Json   | Key performance indicators  |
| created_at    | DateTime | Timestamp of creation     |
| updated_at    | DateTime | Timestamp of update       |

---

### RiskExplanation
| Field                      | Type     | Description                               |
|----------------------------|----------|-------------------------------------------|
| id                         | Int      | Unique ID (PK)                            |
| risk_id                    | Int      | FK to Risks                               |
| budget_risk_explanation    | String   | Why the budget score is low/high          |
| timeline_risk_explanation  | String   | Timeline risk context                     |
| churn_risk_explanation     | String   | Churn risk context                        |
| deal_risk_summary          | String   | Overall risk explanation                  |
| created_at                 | DateTime | Created timestamp                         |
| updated_at                 | DateTime | Last updated                              |

---

### Personality
| Field              | Type     | Description                              |
|--------------------|----------|------------------------------------------|
| id                 | Int      | Unique ID (PK)                           |
| participant_id     | Int      | FK to Participant                        |
| personality_traits | Json     | Personality insights via AI              |
| created_at         | DateTime | Created timestamp                        |
| updated_at         | DateTime | Last modified timestamp                  |

---

### Timeline
| Field               | Type     | Description                          |
|---------------------|----------|--------------------------------------|
| id                  | Int      | Unique ID (PK)                       |
| activity_metrics_id | Int      | FK to ActivityMetrics                |
| event_date          | DateTime | Date of activity                     |
| event_type          | String   | Type (message, call, etc.)           |
| event_details       | Json     | Detailed log of event                |
| created_at          | DateTime | Timestamp of creation                |
| updated_at          | DateTime | Timestamp of update                  |

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
