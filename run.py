import os
import subprocess
import time
from multiprocessing import Process

def run_frontend():
    os.chdir('goat-frontend')
    subprocess.Popen('npm run dev', shell=True, cwd=os.getcwd())

def run_express():
    os.chdir('goat-backend')
    subprocess.Popen('node src/server.js', shell=True, cwd=os.getcwd())

def run_fastapi():
    os.chdir('goat-backend')
    # For FastAPI, we need to activate the virtual environment
    subprocess.Popen('source .venv/bin/activate && python3 src/server.py', shell=True, cwd=os.getcwd())

def run_chatbot():
    os.chdir('goat-backend')
    # For chatbot, we need to activate the virtual environment
    subprocess.Popen('source .venv/bin/activate && python3 ./src/mcp_client/chatClient.py', shell=True, cwd=os.getcwd())

if __name__ == '__main__':
    # Create process objects
    frontend = Process(target=run_frontend)
    express = Process(target=run_express) 
    fastapi = Process(target=run_fastapi)
    chatbot = Process(target=run_chatbot)

    # Start all processes
    frontend.start()
    express.start()
    fastapi.start() 
    chatbot.start()

    try:
        # Keep main process running
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        # Terminate all processes on Ctrl+C
        frontend.terminate()
        express.terminate()
        fastapi.terminate()
        chatbot.terminate()

        # Wait for processes to finish
        frontend.join()
        express.join()
        fastapi.join()
        chatbot.join()