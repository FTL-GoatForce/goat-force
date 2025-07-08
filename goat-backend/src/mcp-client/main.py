import os
import asyncio 
from google import genai 
from google.genai import types
from typing import List, Literal, Optional
from datetime import datetime
import json

# Initialize Google GenAI client
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
model = "gemini-2.5-flash"

response = client.models.generate_content(
    model=model, contents="Explain how cool gemini is"
)
print(response.text)
