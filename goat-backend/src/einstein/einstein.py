import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

# Credentials from einstein.txt
ACCESS_TOKEN = os.getenv("EINSTEIN_ACCESS_TOKEN")
CONSUMER_KEY = os.getenv("EINSTEIN_CONSUMER_KEY")
CONSUMER_SECRET = os.getenv("EINSTEIN_CONSUMER_SECRET")

# API endpoint for text generation using OpenAI GPT-4o Mini
URL = os.getenv("EINSTEIN_URL")

# Headers as specified in the documentation
headers = {
    'Authorization': f'Bearer {ACCESS_TOKEN}',
    'Content-Type': 'application/json',
    'x-sfdc-app-context': 'EinsteinGPT',
    'x-client-feature-id': 'ai-platform-models-connected-app'
}


