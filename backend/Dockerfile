# 1. The Base Image (Matches the virtual environment Python 3.13)
FROM python:3.13-slim

# 2. The Work Directory (Creates a folder inside Linux for the app)
WORKDIR /app

# 3. Copy ONLY the requirements first
COPY requirements.txt .

# 4. Install libraries (This layer is cached unless requirements.txt changes)
RUN pip install --no-cache-dir -r requirements.txt

# 5. NOW copy everything else (your actual code)
# This layer will update every time you change a .py file
COPY . .

# 6. EXposing the port that the backend runs on
EXPOSE 8000

#7. The default command to start the application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
