def strip_json(json_string: str) -> str:
    return json_string.strip("```json\n").strip("```")