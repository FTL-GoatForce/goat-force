import os
import json

def load_data(email: str, slack_id: str) -> str:
    slack_data = []
    gmail_data = []

    # Get paths relative to current file
    base_path = os.getcwd()
    slack_path = os.path.join(base_path, "transcripts", "slack")
    gmail_path = os.path.join(base_path, "transcripts", "gmail")

    # Load Slack transcripts
    if os.path.exists(slack_path):
        for file in os.listdir(slack_path):
            if file.endswith(f"{slack_id}_structured_response.json"):
                with open(os.path.join(slack_path, file)) as f:
                    slack_data.append(json.load(f))
                    
    # Load Gmail transcripts         
    if os.path.exists(gmail_path):
        for file in os.listdir(gmail_path):
            if file.endswith(f"{email}_structured_response.json"):
                with open(os.path.join(gmail_path, file)) as f:
                    gmail_data.append(json.load(f))

    all_data = slack_data + gmail_data

    # Convert to JSON string
    json_data = json.dumps(all_data)
    print(json_data)
    return json_data